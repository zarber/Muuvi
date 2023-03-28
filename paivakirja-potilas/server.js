const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Connecting to MongoDB
mongoose.connect('mongodb+srv://arberz:Muuvi2023@muuvi.ksvyj2g.mongodb.net/Kokeilu?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Defining a Mongoose schema for the diary entry
const DiaryEntrySchema = new mongoose.Schema({
    diary_date: String,
    diary_text: String
});

// Creatuíe a Mongoose model for the diary entry
const DiaryEntry = mongoose.model('DiaryEntry', DiaryEntrySchema);

// Handle the form submission
app.post('/submit', (req, res) => {
    const newDiaryEntry = new DiaryEntry({
        diary_date: req.body.diary_date,
        diary_text: req.body.diary_text
    });

    newDiaryEntry.save((err) => {
        if (err) {
            res.status(500).send('Error saving diary entry.');
        } else {
            res.status(200).send('Diary entry saved successfully.');
        }
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.use(express.static('public'));
