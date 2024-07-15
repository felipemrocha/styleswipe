import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import SwipeScreen from './screens/SwipeScreen';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}
        options={{headerShown: false}}/>
        <Stack.Screen name="Profile" component={ProfileScreen}
        options={{headerShown: false}}/>
        <Stack.Screen name="Swipe" component={SwipeScreen}
        options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer> 
  );
}
