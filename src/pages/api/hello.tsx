// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {

  const id = req.query.id

  res.status(200).json({
   name: `menor ${id}`

  })
}
