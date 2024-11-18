import React, { useEffect } from 'react';
import { View, Image, StyleSheet, Platform, StatusBar } from 'react-native';
import SplashLogo from '../Assets/Image/Splash.svg'

const Splash = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Signin');
        }, 1500);

    }, []);

    return (
        <View style={styles.container}>
            <StatusBar hidden={true} translucent={true} />
            <SplashLogo width={435} height={900} />
        </View>
    );
};
export default Splash;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
})