// pages/api/auth/logout.ts
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader('Set-Cookie', `token=; Path=/; HttpOnly; Max-Age=0`);
  res.status(200).json({ message: 'Logout successful' });
}
