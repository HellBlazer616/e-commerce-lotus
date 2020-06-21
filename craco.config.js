const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@primary-color': '#009E7F',
              '@link-color': '#009E7F',
              '@font-size-base': '14px',
              '@text-color': '#0D1136',
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
