import { createElement, useEffect, Component } from 'rax';
import {
  isMiniApp,
  isWeChatMiniProgram,
  isByteDanceMicroApp,
  isWeb,
} from 'universal-env';
import miniappRenderer from 'miniapp-renderer';
import createShareAPI, { history } from 'create-app-shared';
import { IAppConfig, IBuildConfig } from './types';

import raxAppRenderer, { getInitialData } from 'rax-app-renderer';
import { createWithRouter } from 'create-use-router';
const defaultWithRouter = createWithRouter({ createElement });

import loadRuntimeModules from './loadRuntimeModules';
import loadStaticModules from './loadStaticModules';
import defaultStaticConfig from './staticConfig';

import { setAppConfig } from './appConfig';
import { mount, unmount } from './render';
import ErrorBoundary from './ErrorBoundary';

const buildConfig: IBuildConfig = { icestarkUMD: false };
const {
  createBaseApp,
  withRouter,
  createHistory,
  getHistory,
  emitLifeCycles,
  usePageShow,
  usePageHide,
  withPageLifeCycle,
  pathRedirect,
  registerNativeEventListeners,
  addNativeEventListener,
  removeNativeEventListener,
  getSearchParams,
} = createShareAPI(
  {
    createElement,
    useEffect,
    withRouter: defaultWithRouter,
    initHistory: buildConfig.router !== false,
  },
  loadRuntimeModules
);

export function runApp(appConfig?: IAppConfig, staticConfig?: any) {
  let renderer;

  renderer = raxAppRenderer;

  if ((isMiniApp || isWeChatMiniProgram || isByteDanceMicroApp) && !isWeb) {
    renderer = miniappRenderer;
  }
  renderer(
    {
      appConfig,
      staticConfig: staticConfig || defaultStaticConfig,
      buildConfig,
      setAppConfig,
      createBaseApp,
      createHistory,
      getHistory,
      emitLifeCycles,
      pathRedirect,
      loadStaticModules,
      ErrorBoundary,
    },
    {
      createElement,
      mount,
      unmount,
      Component,
    }
  );
}

export function createApp(appConfig, staticConfig?: any) {
  console.warn(
    'Detected that you are using createApp, please use runApp method, Visit https://ice.work/docs/guide/basic/api.'
  );
  runApp(appConfig, staticConfig);
}

// Public API
export {
  // router api
  withRouter,
  history,
  getHistory,
  getSearchParams,
  getInitialData,
  // LifeCycles api
  usePageShow,
  usePageHide,
  withPageLifeCycle,
  // events api
  registerNativeEventListeners,
  addNativeEventListener,
  removeNativeEventListener,
  ErrorBoundary,
};

// Private API
export default {
  createBaseApp,
  emitLifeCycles,
};
