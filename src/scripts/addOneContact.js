import { readContacts } from "../utils/readContacts.js";
import { createFakeContact } from "../utils/createFakeContact.js";
import { writeContacts } from "../utils/writeContacts.js";

export const addOneContact = async () => {
    try {
        const contacts = await readContacts();
        contacts.push(createFakeContact());
            
        await writeContacts(contacts);
        console.log(`Successfully added one contact.`);
    } catch (error) {
        console.error('Error adding contact:', error);
    }
};

addOneContact();
