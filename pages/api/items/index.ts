// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import type { IItem } from '../../../data'
import { items } from '../../../data'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IItem[]>
) {
  res.status(200).json(items)
}
