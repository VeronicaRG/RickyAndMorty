module.exports = {
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: ['.ts', '.tsx', '.jsx', '.js', '.json'],
        alias: {
          '@src': './src/',
          '@svgs': './src/assets/svgs/',
          '@screens': './src/screens/',
          '@components': './src/components/',
        },
      },
    ],
    ['module:react-native-dotenv'],
  ],
  presets: ['module:@react-native/babel-preset'],
};
