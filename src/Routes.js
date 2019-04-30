import { createAppContainer, createStackNavigator } from "react-navigation";
import Welcome from "~/pages/welcome/welcome";
import Map from "~/pages/map/map";

const Routes = createAppContainer(
  createStackNavigator({
    Welcome
  })
);

export default Routes;
