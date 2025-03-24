import type { NextApiRequest, NextApiResponse } from 'next';
import User from '../../../models/User';
import connectDB from '../../../utils/db';
import jwt from 'jsonwebtoken';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.setHeader('Allow', ['GET']).status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    await connectDB();

    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as { userId: string };
    const user = await User.findById(decoded.userId).select('-password');

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    return res.status(200).json({ user });
  } catch (error) {
    console.error('Profile error:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}
