const express = require('express');
const router = express.Router();

// @route    GET api/contacts
// @desc     Get all users contacts
// @acess    Private (have to be logged in)
router.get('/', (req, res) => {
    res.send('Get all contacts');
});

// @route    POST api/contacts/:id
// @desc     Add a new contact
// @acess    Private (have to be logged in)
router.post('/:id', (req, res) => {
    res.send('Add contact');
});

// @route    PUT api/contacts/:id
// @desc     Update contact
// @acess    Private (have to be logged in)
router.put('/:id', (req, res) => {
    res.send('Update contact');
});

// @route    DELETE api/contacts/:id
// @desc     Delete contact
// @acess    Private (have to be logged in)
router.delete('/:id', (req, res) => {
    res.send('Delete contact');
});

module.exports = router;