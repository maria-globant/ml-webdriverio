const { config } = require('./wdio.conf');

exports.config = {
    ...config,
    //
    // ====================
    // Runner Configuration
    // ====================
    // You can overwrite any property from wdio.conf.js here for UAT environment
    //
    specs: [
        './test/specs/**/*.js'
    ],
    //
    // ==================
    // Specify Test Files
    // ==================
    // Patterns to exclude.
    exclude: [
        // 'path/to/excluded/files'
    ],
    //
    // ============
    // Capabilities
    // ============
    maxInstances: 5,
    //
    // ===================
    // Test Configurations
    // ===================
    baseUrl: 'https://uat.your-app-url.com',
    //
    // Add or override any other config specific to UAT below
    //
};