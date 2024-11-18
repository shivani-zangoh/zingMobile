import React, { useState } from 'react';
import { StyleSheet, Text, View, Platform, Dimensions, TouchableOpacity, TextInput, StatusBar } from 'react-native';
import SplashLogo from '../../Assets/Image/background.svg';
import Logo from '../../Assets/Image/logo.svg';
import Or from '../../Assets/Image/Or.svg';
import Google from '../../Assets/Image/google.svg';
import RectangleLogo from '../../Assets/Image/rectangle.svg';
import Button from '../../components/Button';

const { width, height } = Dimensions.get('window');

function Signin({ navigation }) {
  const [email, setEmail] = useState('')

  return (

    //  <SafeAreaView style={styles.safeArea}>
    <View style={styles.container}>
      <StatusBar hidden={true} translucent={true} />
      {/* Full-screen SplashLogo */}
      <SplashLogo width={width} height={890} style={styles.splashLogo} />

      {/* Overlay content */}
      <View style={styles.overlay}>
        <Logo />
      </View>

      {/* RectangleLogo with text inside */}
      <View style={styles.rectangleContainer}>
        <RectangleLogo />
        <Text style={styles.signInText}>Sign in to Zing</Text>

        <Text style={styles.message}>We recommend using your work email address for seamless collaborations.</Text>
        {/* <Text style={styles.label}>User Email*</Text> */}
        <TextInput
          value={email}
          onChangeText={setEmail}
          style={[styles.input, { color: email ? '#101012' : '#747474' }]}
          placeholder="User Email*"
          placeholderTextColor="#747474"
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>
      <View style={{ position: 'absolute', marginTop: Platform.OS === 'ios' ? 490 : 520, marginLeft: 30, width: '88%', height: 52, }}>
        <Button style={styles.button} title={"Sign in to Zing"}
          onPress={() => console.log('pressed')}
          // onPress={() => navigation.navigate('MainNavigator')}
          textSize={undefined} textStyle={{ marginTop: 5 }} />
      </View>
      <Or style={{ position: 'absolute', justifyContent: 'center', alignItem: 'center', marginLeft: 190, marginTop: Platform.OS === 'ios' ? 590 : 620, }} />
      <View style={{ position: 'absolute', marginTop: Platform.OS === 'ios' ? 620 : 660, marginLeft: 60, width: '85%', height: 52, }}>
        <TouchableOpacity
          style={styles.googleButton}
          onPress={() => console.log('pressed')}>
          {/* Google Icon */}
          <View style={styles.iconContainer}>
            <Google />
          </View>

          {/* Button Text */}
          <Text style={styles.buttonText}>Continue with Google</Text>
        </TouchableOpacity>


      </View>
      <View style={styles.footer}>
        <Text style={{  fontSize: 16,color: '#747474',fontWeight: 400,fontFamily: 'Schibsted Grotesk', lineHeight: '22.4'}}>Don’t have an account? </Text>
        <Text style={{color:'#3840EB',textDecorationLine:'underline'}} onPress={() => console.log('pressed')}>Sign Up</Text>
      </View>
    </View>
    // </SafeAreaView>
  );
}

export default Signin;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    position: 'relative',
  },
  splashLogo: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  overlay: {
    position: 'absolute',
    marginTop: Platform.OS === 'ios' ? 80 : 100,
    marginLeft: 45,
  },
  rectangleContainer: {
    position: 'absolute',
    marginTop: Platform.OS === 'ios' ? 65 : 85,
    marginLeft: 25,
  },
  signInText: {
    justifyContent: 'center',
    // alignItems: 'center',
    position: 'absolute',
    fontSize: 36,
    fontWeight: '400',
    color: '#232323',
    lineHeight: '43.2',
    marginTop: 140,
    marginLeft: 30,
    fontFamily: 'General Sans'
  },
  message: {
    position: 'absolute',
    fontSize: 16,
    fontWeight: '400',
    color: '#747474',
    lineHeight: '22.4',
    marginTop: 210,
    marginLeft: 30,
    fontFamily: 'Schibsted Grotesk'
  },
  label: {
    justifyContent: 'center',
    fontSize: 14,
    fontWeight: '400',
    position: 'absolute',
    marginTop: 360,
    marginLeft: 30,
    fontFamily: 'Schibsted Grotesk',
    lineHeight: '19.6',
    color: '#747474',
  },
  input: {
    position: 'absolute',
    marginTop: 360,
    marginLeft: 30,
    borderBottomWidth: 1,
    borderBottomColor: '#939393',
    width: 300,
    height: 40,
    color: '#747474',
  },
  button: {
    justifyContent: 'center',
    width: '85%',
    height: 52,
    borderRadius: 20
  },
  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FAFAFA',
    // paddingHorizontal: 10,
    width: '85%',
    height: 52,
    borderRadius: 20,
    borderColor: '#101012',
    borderWidth: 1
  },
  iconContainer: {
    marginRight: 10,
  },
  buttonText: {
    fontSize: 16,
    color: '#101012',
    fontWeight: '500',
  },
  footer: {
    flexDirection:'row',
    position: 'absolute',
    marginTop: Platform.OS === 'ios' ? 740 : 750,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 100,
    fontFamily: 'Schibsted Grotesk',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: '16',
  }
});


