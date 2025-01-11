import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const writeContacts = async (updatedContacts) => {
    try {
        const data = JSON.stringify(updatedContacts, null, 2);
        
        await fs.writeFile(PATH_DB, data, 'utf8');
        console.log('Data successfully written to the file.');
    } catch (err) {
        console.error('Error writing contacts to file:', err);
        throw new Error('Failed to write contacts data');
    }
};
