module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      ['module:react-native-dotenv'],
      [
        'module-resolver',
        {
          root: ['./src'],
          extensions: [
            '.ios.ts',
            '.android.ts',
            '.ts',
            '.ios.tsx',
            '.android.tsx',
            '.jsx',
            '.js',
            '.json',
          ],
          alias: {
            '@components': './src/components',
            '@screens': './src/screens',
            '@routes': './src/routes',
            '@styles': './src/styles',
            '@services': './src/services',
            '@assets': './src/assets',
            '@utils': './src/utils',
            '@store': './src/store',
            '@hooks': './src/hooks',
            '@types': './src/@types',
          },
        },
      ],
    ],
  };
};
