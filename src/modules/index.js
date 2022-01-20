const requireModules = require.context("@/modules", true, /^.\/\w+\/index\.js/);

const routes = [];
const store = [];
requireModules.keys().forEach((modulePath) => {
  let module = requireModules(modulePath).default;
  routes.push(...module.routes);
});
export { routes, store };
