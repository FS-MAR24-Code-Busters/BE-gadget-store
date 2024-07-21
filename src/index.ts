'use strict';

import 'dotenv/config';
import { createServer } from './createServer';

createServer().listen(5700, () => {
  console.log('Server is running on localhost:5700');
});
