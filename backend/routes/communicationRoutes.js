const express = require('express');
const Communication = require('../models/Communication');
const Company = require('../models/Company');
const router = express.Router();

// Get all communications
router.get('/', async (req, res) => {
  const communications = await Communication.find().populate('companyId');
  res.json(communications);
});

// Add a new communication
router.post('/', async (req, res) => {
  const newCommunication = new Communication(req.body);
  await newCommunication.save();
  res.status(201).json(newCommunication);
});

// Get communications by company ID
router.get('/company/:companyId', async (req, res) => {
  const communications = await Communication.find({ companyId: req.params.companyId });
  res.json(communications);
});

// Update a communication
router.put('/:id', async (req, res) => {
  const updatedCommunication = await Communication.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updatedCommunication);
});

// Delete a communication
router.delete('/:id', async (req, res) => {
  await Communication.findByIdAndDelete(req.params.id);
  res.status(204).send();
});

module.exports = router;
