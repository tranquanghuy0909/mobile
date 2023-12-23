import React, { Component, useState } from 'react';
import { StyleSheet, Text, Dimensions, View, TextInput, TouchableOpacity, Image, ImageBackground } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
    StatusBar,
    ScrollView,
} from 'react-native';
import COLORS from '../consts/colors';
import LoginScreen from './LoginScreen';


const { width, height } = Dimensions.get('window');
const SignUpScreen = ({ navigation }: any) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const toggleShowPassword = () => {
      setShowPassword(!showPassword);
    };

    const toggleShowConfirmPassword = () => {
      setShowConfirmPassword(!showConfirmPassword);
    };



    return (
      <ScrollView >
      <ImageBackground
        source={require('../assets/coffe.png')}
        style={styles.backgroundImage}
      >
        <View style={styles.container}>
          <Ionicons name="arrow-back-outline" size={28} color={COLORS.white} onPress={() => navigation.goBack()} style={{marginTop: 40}} />

          <View style={styles.header}>
            <Text style={{ fontFamily: 'heavySfPro', fontSize: 30, color: COLORS.white }}>
              Sign Up
            </Text>
            <Text style={{ fontFamily: 'sfPro', fontSize: 18, marginTop: 10, color: COLORS.white }}>
              Create an account to get started
            </Text>
          </View>


          <View style={styles.logoContainer}>
            <Image
              source={require('../assets/logo.png')}
              style={styles.logo}
            />
          </View>


          <View style={styles.textContainer}>
            <Ionicons name="person-outline" size={24} style={styles.icon} />
            <TextInput
              placeholder="Full Name"
              placeholderTextColor="rgba(255, 255, 255, 0.7)"
              returnKeyType='next' // Đặt returnKeyType thành 'next'

              style={styles.input}
            />
          </View>

          <View style={styles.textContainer}>
            <Ionicons name="mail-outline" size={24} style={styles.icon} />
            <TextInput
              placeholder="Email Address"
              placeholderTextColor="rgba(255, 255, 255, 0.7)"
              returnKeyType='next'

              style={styles.input}
              value={email}
              onChangeText={setEmail}
            />
          </View>

          <View style={styles.textContainer}>
            <Ionicons name="lock-closed-outline" size={24} style={styles.icon} />
            <TextInput
              placeholder="Password"
              placeholderTextColor="rgba(255, 255, 255, 0.7)"
              returnKeyType='next'

              style={styles.input}
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!showPassword}
            />
            <TouchableOpacity onPress={toggleShowPassword}>
              <Ionicons name={showPassword ? 'eye-outline' : 'eye-off-outline'} size={24} style={styles.icon} />
            </TouchableOpacity>
          </View>

          <View style={styles.textContainer}>
            <Ionicons name="lock-closed-outline" size={24} style={styles.icon} />
            <TextInput
              placeholder="Confirm Password"
              placeholderTextColor="rgba(255, 255, 255, 0.7)"
              returnKeyType='done'
              style={styles.input}
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              secureTextEntry={!showConfirmPassword}
            />
            <TouchableOpacity onPress={toggleShowConfirmPassword}>
              <Ionicons name={showConfirmPassword  ? 'eye-outline' : 'eye-off-outline'} size={24} style={styles.icon} />
            </TouchableOpacity>
          </View>

          <View style={{flexDirection: "row", justifyContent: "space-evenly" }}>
          <Text
            style={{marginTop: 30, marginRight: 5, fontFamily: "WorkSans", color: COLORS.white}}
            onPress={() => navigation.navigate('Forgot')}
            >
              Already have an account?
              {' '}
                <Text
                  style={{marginTop: 10, marginRight: 10, fontFamily: "WorkSans", fontWeight: "bold"}}
                  onPress={() => navigation.navigate('Login')}
                  >
                  Login
                </Text>
            </Text>
          </View>

          <TouchableOpacity
            style={styles.btnLogin}
          >
            <Text style={styles.textBtn}>Sign Up</Text>
          </TouchableOpacity>
        </View>

        <View style={{flex: 0,alignItems: "center", marginTop: 30, marginBottom:65, }}>
          <Text style={{opacity: 0.4, fontFamily: 'WorkSans', fontSize: 13, color: COLORS.white,}}>
            By signing in with an account, you agree to SO's
          </Text>
          <Text style={{fontFamily: 'WorkSans', fontSize: 13, color: COLORS.white,}}>
            <Text style={{fontWeight: 'bold', textDecorationLine: 'underline'}}>Terms of Service</Text>
            {''} <Text style={{color: 'gray'}}>and</Text> {''}
            <Text style={{fontWeight: 'bold', textDecorationLine: 'underline'}}>Privacy Policy.</Text>
          </Text>
        </View>
      </ImageBackground>
      </ScrollView>
    )
}

export default SignUpScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10,
      },
      backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        width: width,
        height: height,
      },
      header: {
        alignItems: 'center',
        marginBottom:30,
      },
      logoContainer: {
        flex: 0,
        justifyContent: 'center',
        alignItems: 'center',
      },
      logo: {
        width: 100, // Điều chỉnh kích thước logo tại đây
        height: 100,
        resizeMode: 'center',
      },
      textContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: COLORS.white,
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 10,
        marginVertical: 10,
      },
      icon: {
        color: COLORS.white,
      },
      input: {
        flex: 1,
        height: 40,
        marginLeft: 10,
        fontSize: 18,
        color: COLORS.white,
      },
      btnLogin: {
        backgroundColor: COLORS.dark,
        borderRadius: 10,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
      },
      textBtn: {
        color: COLORS.white,
        fontSize: 20,
        fontFamily: 'boldSfPro',
      },
})