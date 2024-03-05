(async function() {
    let contacts = [];
    let contactElements = document.querySelectorAll('[data-test-id="contact-name"]');
    let currentIndex = 0;
    let batchNumber = 1;

    // Function to simulate a click event
    function simulateClick(element) {
        const event = new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
            view: window
        });
        element.dispatchEvent(event);
    }

    // Promise-based delay function
    function delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    // Function to download data as a CSV file
    function downloadCSV(data, filename) {
        const csvContent = 'data:text/csv;charset=utf-8,' + data.map(e => e.join(',')).join('\n');
        const encodedUri = encodeURI(csvContent);
        const link = document.createElement('a');
        link.setAttribute('href', encodedUri);
        link.setAttribute('download', filename);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    // Close the modal (if any)
    async function closeModal() {
        const closeButton = document.querySelector('svg._close_1ml08_30');
        if (closeButton) {
            simulateClick(closeButton);
            await delay(500); // Wait for modal to close
        }
    }

    // Extract contact details
    async function extractContacts() {
        for (let i = currentIndex; i < contactElements.length; i++) {
            const contact = contactElements[i];
            simulateClick(contact);
            await delay(1000); // Wait for the modal to display information

            const contactName = contact.textContent.trim();
            const phoneNumber = document.querySelector('[data-test-id="user-phone"]')?.textContent.trim() || 'N/A';
            const email = document.querySelector('[data-test-id="user-email"]')?.textContent.trim() || 'N/A';
            contacts.push([contactName, phoneNumber, email]);
            
            if (contacts.length % 40 === 0 || i === contactElements.length - 1) {
                await closeModal();
                downloadCSV(contacts, `contacts_batch_${batchNumber}.csv`);
                batchNumber++;
                contacts = []; // Reset for next batch
                currentIndex = i + 1; // Update the current index to continue from the next contact
                await delay(1000); // Delay before the next action
                break; // Break the loop to handle "Load More" or end
            }
        }

        if (currentIndex < contactElements.length) {
            await extractContacts(); // Continue with remaining contacts
        } else {
            await clickLoadMoreButtons(); // Load more contacts if available
        }
    }

    // Function to click the "Load More" button and continue extraction
    async function clickLoadMoreButtons() {
        const loadMoreButton = Array.from(document.querySelectorAll('button')).find(button => button.textContent.trim() === 'Load More');
        if (loadMoreButton) {
            simulateClick(loadMoreButton);
            await delay(3000); // Wait for new contacts to load
            contactElements = document.querySelectorAll('[data-test-id="contact-name"]'); // Re-query to get the new set of contacts
            await extractContacts(); // Continue with the new set of contacts
        } else {
            console.log('No more "Load More" buttons. Extraction complete.');
        }
    }

    await extractContacts();
})();
