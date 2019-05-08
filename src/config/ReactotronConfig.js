import Reactotron from "reactotron-react-native";

const tron = Reactotron.configure({ host: "10.1.6.51" })
  .useReactNative()
  .connect();

tron.clear();

console.tron = tron;
