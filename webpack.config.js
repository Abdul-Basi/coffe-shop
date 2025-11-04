const createExpoWebpackConfigAsync = require('@expo/webpack-config');

module.exports = async function (env, argv) {
    const config = await createExpoWebpackConfigAsync(env, argv);

    // Customize the config before returning it.
    // Add any custom config to handle modules like react-native-vector-icons
    config.resolve.alias = {
        ...config.resolve.alias,
        'react-native$': 'react-native-web'
    };

    return config;
};