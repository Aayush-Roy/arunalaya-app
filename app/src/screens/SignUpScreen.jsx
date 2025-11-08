// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   TextInput,
//   TouchableOpacity,
//   KeyboardAvoidingView,
//   Platform,
//   ScrollView,
//   Alert,
// } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import axios from 'axios';
// export default function SignupScreen({ navigation, setIsLoggedIn }) {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [phone, setPhone] = useState('');
//   const [mode, setMode] = useState('signup'); // 'signup' or 'login'
//   const [password, setPassword] = useState('');
//   const [showPassword, setShowPassword] = useState(false);

 
// const BASE_URL = 'http://192.168.1.34:5000/api/auth/signup';

// const handleSignup = async () => {
//   if (!name || !email || !phone || !password) {
//     alert('Please fill all fields');
//     return;
//   }

//   try {
//     const response = await axios.post(BASE_URL, { name, email, phone, password });
//     console.log('Signup success:', response.data);
//     if (response.data.token) {
//       await AsyncStorage.setItem('token', response.data.token);
//       console.log('Token saved:', response.data.token);
//     }
//     Alert.alert('Success', 'Account created successfully!');
//     navigation.navigate('Login'); // or wherever you want
//     setIsLoggedIn(true);
//   } catch (err) {
//     console.error('Signup error:', err.response?.data || err.message);
//     alert('Signup failed: ' + (err.response?.data?.message || 'Something went wrong'));
//   }
// };

//   return (
//     <SafeAreaView style={{ flex: 1, backgroundColor: '#141413' }}>
//     <KeyboardAvoidingView
//       style={styles.container}
//       behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
//     >
//       <ScrollView
//         contentContainerStyle={styles.scrollContent}
//         showsVerticalScrollIndicator={false}
//       >
//         {/* Welcome Text */}
//         <View style={styles.welcomeContainer}>
//           <Text style={styles.welcomeTitle}>Create Account</Text>
//           <Text style={styles.welcomeSubtitle}>
//             Join us and start your wellness journey
//           </Text>
//         </View>

//         {/* Signup Form */}
//         <View style={styles.formContainer}>
//           {/* Name Input */}
//           <View style={styles.inputContainer}>
//             <Ionicons name="person-outline" size={20} color="#999" style={styles.inputIcon} />
//             <TextInput
//               style={styles.input}
//               placeholder="Full Name"
//               placeholderTextColor="#666"
//               value={name}
//               onChangeText={setName}
//             />
//           </View>

//           {/* Email Input */}
//           <View style={styles.inputContainer}>
//             <Ionicons name="mail-outline" size={20} color="#999" style={styles.inputIcon} />
//             <TextInput
//               style={styles.input}
//               placeholder="Email"
//               placeholderTextColor="#666"
//               value={email}
//               onChangeText={setEmail}
//               keyboardType="email-address"
//               autoCapitalize="none"
//             />
//           </View>

//           {/* Phone Input */}
//           <View style={styles.inputContainer}>
//             <Ionicons name="call-outline" size={20} color="#999" style={styles.inputIcon} />
//             <TextInput
//               style={styles.input}
//               placeholder="Phone Number"
//               placeholderTextColor="#666"
//               value={phone}
//               onChangeText={setPhone}
//               keyboardType="phone-pad"
//               maxLength={10}
//             />
//           </View>

//           {/* Password Input */}
//           <View style={styles.inputContainer}>
//             <Ionicons name="lock-closed-outline" size={20} color="#999" style={styles.inputIcon} />
//             <TextInput
//               style={styles.input}
//               placeholder="Password"
//               placeholderTextColor="#666"
//               value={password}
//               onChangeText={setPassword}
//               secureTextEntry={!showPassword}
//             />
//             <TouchableOpacity
//               onPress={() => setShowPassword(!showPassword)}
//               style={styles.eyeIcon}
//             >
//               <Ionicons
//                 name={showPassword ? 'eye-outline' : 'eye-off-outline'}
//                 size={20}
//                 color="#999"
//               />
//             </TouchableOpacity>
//           </View>

//           {/* Terms */}
//           <Text style={styles.termsText}>
//             By signing up, you agree to our{' '}
//             <Text style={styles.termsLink}>Terms & Conditions</Text> and{' '}
//             <Text style={styles.termsLink}>Privacy Policy</Text>
//           </Text>

//           {/* Signup Button */}
//           <TouchableOpacity style={styles.signupButton} onPress={()=>handleSignup()}>
//             <Text style={styles.signupButtonText}>Sign Up</Text>
//           </TouchableOpacity>

//           {/* Divider */}
//           <View style={styles.divider}>
//             <View style={styles.dividerLine} />
//             <Text style={styles.dividerText}>OR</Text>
//             <View style={styles.dividerLine} />
//           </View>

//           {/* Social Signup */}
//           <View style={styles.socialContainer}>
//             <TouchableOpacity style={styles.socialButton}>
//               <Ionicons name="logo-google" size={24} color="#fff" />
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.socialButton}>
//               <Ionicons name="logo-facebook" size={24} color="#fff" />
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.socialButton}>
//               <Ionicons name="call-outline" size={24} color="#fff" />
//             </TouchableOpacity>
//           </View>

//           {/* Login Link */}
//           <View style={styles.loginContainer}>
//             <Text style={styles.loginText}>Already have an account? </Text>
//             <TouchableOpacity onPress={() => navigation.navigate("Login")}>
//               <Text style={styles.loginLink}>Login</Text>
//             </TouchableOpacity>
           
//           </View>
//         </View>
//       </ScrollView>
//     </KeyboardAvoidingView>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#141413',
//   },
//   scrollContent: {
//     flexGrow: 1,
//     paddingHorizontal: 20,
//     paddingTop: 40,
//   },
//   welcomeContainer: {
//     marginBottom: 30,
//   },
//   welcomeTitle: {
//     fontSize: 32,
//     fontWeight: 'bold',
//     color: '#fff',
//     marginBottom: 8,
//   },
//   welcomeSubtitle: {
//     fontSize: 15,
//     color: '#999',
//   },
//   formContainer: {
//     flex: 1,
//   },
//   inputContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#1F1F1E',
//     borderRadius: 12,
//     marginBottom: 15,
//     paddingHorizontal: 15,
//     borderWidth: 1,
//     borderColor: '#2A2A29',
//   },
//   inputIcon: {
//     marginRight: 10,
//   },
//   input: {
//     flex: 1,
//     color: '#fff',
//     paddingVertical: 15,
//     fontSize: 15,
//   },
//   eyeIcon: {
//     padding: 5,
//   },
//   termsText: {
//     color: '#999',
//     fontSize: 13,
//     textAlign: 'center',
//     marginBottom: 25,
//     lineHeight: 20,
//   },
//   termsLink: {
//     color: '#F88310',
//   },
//   signupButton: {
//     backgroundColor: '#F88310',
//     paddingVertical: 16,
//     borderRadius: 12,
//     alignItems: 'center',
//     marginBottom: 25,
//   },
//   signupButtonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   divider: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 25,
//   },
//   dividerLine: {
//     flex: 1,
//     height: 1,
//     backgroundColor: '#2A2A29',
//   },
//   dividerText: {
//     color: '#999',
//     paddingHorizontal: 15,
//     fontSize: 14,
//   },
//   socialContainer: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     gap: 15,
//     marginBottom: 30,
//   },
//   socialButton: {
//     width: 55,
//     height: 55,
//     backgroundColor: '#1F1F1E',
//     borderRadius: 12,
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderWidth: 1,
//     borderColor: '#2A2A29',
//   },
//   loginContainer: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     marginBottom: 30,
//   },
//   loginText: {
//     color: '#999',
//     fontSize: 15,
//   },
//   loginLink: {
//     color: '#F88310',
//     fontSize: 15,
//     fontWeight: 'bold',
//   },
// });

import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { BASE_URL } from '../utils/utilities';

export default function AuthScreen({ setIsLoggedIn, isLoggedIn}) {
  const navigation = useNavigation();
  const [mode, setMode] = useState('signup'); // 'signup' or 'login'

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  
  const SIGNUP_URL = `${BASE_URL}/auth/signup`
  const LOGIN_URL = `${BASE_URL}/auth/login`

  
  const handleSignup = async () => {
  if (!name || !email || !phone || !password) {
    alert('Please fill all fields');
    return;
  }

  try {
    const response = await axios.post(SIGNUP_URL, { name, email, phone, password });
    console.log('Signup Response:', response.data);

    // ✅ User created successfully
    Alert.alert(
      'Success',
      'Account created successfully! Please login to continue.',
      [
        {
          text: 'OK',
          onPress: () => navigation.navigate('Login'),
        },
      ]
    );

  } catch (err) {
    console.error('Signup error:', err.response?.data || err.message);
    alert('Signup failed: ' + (err.response?.data?.message || 'Something went wrong'));
  }
};

 

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#141413' }}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {/* Welcome Text */}
          <View style={styles.welcomeContainer}>
            <Text style={styles.welcomeTitle}>
              {mode === 'signup' ? 'Create Account' : 'Welcome Back'}
            </Text>
            <Text style={styles.welcomeSubtitle}>
              {mode === 'signup'
                ? 'Join us and start your wellness journey'
                : 'Login to continue your wellness journey'}
            </Text>
          </View>

          {/* Form */}
          <View style={styles.formContainer}>
            {mode === 'signup' && (
              <View style={styles.inputContainer}>
                <Ionicons name="person-outline" size={20} color="#999" style={styles.inputIcon} />
                <TextInput
                  style={styles.input}
                  placeholder="Full Name"
                  placeholderTextColor="#666"
                  value={name}
                  onChangeText={setName}
                />
              </View>
            )}

            <View style={styles.inputContainer}>
              <Ionicons name="mail-outline" size={20} color="#999" style={styles.inputIcon} />
              <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor="#666"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>

            {mode === 'signup' && (
              <View style={styles.inputContainer}>
                <Ionicons name="call-outline" size={20} color="#999" style={styles.inputIcon} />
                <TextInput
                  style={styles.input}
                  placeholder="Phone Number"
                  placeholderTextColor="#666"
                  value={phone}
                  onChangeText={setPhone}
                  keyboardType="phone-pad"
                  maxLength={10}
                />
              </View>
            )}

            <View style={styles.inputContainer}>
              <Ionicons name="lock-closed-outline" size={20} color="#999" style={styles.inputIcon} />
              <TextInput
                style={styles.input}
                placeholder="Password"
                placeholderTextColor="#666"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={!showPassword}
              />
              <TouchableOpacity
                onPress={() => setShowPassword(!showPassword)}
                style={styles.eyeIcon}
              >
                <Ionicons
                  name={showPassword ? 'eye-outline' : 'eye-off-outline'}
                  size={20}
                  color="#999"
                />
              </TouchableOpacity>
            </View>

            {/* Terms for Signup */}
            {mode === 'signup' && (
              <Text style={styles.termsText}>
                By signing up, you agree to our{' '}
                <Text style={styles.termsLink}>Terms & Conditions</Text> and{' '}
                <Text style={styles.termsLink}>Privacy Policy</Text>
              </Text>
            )}
``
            {/* Submit Button */}
            <TouchableOpacity
              style={styles.signupButton}
              onPress={handleSignup}
            >
              <Text style={styles.signupButtonText}>
                {mode === 'signup' ? 'Sign Up' : 'Login'}
              </Text>
            </TouchableOpacity>

            {/* Divider */}
            <View style={styles.divider}>
              <View style={styles.dividerLine} />
              <Text style={styles.dividerText}>OR</Text>
              <View style={styles.dividerLine} />
            </View>

            {/* Social Buttons */}
            <View style={styles.socialContainer}>
              <TouchableOpacity style={styles.socialButton}>
                <Ionicons name="logo-google" size={24} color="#fff" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.socialButton}>
                <Ionicons name="logo-facebook" size={24} color="#fff" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.socialButton}>
                <Ionicons name="call-outline" size={24} color="#fff" />
              </TouchableOpacity>
            </View>

            {/* Toggle Login/Signup */}
            <View style={styles.loginContainer}>
              <Text style={styles.loginText}>
                {/* {mode === 'signup' ? 'Already have an account? ' : "Don't have an account? "} */}
                Already have an account?
              </Text>
              <TouchableOpacity 
              // onPress={() => setMode(mode === 'signup' ? 'login' : 'signup')}
               onPress={() => navigation.navigate('Login')}

                >
                <Text style={styles.loginLink}>
                  Login
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#141413' },
  scrollContent: { flexGrow: 1, paddingHorizontal: 20, paddingTop: 40 },
  welcomeContainer: { marginBottom: 30 },
  welcomeTitle: { fontSize: 32, fontWeight: 'bold', color: '#e37f7fff', marginBottom: 8 },
  welcomeSubtitle: { fontSize: 15, color: '#999' },
  formContainer: { flex: 1 },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1F1F1E',
    borderRadius: 12,
    marginBottom: 15,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: '#2A2A29',
  },
  inputIcon: { marginRight: 10 },
  input: { flex: 1, color: '#fff', paddingVertical: 15, fontSize: 15 },
  eyeIcon: { padding: 5 },
  termsText: { color: '#999', fontSize: 13, textAlign: 'center', marginBottom: 25, lineHeight: 20 },
  termsLink: { color: '#F88310' },
  signupButton: { backgroundColor: '#F88310', paddingVertical: 16, borderRadius: 12, alignItems: 'center', marginBottom: 25 },
  signupButtonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
  divider: { flexDirection: 'row', alignItems: 'center', marginBottom: 25 },
  dividerLine: { flex: 1, height: 1, backgroundColor: '#2A2A29' },
  dividerText: { color: '#999', paddingHorizontal: 15, fontSize: 14 },
  socialContainer: { flexDirection: 'row', justifyContent: 'center', gap: 15, marginBottom: 30 },
  socialButton: { width: 55, height: 55, backgroundColor: '#1F1F1E', borderRadius: 12, justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: '#2A2A29' },
  loginContainer: { flexDirection: 'row', justifyContent: 'center', marginBottom: 30 },
  loginText: { color: '#999', fontSize: 15 , marginHorizontal:5},
  loginLink: { color: '#F88310', fontSize: 15, fontWeight: 'bold' },
});
