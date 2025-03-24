import bcrypt from 'bcryptjs';
import { NextApiRequest, NextApiResponse } from 'next';
import User from '../../../models/User';
import connectDB from '../../../utils/db';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  await connectDB();

  const { firstName, lastName, email, password } = req.body;

  if (!firstName || !lastName || !email || !password) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    // ✅ Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // ✅ Ensure Proper Password Hashing
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, 10);

    console.log("🔑 Hashed Password Before Saving:", hashedPassword);

    // ✅ Create & Save User
    const newUser = new User({
      firstName,
      lastName,
      email,
      password: hashedPassword, // Ensure we save the hashed password
    });

    await newUser.save();
    
    return res.status(201).json({ message: 'User registered successfully' });

  } catch (error) {
    console.error('❌ Registration error:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}
