import { createFakeContact } from "../utils/createFakeContact.js";
import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";

const generateContacts = async (number) => {
    try {
        const contacts = await readContacts();
        const fakedContacts = Array.from(
            { length: number },
            () => createFakeContact()
        );
        contacts.push(...fakedContacts);
        
        await writeContacts(contacts);
        console.log(`Successfully generated contacts.`);
    } catch (error) {
        console.error('Error generating contacts:', error);
    }
};

generateContacts(5);
