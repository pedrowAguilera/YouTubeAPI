import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import Inicio from './inicio';
import PageYoutube from './PageYoutube';
import PageVimeo from './PageVimeo';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          let iconColor;

          if (route.name === 'YouTube') {
            iconName = 'logo-youtube';
            iconColor = '#FF0000'; 
          } else if (route.name === 'Vimeo') {
            iconName = 'logo-vimeo';
            iconColor = '#1AB7EA';
          }

          return <Ionicons name={iconName} size={size} color={iconColor} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'black', 
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name="YouTube" component={PageYoutube} />
      <Tab.Screen name="Vimeo" component={PageVimeo} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Inicio">
        <Stack.Screen name="Inicio" component={Inicio} />
        <Stack.Screen name="MainTabs" component={MainTabs} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
