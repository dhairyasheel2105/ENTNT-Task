const express = require('express');
const Company = require('../models/Company');
const router = express.Router();

router.get('/', async (req, res) => {
  const companies = await Company.find();
  res.json(companies);
});

router.post('/', async (req, res) => {
  const newCompany = new Company(req.body);
  await newCompany.save();
  res.status(201).json(newCompany);
});

module.exports = router;
