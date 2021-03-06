import {
  RaxElement as FrameworkElement,
  ComponentType as FrameworkComponentType,
  RaxNode as FrameworkNode,
} from 'rax';
import { History } from 'history';

interface IOnTabItemClickParams {
  from: string;
  path: string;
  text: string;
  index: number;
}

interface IQuery {
  [key: string]: string;
}

interface IContext {
  pathname: string;
  query?: IQuery;
  ssrError?: any;
  path?: string;
}

export interface IBuildConfig {
  router?: object | boolean;
  store?: boolean;
  icestarkUMD?: boolean;
  web?: object;
}

export interface IApp {
  rootId?: string;
  mountNode?: HTMLElement;
  addProvider?: ({ children }: { children: FrameworkNode }) => FrameworkElement;
  getInitialData?: (ctx?: IContext) => Promise<any>;
  ErrorBoundaryFallback?: (error: any) => FrameworkComponentType;
  onErrorBoundaryHander?: (error: Error, componentStack: string) => any;
  onLaunch?: (options?: any) => any;
  onShow?: () => any;
  onHide?: () => any;
  onError?: (error: Error) => any;
  onTabItemClick?: ({ from, path, text, index }: IOnTabItemClickParams) => any;

  [key: string]: any;
}

export interface IRouter {
  type?: 'hash' | 'browser' | 'memory' | 'static';
  // common props for BrowserRouter & HashRouter & MemoryRouter
  basename?: string;
  fallback?: FrameworkNode;
  history?: History;
}

export interface IAppConfig {
  app?: IApp;

  router?: IRouter;
}

declare global {
  interface Window {
    __ICE_SSR_ENABLED__: any;
    __ICE_APP_DATA__: any;
    __ICE_PAGE_PROPS__: any;
  }
}
