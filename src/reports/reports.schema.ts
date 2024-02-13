import * as mongoose from 'mongoose';

export const ReportSchema = new mongoose.Schema({
  price: { type: Number, required: true },
  //   car: { type: mongoose.Schema.Types.ObjectId, ref: 'Car' },
  //   user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  //   date: { type: Date, required: true },
  //   description: { type: String, required: true },
  //   status: { type: String, required: true },
});
