import 'dotenv/config';
import { get } from 'env-var';

export const envs{
  port: get('PORT').default('7000').asPortNumber()
}
