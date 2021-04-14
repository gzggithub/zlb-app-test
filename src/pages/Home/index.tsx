import { createElement } from 'rax';
import { mgop } from '@aligov/jssdk-mgop';
import View from 'rax-view';
import Text from 'rax-text';
import Link from 'rax-link';
import Embed from 'rax-embed';

import './index.css';
import Logo from '../../components/Logo';

export default function Home() {
  
  const mgopRequest = () => {

    mgop({
      api: 'mgop.login.test.102101', // 必须
      dataType: 'JSON',
      host: 'http://47.96.150.251:8068',
      type: 'GET',
      appKey: 'cfwxyj5m+2001101297+eylalq', // 必须
      onSuccess: data => {
        console.log('data', data)
      },
      onFail: err => {
        console.log(err, 'err')
      }
    });
  };
  const getUserInfo = () => {
    // ZWJSBridge.getUserType().then((result) => {
    //   console.log(result);
    // }).catch((error) => {
    //   console.log(error);
    // });
    mgop({
      api: 'mgop.login.test.ticketValidation', // 必须
      dataType: 'JSON',
      host: 'http://47.96.150.251:8068',
      type: 'GET',
      appKey: 'cfwxyj5m+2001101297+eylalq', // 必须
      onSuccess: data => {
        console.log('data', data)
      },
      onFail: err => {
        console.log(err, 'err')
      }
    });
  };

  const urlParam = {
    paramOne: 123,
    paramTwo: 456
  };
  console.log(window.location.href)
  console.log(window.innerHeight)
  // const src = 'https://taobao.com'
  // const src = 'https://www.yrwcc.cn/ajspx'
  // const src = 'https://www.baidu.com/'
  // const src = 'http://192.168.0.248:8895/'
  // 通过iframe获取子页面的title 同步H5的标题
  // componentDidMount() {
  //   var mainFrame= document.getElementById('main-frame');
  //   console.log(mainFrame, 'ggg')
  //   console.log(document.title, 'document.title')
  //   // document.title = mainFrame.contentWindow.document.title; // iframe中子页面的title
  //   document.title = 'test RAX app'; // iframe中子页面的title
  // }
  const env = window.navigator.userAgent.toLowerCase()
  console.log(env)
  // 支付宝入口
  // 登陆地址：https://puser.zjzwfw.gov.cn/sso/alipay.do?action=ssoLogin&servicecode=【接入代码】&goto=【附带跳转地址，以sp参数返回】
  // let src = 'https://gkt.kingyi.net/xihuszgk/login.jspx'
  let src = 'http://192.168.0.75:9521'
  // let src = 'https://www.yrwcc.cn/ajspx'
  // APP入口
  // 登录地址：https://puser.zjzwfw.gov.cn/sso/mobile.do?action=oauth&scope=1&servicecode=【接入代码】&goto=【附带跳转地址，以sp参数返回】
  if (false)  { // 支付宝入口
    // src = `https://puser.zjzwfw.gov.cn/sso/alipay.do?action=ssoLogin&servicecode=ncjtszgk&goto=https://www.yrwcc.cn/ajspx`
  } else { // APP入口
    // src = `https://puser.zjzwfw.gov.cn/sso/mobile.do?action=oauth&scope=1&servicecode=ncjtszgk&goto=http://192.168.0.75:9521`
  }
  // 如何判断是否是支付宝入口还是浙里办app入口
  return (
    <View>
      {/*<Link href=" https://www.baidu.com/">百度</Link> */}
      <Embed id="main-frame" urlParam={urlParam} src={src} useIframeInWeb={true} style={{
        height: window.innerHeight + 'px',
        width: '100%'
      }} />
    </View>
  );
}
