import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { NextApiRequest, NextApiResponse } from 'next';
import User from '../../../models/User';
import connectDB from '../../../utils/db';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  await connectDB();

  const { email, password } = req.body;

  // ✅ Check if email and password are provided
  if (!email || !password) {
    console.error("❌ Missing email or password:", { email, password });
    return res.status(400).json({ message: 'Email and password are required' });
  }

  try {
    // ✅ Received Login Request
    console.log("✅ Received Login Request for:", email);

    // ✅ Find User in Database
    const user = await User.findOne({ email });
    if (!user) {
      console.error("❌ User not found in DB.");
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // ✅ Debugging Password Types and Values
    console.log("📝 Password Type:", typeof password);
    console.log("🔑 Entered Password:", `"${password}"`); // Add quotes to check for spaces
    console.log("🔑 Stored Hashed Password:", `"${user.password}"`);

    // Ensure both values are strings before comparing
    if (typeof password !== "string" || typeof user.password !== "string") {
      console.error("❌ Password or hashed password is not a string!");
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // ✅ Compare Passwords using bcrypt
    const isMatch = await bcrypt.compare(password, user.password);
    console.log("🔍 Password Match Result:", isMatch);

    if (!isMatch) {
      console.error("❌ Passwords do not match!");
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // ✅ Generate JWT Token
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET!, { expiresIn: '1h' });

    return res.status(200).json({ token, message: 'Login successful' });

  } catch (error) {
    console.error('❌ Login error:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}
