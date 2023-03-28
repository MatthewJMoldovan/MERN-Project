import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'is required.'],
      minlength: [2, 'must be at least {MINLENGTH} characters.'],
    },
    age: {
      type: Number,
      required: [true, 'is required.'],
      minlength: [2, 'must be at least {MINLENGTH} characters.'],
    },
    gender: {
      type: String,
      required: [true, 'is required.'],
    },
    height: {
      type: Number,
      required: [true, 'is required.'],
    },
    weight: {
      type: Number,
      required: [true, 'is required.'],
    },
    activityLevel: {
      type: String,
      required: [true, 'is required.'],
    },
  },
  { timestamps: true }
);

export const User = mongoose.model('User', UserSchema);
