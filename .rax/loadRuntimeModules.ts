interface IRuntime<T> {
  loadModule: (module: { default: T } | T) => void;
}

function loadRuntimeModules(runtime: IRuntime<Function>) {
  runtime.loadModule(require('./plugins/build-plugin-app-core/runtime'));
}

export default loadRuntimeModules;
