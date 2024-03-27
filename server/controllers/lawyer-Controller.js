// controllers/lawyer-controller.js

import Lawyer  from '../models/lawyer.js';

export const addLawyer = async (req, res) => {
  try {
    const lawyer = new Lawyer(req.body);

    await lawyer.save();

    res.status(201).json(lawyer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export default {
  addLawyer,

};