const express = require('express');
const app = express();
const port = 8080;
const path = require('path');
const mongoose = require('mongoose');
const Chat = require('./models/chat');
const moment = require('moment');
const methodOverride = require('method-override');
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));
async function main() {
    await mongoose.connect('mongodb://localhost:27017/whatsapp');
}
main()
    .then(() => { console.log('Connected to MongoDB'); })
    .catch(err => console.log(err));
app.get('/', (req, res) => {
    res.send('Hello World');
});
app.get('/chats', async (req, res) => {
    const allchat = await Chat.find();
    allchat.forEach(chat => {
        chat.formattedDate = moment(chat.date).format('DD/MM/YYYY HH:mm');
    });
    res.render('chats', { allchat });
});
app.get('/chats/new', (req, res) => {
    res.render('new');
});
app.get('/chats/:id/edit', async (req, res) => {
    const { id } = req.params;
    const chat = await Chat.findById(id);
    res.render('edit', { chat });
});
app.put('/chats/:id', async (req, res) => {
    const { id } = req.params;
    const {message: newmsg} = req.body;
    const chat = await Chat.findByIdAndUpdate(id, { message: newmsg, edited: true,date: moment(Date.now()).format('DD/MM/YYYY HH:mm') }, { runValidators: true }, { new: true });
    res.redirect('/chats');
});
app.post('/chats', async (req, res) => {
    const { from, message, to } = req.body;
    const chat = new Chat({ from, message, to });
    await chat.save();
    res.redirect('/chats');
});
app.delete('/chats/:id', async (req, res) => {
    const { id } = req.params;
    await Chat.findByIdAndDelete(id);
    res.redirect('/chats');
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});