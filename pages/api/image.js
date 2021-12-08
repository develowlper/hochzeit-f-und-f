// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { getImageLink } from "lib/spaces";

export default async function imageAPI(req, res) {
  const link = await getImageLink(process.env.SPACES_BUCKET, req.query.key);
  res.status(200).json({ link });
}
