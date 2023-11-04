import mongoose from "mongoose";

const Schema = mongoose.Schema;

const TrainingSchema = new Schema({
  type: String,
  price: Number,
  gym: { type: Schema.Types.ObjectId, ref: 'Gym' },
});

export const TrainingModel = mongoose.model("Training", TrainingSchema);

const GymSchema = new Schema({
  branchName: String,
  adminName: String,
  adminPhone: String,
  trainings: [{ type: Schema.Types.ObjectId, ref: 'Training' }],
  freeSlots: Number,
});

export const GymModel = mongoose.model("Gym", GymSchema);

const CustomerSchema = new Schema({
  name: String,
  email: String,
  register: [{ type: Schema.Types.ObjectId, ref: 'Purchase' }],
});

export const CustomerModel = mongoose.model("Customer", CustomerSchema);

const PurchaseSchema = new Schema({
  training: { type: Schema.Types.ObjectId, ref: 'Training' },
  customer: { type: Schema.Types.ObjectId, ref: 'Customer' },
  price: Number,
  branchIncome: Number,
});

export const PurchaseModel = mongoose.model("Purchase", PurchaseSchema);