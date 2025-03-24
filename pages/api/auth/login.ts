// pages/api/auth/login.ts
import { NextApiRequest, NextApiResponse } from 'next';
import User from '../../../models/User';
import connectDB from '../../../utils/db';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  await connectDB();

  const { email, password } = req.body;

  // ✅ Basic Validation
  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' });
  }

  try {
    // ✅ Find User
    const user = await User.findOne({ email });
    console.log("🔍 Searching for User:", email);
    console.log("🔍 Found User:", user);
    if (!user) return res.status(400).json({ message: 'Invalid credentials' });

    // ✅ Compare Passwords
    const isMatch = await bcrypt.compare(password, user.password);
    console.log("🔍 Password Match:", isMatch);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

    // ✅ Generate JWT Token
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET!, { expiresIn: '1h' });

    return res.status(200).json({ token, message: 'Login successful' });
  } catch (error) {
    console.error('Login error:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}
