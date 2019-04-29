import Reactotron from 'reactotron-react-native'
import { reactotronRedux } from 'reactotron-redux';

if (__DEV__) {
  const tron = Reactotron.configure({ host: '10.1.6.51' }) // controls connection & communication settings
    .useReactNative()
    .use(reactotronRedux()) // add all built-in react native plugins
    .connect() // let's connect!


  console.tron = tron;
  tron.clear();
}
