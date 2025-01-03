const mongoose = require('mongoose');

const CommunicationSchema = new mongoose.Schema({
  companyId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Company',
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  notes: {
    type: String,
    required: false,
  },
});

module.exports = mongoose.model('Communication', CommunicationSchema);
