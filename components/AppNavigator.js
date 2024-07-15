import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SwipeScreen from '../screens/SwipeScreen';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const customTransition = {
  gestureDirection: 'horizontal',
  transitionSpec: {
    open: { animation: 'timing', config: { duration: 300 } },
    close: { animation: 'timing', config: { duration: 300 } },
  },
  cardStyleInterpolator: ({ current, next, layouts }) => {
    return {
      cardStyle: {
        transform: [
          {
            translateX: current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [layouts.screen.width, 0],
            }),
          },
        ],
      },
    };
  },
};

function AppNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: 'transparent' },
        cardStyleInterpolator: customTransition.cardStyleInterpolator,
      }}
    >
        <Stack.Screen name="Home" component={HomeScreen}
        options={{headerShown: false}}/>
        <Stack.Screen name="Profile" component={ProfileScreen}
        options={{headerShown: false}}/>
        <Stack.Screen name="Swipe" component={SwipeScreen}
        options={{headerShown: false}}/>
    </Stack.Navigator>
  );
}

export default AppNavigator;
