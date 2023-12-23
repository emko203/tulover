import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

// Import your screen components
import HomeScreen from '../screens/HomeScreen';
import TransactionScreen from '../screens/TransactionScreen';
//import WalletScreen from './screens/WalletScreen';
//import SavingScreen from './screens/SavingScreen';
//import ProfileScreen from './screens/ProfileScreen';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Overview') {
              iconName = focused ? 'information-circle' : 'information-circle-outline'; // updated for Ionicons v5
            } else if (route.name === 'Transactions') {
              iconName = focused ? 'list-circle' : 'list'; // updated for Ionicons v5
            }
            // Add more else if statements for other tabs

            // Return the icon component
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato', // moved from tabBarOptions
          tabBarInactiveTintColor: 'gray', // moved from tabBarOptions
          // Add additional common options here if needed
        })}
      >
        <Tab.Screen name="Overview" component={HomeScreen} />
        <Tab.Screen name="Transactions" component={TransactionScreen} />
        {/* Uncomment and add additional screens as needed
        <Tab.Screen name="Wallet" component={WalletScreen} />
        <Tab.Screen name="Saving" component={SavingScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
        */}
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default BottomTabNavigator;
