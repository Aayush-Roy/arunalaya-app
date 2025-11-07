// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
// import React, { useState } from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// // import BottomTabNavigator from './navigation/BottomTabNavigator';
// import BottomTabNavigator from './src/navigation/BottomTabNavigator';
// // import LoginScreen from './screens/LoginScreen';?
// import EditProfileScreen from './src/screens/EditProfileScreen';
// import SignupScreen from './src/screens/SignUpScreen';
// // import ServiceDetailsScreen from './src/screens/ServiceDetailsScreen';
// import ServiceDetailsScreen from './src/screens/ServiceDetails';
// import BookingFormScreen from './src/screens/BookingForm';
// import LoginScreen from './src/screens/LoginScreen';
// import BookingsScreen from './src/screens/BookingScreen';
// import HomeScreen from './src/screens/HomeScreen';
// const Stack = createNativeStackNavigator();

// export default function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(true);

//   return (
//     <NavigationContainer>
//       <Stack.Navigator
//         screenOptions={{
//           headerStyle: { backgroundColor: '#141413' },
//           headerTintColor: '#fff',
//           headerTitleStyle: { fontWeight: 'bold' },
//           headerShown: false,
//         }}
//       >
//         {!isLoggedIn ? (
//           <>
//             <Stack.Screen 
//               name="Login" 
//               options={{ headerShown: false }}
//             >
//               {props => <LoginScreen {...props} setIsLoggedIn={setIsLoggedIn} />}
//             </Stack.Screen>
//             <Stack.Screen 
//               name="Signup" 
//               options={{ title: 'Sign Up' }}
//             >
//               {props => <SignupScreen {...props} setIsLoggedIn={setIsLoggedIn} />}
//             </Stack.Screen>
//           </>
//         ) : (
//           <>
//             <Stack.Screen 
//               name="Main" 
//               component={BottomTabNavigator}
//               options={{ headerShown: false }}
//             />
//             <Stack.Screen 
//               name="ServiceDetails" 
//               component={ServiceDetailsScreen}
//               options={{ title: 'Service Details' }}
//             />
//             <Stack.Screen 
//               name="BookingForm" 
//               component={BookingFormScreen}
//               options={{ title: 'Book Appointment' }}
//             />
//             <Stack.Screen 
//   name="EditProfile" 
//   component={EditProfileScreen}
//   options={{ title: 'Edit Profile' }}
// />

//           <Stack.Screen name="Bookings" component={BookingsScreen} options={{headerShown:false}} />
       

//           </>
//         )}
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'react-native'; // 👈 add this line
import BottomTabNavigator from './src/navigation/BottomTabNavigator';
import EditProfileScreen from './src/screens/EditProfileScreen';
import SignupScreen from './src/screens/SignUpScreen';
import ServiceDetailsScreen from './src/screens/ServiceDetails';
import BookingFormScreen from './src/screens/BookingForm';
import LoginScreen from './src/screens/LoginScreen';
import BookingsScreen from './src/screens/BookingScreen';
import HomeScreen from './src/screens/HomeScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <>
      {/* 👇 Ye status bar dark background ke liye white icons show karega */}
      <StatusBar barStyle="light-content" backgroundColor="#141413" />

      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: '#141413' },
            headerTintColor: '#fff',
            headerTitleStyle: { fontWeight: 'bold' },
            headerShown: false, // globally hide headers
          }}
        >
          {!isLoggedIn ? (
            <>
              <Stack.Screen name="Login" options={{ headerShown: false }}>
                {(props) => <LoginScreen {...props} setIsLoggedIn={setIsLoggedIn} />}
              </Stack.Screen>
              <Stack.Screen name="Signup" options={{ title: 'Sign Up' }}>
                {(props) => <SignupScreen {...props} setIsLoggedIn={setIsLoggedIn} />}
              </Stack.Screen>
            </>
          ) : (
            <>
              <Stack.Screen
                name="Main"
                component={BottomTabNavigator}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="ServiceDetails"
                component={ServiceDetailsScreen}
                options={{ title: 'Service Details' }}
              />
              <Stack.Screen
                name="BookingForm"
                component={BookingFormScreen}
                options={{ title: 'Book Appointment' }}
              />
              <Stack.Screen
                name="EditProfile"
                component={EditProfileScreen}
                options={{ title: 'Edit Profile' }}
              />
              <Stack.Screen
                name="Bookings"
                component={BookingsScreen}
                options={{ headerShown: false }}
              />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
