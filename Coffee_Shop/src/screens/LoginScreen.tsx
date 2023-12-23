import React, { Component, useState } from 'react';
import { StyleSheet, Text, Dimensions, View, TextInput, TouchableOpacity, Image, ImageBackground } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
    StatusBar,
    ScrollView,
} from 'react-native';
import COLORS from '../consts/colors';
import TabNavigator from '../navigators/TabNavigator';

const { width, height } = Dimensions.get('window');
const LoginScreen = ({ navigation }: any) => {


    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false); // Thêm state showPassword

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleLogin = () => {

        navigation.navigate("Tab");

    };
  return (
    <ScrollView>
                <ImageBackground
                    source={require('../assets/coffe.png')}
                    style={styles.backgroundImage}
                >
                    <View style={styles.container}>
                        <View style={styles.header}>
                            <Text style={{ fontFamily: 'heavySfPro', fontSize: 30, color: COLORS.white }}>
                                Login
                            </Text>
                            <Text style={{ fontFamily: 'sfPro', fontSize: 18, marginTop: 10, color: COLORS.white }}>
                                Login to access your account
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
                                placeholder="Username"
                                placeholderTextColor="rgba(255, 255, 255, 0.7)"
                                returnKeyType='next'

                                style={styles.input}
                                value={username}
                                onChangeText={setUsername}
                            />
                        </View>

                        <View style={styles.textContainer}>
                            <Ionicons name="lock-closed-outline" size={24} style={styles.icon} />
                            <TextInput
                                placeholder="Password"
                                placeholderTextColor="rgba(255, 255, 255, 0.7)"
                                returnKeyType='done'
                                onSubmitEditing={handleLogin}
                                style={styles.input}
                                value={password}
                                onChangeText={setPassword}
                                secureTextEntry={!showPassword}
                            />
                            <TouchableOpacity onPress={toggleShowPassword}>
                                <Ionicons name={showPassword ? 'eye-outline' : 'eye-off-outline'} size={24} style={{ marginRight: 5, color: COLORS.white }} />
                            </TouchableOpacity>
                        </View>

                        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                            <Text
                                style={{ marginTop: 10, marginRight: 5, fontFamily: "WorkSans", color: COLORS.white }}
                            >
                                Forgot password?
                            </Text>
                            <Text
                                style={{ marginTop: 10, marginRight: 10, fontFamily: "WorkSans", fontWeight: "bold", color: COLORS.white }}
                                onPress={() => navigation.navigate('SignUp')}
                            >
                                Sign Up
                            </Text>
                        </View>

                        <TouchableOpacity
                            style={styles.btnLogin}
                            onPress={handleLogin}
                        >
                            <Text style={styles.textBtn}>Login</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ flex: 1, alignItems: "center", paddingTop: 70, marginTop: 105, marginBottom: 25 }}>
                        <Text style={{ opacity: 0.4, fontFamily: 'WorkSans', fontSize: 13, color: COLORS.white }}>
                            By signing in with an account, you agree to SO's
                        </Text>
                        <Text style={{ fontFamily: 'WorkSans', fontSize: 13, color: COLORS.white }}>
                            <Text style={{ fontWeight: 'bold', textDecorationLine: 'underline' }}>Terms of Service</Text>
                            {' '}
                            <Text style={{ color: 'gray' }}>and</Text>
                            {' '}
                            <Text style={{ fontWeight: 'bold', textDecorationLine: 'underline' }}>Privacy Policy.</Text>
                        </Text>
                    </View>
                </ImageBackground>
            </ScrollView>

  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    flex: 5,
    paddingHorizontal: 20,
  },
  backgroundImage: {
    flex: 2,
    resizeMode: 'cover',
    width: width,
    height: height,
  },
  header: {
    alignItems: 'center',
    marginTop: 80
  },
  logoContainer: {
    marginVertical: 80,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
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