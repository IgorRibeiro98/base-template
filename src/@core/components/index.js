import Vue from "vue";

const requireComponent = require.context(
  "@/@core/components",
  true,
  /Acs\w*\.(vue)$/
);

requireComponent.keys().forEach((filePath) => {
  const componentConfig = requireComponent(filePath);
  const componentName = filePath.split("/").pop().replace(/\.vue/, "");

  Vue.component(componentName, componentConfig.default || componentConfig);
});
