/**
 * @file
 * Configure grunt compass.
 */

module.exports = {
  options: {
    config: 'config/compass.rb',
    sassDir: 'sass',
    cssDir: 'css',
  },
  dev: {
    options: {
      noLineComments: false,
      // clean: true,
      environment: 'development',
      outputStyle: 'nested'
    }
  },
  prod: {
    options: {
      noLineComments: true,
      // clean: true,
      environment: 'production',
      outputStyle: 'compressed'
    }
  }
};
