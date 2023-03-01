import { NextApiRequest, NextApiResponse } from 'next';
import { DocumentClient } from 'aws-sdk/clients/dynamodb';

// Use the AWS SDK to access your DynamoDB table here
const ddbTableName = 'VisitorCount';
const dynamodb = new DocumentClient();
const cookieName = 'visitorCountIncremented';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const { Count: newCount } = await incrementVisitorCount(res, req);
    res.status(200).json({ Count: newCount });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}

async function incrementVisitorCount(res: NextApiResponse, req: NextApiRequest) {
  const response = await dynamodb
    .get({
      TableName: ddbTableName,
      Key: { id: 'count' },
    })
    .promise();

  const count = response.Item?.visitor_count ?? 0;

  const cookie = req.cookies[cookieName];
  const now = new Date().getTime();
  const twelveHoursInMs = 12 * 60 * 60 * 1000;
  const canIncrement =
    !cookie || (now - Number(cookie)) > twelveHoursInMs;

  let newCount = count;
  if (canIncrement) {
    newCount = String(Number(count) + 1);
    res.setHeader(
      'Set-Cookie',
      `${cookieName}=${new Date().getTime()}; Max-Age=${twelveHoursInMs}; Path=/`
    );
    await dynamodb
      .update({
        TableName: ddbTableName,
        Key: { id: 'count' },
        UpdateExpression: 'set visitor_count = :c',
        ExpressionAttributeValues: { ':c': newCount },
        ReturnValues: 'UPDATED_NEW',
      })
      .promise();
  }

  return { Count: newCount };
}

export async function getStaticProps() {
    return {
        props: {
            accessKeyId: process.env.AWS_ACCESS_KEY_ID,
            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
            region: process.env.AWS_REGION,
        }
    }
}
