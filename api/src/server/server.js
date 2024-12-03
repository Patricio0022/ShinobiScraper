import express from 'express';
import fetch from 'node-fetch'; 
import cheerio from 'cheerio';

const app = express();
const PORT = 5000;

app.get('/scrape', async (req, res) => {
    try {
        const { name } = req.query;
        if (!name) {
            return res.status(400).json({ error: 'Character name is required' });
        }

        
        const formattedName = name.replace(' ', '_');
        const url = `https://naruto.fandom.com/wiki/${formattedName}`;

        const response = await fetch(url);
        const html = await response.text();
        const $ = cheerio.load(html);

        const items = [];
        $('p').each((i, element) => {
            items.push($(element).text().trim());
        });

        res.json({ items });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error while scraping' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});