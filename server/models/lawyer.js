// models/lawyer.js

import mongoose, {Schema} from 'mongoose'

const lawyerSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  phone: {
    type: String,
    required: true
  },
  practiceArea: {
    type: String,
    required: true
  }
});

const Lawyer = mongoose.model('Lawyer', lawyerSchema);

export default Lawyer;
