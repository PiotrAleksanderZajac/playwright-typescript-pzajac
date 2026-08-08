import 'dotenv/config';

import dev from './config/dev';
import stage from './config/stage';
import prod from './config/prod';

const ENV = process.env.ENV ?? 'dev';

const configs = {
  dev,
  stage,
  prod,
};

export default configs[ENV as keyof typeof configs];
