import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Profile from './screens/Profile';
import Friends from './screens/Friends';

const AppNavigator = createStackNavigator({
  Profile: { screen: Profile },
  Friends: { screen: Friends, path: 'friends', },
});

const prefix = 'awesomeproject://';

const MainApp = () => <AppNavigator uriPrefix={prefix} />;

export default createAppContainer(AppNavigator);