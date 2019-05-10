import {
  createAppContainer,
  createMaterialTopTabNavigator,
  createSwitchNavigator,
  createStackNavigator
} from "react-navigation";
import Welcome from "~/pages/welcome/welcome";
import Map from "~/pages/map/map";
import Profile from "~/pages/profile/profile";
import Matchs from "~/pages/Match/matchList";
import Swipe from "~/pages/swipe/swipe";

const Routes = createAppContainer(
  createSwitchNavigator(
    {
      User: createMaterialTopTabNavigator(
        {
          Profile,
          Swipe: createStackNavigator(
            {
              Swipe: { screen: Swipe }
            },
            {
              navigationOptions: {
                swipeEnabled: false
              }
            }
          ),
          Matchs
        },
        {
          defaultNavigationOptions: {
            swipeEnabled: true
          }
        }
      )
    },
    {
      defaultNavigationOptions: {
        header: null
      }
    }
  )
);

export default Routes;
