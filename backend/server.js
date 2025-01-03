const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Define routes
const communicationRoutes = require('./routes/communicationRoutes');
app.use('/api/communications', communicationRoutes);

const companyRoutes = require('./routes/companyRoutes');
app.use('/api/companies', companyRoutes);

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/calendar-tracker', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
