const mongoose = require('mongoose');

const CompanySchema = new mongoose.Schema({
  name: String,
  location: String,
  linkedinProfile: String,
  emails: [String],
  phoneNumbers: [String],
  comments: String,
  communicationPeriodicity: String,
});

module.exports = mongoose.model('Company', CompanySchema);
