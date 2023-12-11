import { customLogger } from '@src/tools/logger';
import { reactotron } from '@src/tools/reactotron';

declare global {
  interface Console {
    tron: typeof customLogger;
    reactotron: typeof reactotron;
  }
}

export {};
