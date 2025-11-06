import { Client } from '@elastic/elasticsearch';
import { env } from '../env';

export const ES_INDEX = 'ediscovery_docs';

export const es = new Client({
  node: env.ES_NODE,
  auth:
    env.ES_USERNAME && env.ES_PASSWORD
      ? {
          username: env.ES_USERNAME,
          password: env.ES_PASSWORD,
        }
      : undefined,
});
