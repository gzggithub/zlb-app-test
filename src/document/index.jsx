import { createElement } from 'rax';
import { Root, Style, Script } from 'rax-document';

function Document() {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,maximum-scale=1,minimum-scale=1,user-scalable=no,viewport-fit=cover"
        />
        <title>rax-materials-basic-app</title>
        <Style />
      </head>
      <body>
        {/* root container */}
        <Root />
        {/** 政务jsbridge */}
        <script src="//assets.zjzwfw.gov.cn/assets/ZWJSBridge/1.0.0/zwjsbridge.js" />
        <Script />
      </body>
    </html>
  );
}
export default Document;
