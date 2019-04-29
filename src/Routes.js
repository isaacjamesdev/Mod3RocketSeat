import { createAppContainer, createStackNavigator } from "react-navigation";
import Welcome from "~/pages/welcome/welcome";

const Routes = createAppContainer(
  createStackNavigator({
    Welcome
  })
);

export default Routes;
