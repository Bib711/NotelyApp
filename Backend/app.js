{/*const express = require('express');
const mongoose = require('mongoose');
const corus =require('cors');
const app = express();
const port = 3000;
app.use(corus());
app.use(express.json());
//app.put update ,app.remove delete
mongoose.connect('mongodb+srv://bibinmaleparambil111:Bibin2005@project1.2pltaxh.mongodb.net/')
.then(() => console.log('✅ Connected to MongoDB'))
.catch((err) => console.error('❌ MongoDB connection error:', err));
 app.get('/', async (req, res) => {
  try {
    const messages = await mongoose.connection.useDb('Database1').db.collection('notes').find().toArray();
    res.json(messages);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch messages' });
  }
});

app.listen(port, () => {
  console.log(`🚀 Server is running on http://localhost:${port}`);
});*/}

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
//app.put update ,app.remove delete

mongoose.connect('mongodb+srv://bibinmaleparambil111:Bibin2005@project1.2pltaxh.mongodb.net/')
.then(() => console.log('✅ Connected to MongoDB'))
.catch((err) => console.error('❌ MongoDB connection error:', err));

// Get all notes
app.get('/', async (req, res) => {
  try {
    const notes = await mongoose.connection.useDb('Database1').collection('notes').find().toArray();
    res.json(notes);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch notes' });
  }
});

// Add a new note
app.post('/', async (req, res) => {
  try {
    const { title, content } = req.body;
    const result = await mongoose.connection.useDb('Database1').collection('notes').insertOne({ title, content });
    res.json({ _id: result.insertedId, title, content });
  } catch (err) {
    res.status(500).json({ error: 'Failed to create note' });
  }
});

// Update a note
app.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content } = req.body;
    await mongoose.connection.useDb('Database1').collection('notes').updateOne(
      { _id: new mongoose.Types.ObjectId(id) },
      { $set: { title, content } }
    );
    res.json({ _id: id, title, content });
  } catch (err) {
    res.status(500).json({ error: 'Failed to update note' });
  }
});

// Delete a note
app.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await mongoose.connection.useDb('Database1').collection('notes').deleteOne({ _id: new mongoose.Types.ObjectId(id) });
    res.json({ message: 'Note deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete note' });
  }
});

app.listen(port, () => {
  console.log(`🚀 Server is running on http://localhost:${port}`);
});