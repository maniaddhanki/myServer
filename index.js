const { startServer } = require('./src/server/server.js');
const { createRouter } = require('./src/server/asyncRouter.js');
const { createCache } = require('./src/createCache.js');
const { parseUrl } = require('./src/handlers/parseUrl.js');
const { dependencyHandler } = require('./src/handlers/dependencyHandler.js');
const { injectCookie } = require('./src/handlers/cookiesHandler.js');
const { notFoundHandler } = require('./src/handlers/notFoundHandler.js');
const { loginHandler } = require('./src/handlers/loginHandler.js');
const { logoutHandler } = require('./src/handlers/logoutHandler.js');
const { parseBodyParams } = require('./src/handlers/parseBodyParams.js');
const { protectedHandler } = require('./src/handlers/protectedHandler.js');
const { injectSession } = require('./src/handlers/sessionHandler.js');

module.exports = {
  startServer, createRouter, createCache, parseUrl, notFoundHandler, injectCookie, loginHandler, logoutHandler, parseBodyParams, protectedHandler, injectSession, dependencyHandler
};
