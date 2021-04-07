import { createElement } from 'rax';

// import { openLink } from '';

import View from 'rax-view';
import Text from 'rax-text';

export default function Home() {

  return (
    <View className="home">
      <Text className="title">JSBridge Test</Text>
      <Text className="info">Visit https://rax.js.org</Text>
    </View>
  );
}

