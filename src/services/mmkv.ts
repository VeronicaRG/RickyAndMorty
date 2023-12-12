import { MMKV } from 'react-native-mmkv';

export const storage = new MMKV({
  id: 'RickAndMorty',
  encryptionKey: 'fL0RxRw9PHsYQyYa#npA+y',
});
