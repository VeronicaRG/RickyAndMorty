import { NativeModules } from 'react-native';
import Reactotron from 'reactotron-react-native';

const host = NativeModules.SourceCode.scriptURL.split('://')[1].split(':')[0];

export const reactotron = Reactotron.configure({
  host,
  name: 'Rick and Morty',
})
  .useReactNative({
    editor: false,
    networking: {
      ignoreUrls: /symbolicate|svg|generate_204|graphql/,
    },
    overlay: false,
  })
  .connect();

reactotron.clear && reactotron.clear();

console.tron = reactotron;