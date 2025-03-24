import type { NextApiRequest, NextApiResponse } from 'next';
import User from '../../../models/User';
import connectDB from '../../../utils/db';
import jwt from 'jsonwebtoken';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ message: 'Method Not Allowed' });

  const { email, password } = req.body;

  await connectDB();

  try {
    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: 'Invalid email or password' });

    // Compare Password using bcrypt
    const isMatch = await user.comparePassword(password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid email or password' });

    // Generate JWT Token
    const token = jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET!, {
      expiresIn: '1d',
    });

    res.status(200).json({ token, message: 'Login successful' });
  } catch (error) {
    console.error("Login Error:", error);
    res.status(500).json({ message: 'Something went wrong', error });
  }
}
