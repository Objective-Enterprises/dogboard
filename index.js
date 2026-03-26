const express = require('express');
const axios = require('axios');
const path = require('path');
const { db, favorites } = require('./db');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

app.get('/', async (req, res) => {
    try {
        const response = await axios.get('https://dog.ceo/api/breeds/image/random');
        const imageUrl = response.data.message;
        res.render('index', { imageUrl });
    } catch (error) {
        console.error('Error fetching dog image:', error);
        res.status(500).send('Error fetching dog image');
    }
});

app.post('/favorite', async (req, res) => {
    try {
        const { imageUrl } = req.body;
        await db.insert(favorites).values({ url: imageUrl });
        res.redirect('/favorites');
    } catch (error) {
        console.error('Error saving favorite:', error);
        res.status(500).send('Error saving favorite');
    }
});

app.get('/favorites', async (req, res) => {
    try {
        const favoriteList = await db.select().from(favorites).orderBy(favorites.createdAt);
        res.render('favorites', { favorites: favoriteList });
    } catch (error) {
        console.error('Error fetching favorites:', error);
        res.status(500).send('Error fetching favorites');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
