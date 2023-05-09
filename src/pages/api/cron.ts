import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const deployHook = process.env.DEPLOY_HOOK || '';
    const response = await fetch(deployHook, {
      method: 'POST'
    });
    const data = await response.json();
    res.status(200).json({ data });
  } catch (error: any) {
    console.error(error);
    res.status(error.status || 500).json({ error: error.message });
  }
}
