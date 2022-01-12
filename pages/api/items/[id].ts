// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import type { IItem } from '../../../data'
import { items } from '../../../data'

export default function itemHandler(
  { query: { id } }: NextApiRequest,
  res: NextApiResponse<IItem | { message: string }>
) {
  const filtered = items.filter((p) => p.id === Number(id))

  if (filtered.length > 0) {
    res.status(200).json(filtered[0])
  } else {
    res.status(404).json({ message: `Item with id: ${id} not found.` })
  }
}
