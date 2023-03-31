import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required.'],
      minlength: [2, 'Name must be at least {MINLENGTH} characters.'],
    },
    age: {
      type: Number,
      required: [true, 'Age is required.'],
      min: [13, 'You must be at least {MIN} years old.'],
    },
    height: {
      type: Number,
      required: [true, 'Height is required.'],
    },
    weight: {
      type: Number,
      required: [true, 'Weight is required.'],
    },
    activityLevel: {
      type: String,
      required: [true, 'Please select your activity level.'],
    },
    goal: {
      type: String,
      required: [true, 'Please select a goal.'],
    },
    gender: {
      type: String,
      required: [true, 'Please select your gender.'],
    },
    image: {
      type: String,
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
