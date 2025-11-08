
// import React, { useState } from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { StatusBar, View } from 'react-native'; // 👈 add this line
// import BottomTabNavigator from './src/navigation/BottomTabNavigator';
// import EditProfileScreen from './src/screens/EditProfileScreen';
// import SignupScreen from './src/screens/SignUpScreen';
// import ServiceDetailsScreen from './src/screens/ServiceDetails';
// import BookingFormScreen from './src/screens/BookingForm';
// import LoginScreen from './src/screens/LoginScreen';
// import BookingsScreen from './src/screens/BookingScreen';
// import HomeScreen from './src/screens/HomeScreen';

// const Stack = createNativeStackNavigator();

// export default function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   return (
//     <>
//       {/* 👇 Ye status bar dark background ke liye white icons show karega */}
//       <StatusBar barStyle="light-content" backgroundColor="#141413" />

//       <NavigationContainer>
//         <Stack.Navigator
//           screenOptions={{
//             headerStyle: { backgroundColor: '#141413' },
//             headerTintColor: '#fff',
//             headerTitleStyle: { fontWeight: 'bold' },
//             headerShown: false, // globally hide headers
//           }}
//         >
          
//           {!isLoggedIn ? (
//             <>
//               <Stack.Screen name="Login"  options={{ headerShown: false }}>
//                 {(props) => <LoginScreen {...props} setIsLoggedIn={setIsLoggedIn} />}
//               </Stack.Screen> 
              
//               <Stack.Screen name="Signup" options={{ title: 'Sign Up' }}>
//                 {(props) => <SignupScreen {...props} setIsLoggedIn={setIsLoggedIn} />}
//               </Stack.Screen>
//             </>
//           )
//            : (
//             <>
           

//               <Stack.Screen
//                 name="Main"
//                 component={BottomTabNavigator}
//                 options={{ headerShown: false }}
//               />
//               <Stack.Screen
//                 name="ServiceDetails"
//                 component={ServiceDetailsScreen}
//                 options={{ title: 'Service Details' }}
//               />
//               <Stack.Screen
//                 name="BookingForm"
//                 component={BookingFormScreen}
//                 options={{ title: 'Book Appointment' }}
//               />
//               <Stack.Screen
//                 name="EditProfile"
//                 component={EditProfileScreen}
//                 options={{ title: 'Edit Profile' }}
//               />
//               <Stack.Screen
//                 name="Bookings"
//                 component={BookingsScreen}
//                 options={{ headerShown: false }}
//               />
//             </>
//           )}
//         </Stack.Navigator>
//       </NavigationContainer>
//     </>
//   );
// }
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar, View, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import BottomTabNavigator from './src/navigation/BottomTabNavigator';
import EditProfileScreen from './src/screens/EditProfileScreen';
import SignupScreen from './src/screens/SignUpScreen';
import ServiceDetailsScreen from './src/screens/ServiceDetails';
import BookingFormScreen from './src/screens/BookingForm';
import LoginScreen from './src/screens/LoginScreen';
import BookingsScreen from './src/screens/BookingScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  console.log("App.js=>", isLoggedIn)
  const [loading, setLoading] = useState(true);

  // ✅ Check token from AsyncStorage on app start
  // useEffect(() => {
  //   const checkToken = async () => {
  //     try {
  //       const token = await AsyncStorage.getItem('token');
  //       if (token) {
  //         setIsLoggedIn(true);
  //       } else {
  //         setIsLoggedIn(false);
  //       }
  //     } catch (error) {
  //       console.error('Error checking token:', error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   checkToken();
  // }, []);
  useEffect(() => {
  const checkToken = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      setIsLoggedIn(!!token);
    } catch (error) {
      console.error('Error checking token:', error);
    } finally {
      setLoading(false);
    }
  };
  checkToken();
}, [isLoggedIn]); // 👈 added dependency


  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#141413' }}>
        <ActivityIndicator size="large" color="#F88310" />
      </View>
    );
  }

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#141413" />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {!isLoggedIn ? (
            <>
              <Stack.Screen name="Login">
                {(props) => <LoginScreen {...props} setIsLoggedIn={setIsLoggedIn} />}
              </Stack.Screen>
              <Stack.Screen name="Signup">
                {(props) => <SignupScreen {...props} setIsLoggedIn={setIsLoggedIn} />}
              </Stack.Screen>
            </>
          ) : (
            <>
              {/* <Stack.Screen name="Main" component={BottomTabNavigator} /> */}
              <Stack.Screen name="Main">
  {(props) => <BottomTabNavigator {...props} setIsLoggedIn={setIsLoggedIn} />}
</Stack.Screen>

              <Stack.Screen name="ServiceDetails" component={ServiceDetailsScreen} />
              <Stack.Screen name="BookingForm" component={BookingFormScreen} />
              <Stack.Screen name="EditProfile" component={EditProfileScreen} />
              <Stack.Screen name="Bookings" component={BookingsScreen} />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
