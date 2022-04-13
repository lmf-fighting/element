import TestComponent from './src/main';

/* istanbul ignore next */
TestComponent.install = function(Vue) {
  Vue.component(TestComponent.name, TestComponent);
};

export default TestComponent;
