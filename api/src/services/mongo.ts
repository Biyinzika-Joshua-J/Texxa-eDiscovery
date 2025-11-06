import { MongoClient, GridFSBucket } from 'mongodb';
import { env } from '../env';

let client: MongoClient | undefined;
let bucket: GridFSBucket | undefined;

export async function getMongo() {
  if (!client) client = new MongoClient(env.MONGO_URI);
  if (!client.topology?.isConnected()) await client.connect();
  const db = client.db('ediscovery');
  if (!bucket) bucket = new GridFSBucket(db, { bucketName: 'files' });
  return { db, bucket, client };
}
