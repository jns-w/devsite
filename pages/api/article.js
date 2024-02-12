import fs from 'fs/promises';
import path from 'path';

export default async function handler(req, res) {
    const {slug} = req.query;
    const filePath = path.join(process.cwd(), 'data/articles', `${slug}.md`);

    try {
        const fileContent = await fs.readFile(filePath, 'utf-8')
        // setTimeout(() => res.status(200).json({content: fileContent}), 200); // simulate slow connection (for testing purpose
        res.status(200).json({content: fileContent});
    } catch (error) {
        console.error('Error reading MD file:', error);
        res.status(500).json({error: 'Internal Server Error'});
    }
}