const { insertContact, getAllContacts, getContactById } = require('../models/contactModel');

exports.createContact = async (req, res) => {
  try {
    const { name, contactNumber, emailAddress } = req.body;

    if (!name || !contactNumber || !emailAddress) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailAddress)) {
      return res.status(400).json({ error: 'Please provide a valid email address' });
    }

    const contact = await insertContact(name, contactNumber, emailAddress);
    res.status(201).json({ message: 'Contact saved successfully', ...contact });

  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getContacts = async (req, res) => {
  try {
    const contacts = await getAllContacts();
    res.json({ contacts });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getContact = async (req, res) => {
  try {
    const contact = await getContactById(req.params.id);
    if (!contact) {
      return res.status(404).json({ error: 'Contact not found' });
    }
    res.json({ contact });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};
