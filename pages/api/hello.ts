// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    name: string
}
const statusCode = 200

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>): void {
    res.status(statusCode).json({ name: 'John Doe' })
}
