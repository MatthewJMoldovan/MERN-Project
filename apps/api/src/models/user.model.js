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
    goal: {
      type: String,
      required: [true, 'is required.'],
    },
    gender: {
      type: String,
      required: [true, 'is required.'],
    },
    image: {
      base64: String,
      imageFormat: String,
    },
    bodyFat: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

console.log('User model created');
export const User = mongoose.model('User', UserSchema);
