
import React, { useEffect, useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import HomeScreen from '../screens/HomeScreen';
import OffersScreen from '../screens/OffersScreen';
import BookingsScreen from '../screens/BookingScreen';
import ProfileScreen from '../screens/ProfileScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SignupScreen from '../screens/SignUpScreen';
const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  const[isLoggedIn,setIsLoggedIn] = useState(false);
  console.log(isLoggedIn);
    useEffect(() => {
    const checkLogin = async () => {
      const token = await AsyncStorage.getItem('token');
      setIsLoggedIn(!!token); // true if token exists
    };
    checkLogin();
  }, []);

//   return (
//     <SafeAreaView style={{ flex: 1, backgroundColor: '#141413' }}>
//       <Tab.Navigator
//         screenOptions={({ route }) => ({
//           tabBarStyle: {
//             backgroundColor: '#141413',
//             borderTopColor: '#2a2a2a',
//             borderTopWidth: 1,
//             height: 58,
//             paddingBottom: 6,
//           },
//           tabBarActiveTintColor: '#F88310',
//           tabBarInactiveTintColor: '#888',
//           headerStyle: {
//             backgroundColor: '#141413',
//           },
//           headerTitleStyle: { color: '#fff', fontWeight: '600', fontSize: 18 },
//           headerTintColor: '#fff',
//           tabBarIcon: ({ color, size, focused }) => {
//             let iconName;

//             if (route.name === 'Home') {
//               iconName = focused ? 'grid' : 'grid-outline'; // modern home alternative
//             } else if (route.name === 'Offers') {
//               iconName = focused ? 'flame' : 'flame-outline'; // stands out more
//             } else if (route.name === 'Bookings') {
//               iconName = focused ? 'clipboard' : 'clipboard-outline'; // fits "bookings"
//             } else if (route.name === 'Profile') {
//               iconName = focused ? 'person-circle' : 'person-circle-outline'; // more stylish
//             }

//             return <Ionicons name={iconName} size={23} color={color} />;
//           },
//         })}
//       >
//         <Tab.Screen name="Home" component={HomeScreen} />
//         <Tab.Screen name="Offers" component={OffersScreen} />
//         <Tab.Screen name="Bookings" component={BookingsScreen} />
//         <Tab.Screen name="Profile" component={ProfileScreen} />
//       </Tab.Navigator>
//     </SafeAreaView>
//   );
// }
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#141413' }}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarStyle: {
            backgroundColor: '#141413',
            borderTopColor: '#2a2a2a',
            borderTopWidth: 1,
            height: 58,
            paddingBottom: 6,
          },
          tabBarActiveTintColor: '#F88310',
          tabBarInactiveTintColor: '#888',
          headerStyle: { backgroundColor: '#141413' },
          headerTitleStyle: { color: '#fff', fontWeight: '600', fontSize: 18 },
          headerTintColor: '#fff',
          tabBarIcon: ({ color, size, focused }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'grid' : 'grid-outline';
            } else if (route.name === 'Offers') {
              iconName = focused ? 'flame' : 'flame-outline';
            } else if (route.name === 'Bookings') {
              iconName = focused ? 'clipboard' : 'clipboard-outline';
            } else if (route.name === 'Profile' || route.name === 'Signup') {
              iconName = focused ? 'person-circle' : 'person-circle-outline';
            }

            return <Ionicons name={iconName} size={23} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Offers" component={OffersScreen} />
        <Tab.Screen name="Bookings" component={BookingsScreen} />
        {isLoggedIn ? (
          <Tab.Screen name="Profile" component={ProfileScreen} />
        ) : (
          <Tab.Screen name="Signup">
            {(props) => <SignupScreen {...props} setIsLoggedIn={setIsLoggedIn} />}
          </Tab.Screen>
        )}
      </Tab.Navigator>
    </SafeAreaView>
  );
}