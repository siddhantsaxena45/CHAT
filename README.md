# WhatsApp Chat Manager

A web-based CRUD application for managing chat messages. Built with **Node.js**, **Express**, **MongoDB**, and **EJS templates**, this project showcases how to implement essential backend and frontend functionality for a real-world application.

---

## Features
- **Dynamic Frontend**: Interactive HTML pages rendered with EJS templates.
- **CRUD Operations**: Add, view, edit, and delete chat messages seamlessly.
- **Database Integration**: Uses MongoDB for efficient and persistent data storage.
- **RESTful API**: Adheres to REST principles for routing and data management.

---

## Technologies Used
- **Node.js**: Server-side JavaScript runtime.
- **Express**: Framework for building RESTful web applications.
- **MongoDB**: NoSQL database for chat message storage.
- **Mongoose**: Simplifies MongoDB queries and schema creation.
- **EJS**: Template engine for dynamic HTML rendering.
- **CSS**: Styling for a clean and responsive frontend.
- **Method-Override**: Supports PUT and DELETE methods in forms.

---

## Project Structure
```
whatsapp-chat-manager/
|-- models/
|   |-- chat.js        # Mongoose schema for chat messages
|
|-- node_modules/      # npm dependencies
|
|-- public/
|   |-- style.css      # Styling for the frontend
|
|-- views/
|   |-- chats.ejs      # Template for displaying all chats
|   |-- new.ejs        # Template for adding a new chat
|   |-- edit.ejs       # Template for editing an existing chat
|
|-- index.js           # Main server script
|-- init.js            # Script to seed the database with sample data
|-- package.json       # Project metadata and dependencies
```

---

## Installation and Setup

### Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/try/download/community)

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/whatsapp-chat-manager.git
   cd whatsapp-chat-manager
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start MongoDB:
   ```bash
   mongod
   ```

4. Seed the database with sample data (optional):
   ```bash
   node init.js
   ```

5. Run the server:
   ```bash
   node index.js
   ```

6. Open your browser and navigate to:
   ```
   http://localhost:8080/chats
   ```

---

## Usage
### 1. Add a Chat
- Click on "Add New Chat" to fill out the form.
- Provide the sender, receiver, and message.

### 2. View All Chats
- The homepage displays a list of all chats.

### 3. Edit a Chat
- Click on the "Edit" link next to a chat message to modify it.

### 4. Delete a Chat
- Click the "Delete" button next to a chat message to remove it.

---

## Mongoose Schema
The `Chat` model is defined in `models/chat.js`:
```javascript
const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema({
   from: { type: String, required: true },
   to: { type: String, required: true },
   message: { type: String, required: true },
   date: { type: Date, default: Date.now },
   edited: { type: Boolean, default: false }
});

module.exports = mongoose.model('Chat', chatSchema);
```

---

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Future Enhancements
1. **Authentication**: Add user login for security.
2. **Search**: Implement search and filtering by user or keywords.
3. **Pagination**: Efficiently handle large datasets.
4. **API Endpoints**: Expose RESTful APIs for integration.
5. **Frontend Framework**: Use React or Angular for a more dynamic UI.

---

## Contributing
Contributions are welcome! Feel free to open issues or submit pull requests for any improvements or new features.
