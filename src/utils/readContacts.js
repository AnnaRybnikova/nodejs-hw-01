import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const readContacts = async () => {
    try {
        const data = await fs.readFile(PATH_DB);
        console.log('File content:', data);
    } catch (err) {
        console.error('File reading error:', err);
    }
};
