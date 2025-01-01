const mongoose = require('mongoose');
const Chat = require('./models/chat');
async function main() {
    await mongoose.connect('mongodb://localhost:27017/whatsapp');
}
main().then(() => { console.log('Connected to MongoDB'); }).catch(err => console.log(err));

let allchats=[
    {
        from: 'sachin',
        to: 'Bob',
        message: 'Hello Bob'
    },
    {
        from: 'Harry',
        to: 'Alice',
        message: 'Hello Alice'
    },
    {
        from: 'Alice',
        to: 'Bob',
        message: 'How are you?'
    },
    {
        from: 'Bob',
        to: 'Nancy',
        message: 'I am fine'
    },
    {
        from: 'Charlie',
        to: 'Bob',
        message: 'Good to hear that'
    },
    {
        from: 'Tom',
        to: 'Alice',
        message: 'Bye'
    },
    {
        from: 'Alice',
        to: 'prince',
        message: 'Bye'
    },
];

Chat.insertMany(allchats);