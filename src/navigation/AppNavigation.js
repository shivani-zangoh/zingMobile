import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import Splash from '../screens/Splash';
import Signin from '../screens/Admin/Signin';
import SigninOtp from '../screens/Admin/SigninOtp';
import AccountAbout from '../screens/Admin/AccountAbout';
import Accountyou from '../screens/Admin/Accountyou';
import AddMemeber from '../screens/Admin/AddMemeber';
import AddWorkspace from '../screens/Admin/AddWorkspace';
import Signup from '../screens/Admin/Signup';
import SignupVerify from '../screens/Admin/SignupVerify';
import WorkSpace from '../screens/Admin/WorkSpace';
import MProfile from '../screens/Member/MProfile';
import MSignin from '../screens/Member/MSignin';
import MSigninVerify from '../screens/Member/MSigninVerify';
import MSignup from '../screens/Member/MSignup';
import MSignupVerify from '../screens/Member/MSignupVerify';
import MWorkspace from '../screens/Member/MWorkspace';
import WorkspaceInvite from '../screens/Member/WorkspaceInvite';

const MainStack = createStackNavigator();
const AppNavigation = () => {
    return (
        <NavigationContainer>
            <MainStack.Navigator initialRouteName="Splash">
                <MainStack.Screen
                    name="Splash"
                    component={Splash}
                    options={{ headerShown: false, }}
                />
                <MainStack.Screen
                    name="Signin"
                    component={Signin}
                    options={{ headerShown: false, }}
                />
                <MainStack.Screen
                    name="SigninOtp"
                    component={SigninOtp}
                    options={{ headerShown: false, }}
                />
                <MainStack.Screen
                    name="AccountAbout"
                    component={AccountAbout}
                    options={{ headerShown: false, }}
                />
                 <MainStack.Screen
                    name="Accountyou"
                    component={Accountyou}
                    options={{ headerShown: false, }}
                />
                <MainStack.Screen
                    name="AddMemeber"
                    component={AddMemeber}
                    options={{ headerShown: false, }}
                />
                <MainStack.Screen
                    name="AddWorkspace"
                    component={AddWorkspace}
                    options={{ headerShown: false, }}
                />
                <MainStack.Screen
                    name="Signup"
                    component={Signup}
                    options={{ headerShown: false, }}
                />
                  <MainStack.Screen
                    name="SignupVerify"
                    component={SignupVerify}
                    options={{ headerShown: false, }}
                />
                <MainStack.Screen
                    name="WorkSpace"
                    component={WorkSpace}
                    options={{ headerShown: false, }}
                />
                 <MainStack.Screen
                    name="MProfile"
                    component={MProfile}
                    options={{ headerShown: false, }}
                />
                  <MainStack.Screen
                    name="MSignin"
                    component={MSignin}
                    options={{ headerShown: false, }}
                />
                <MainStack.Screen
                    name="MSigninVerify"
                    component={MSigninVerify}
                    options={{ headerShown: false, }}
                />
                 <MainStack.Screen
                    name="MSignup"
                    component={MSignup}
                    options={{ headerShown: false, }}
                />
                  <MainStack.Screen
                    name="MSignupVerify"
                    component={MSignupVerify}
                    options={{ headerShown: false, }}
                />
                <MainStack.Screen
                    name="MWorkspace"
                    component={MWorkspace}
                    options={{ headerShown: false, }}
                />
                  <MainStack.Screen
                    name="WorkspaceInvite"
                    component={WorkspaceInvite}
                    options={{ headerShown: false, }}
                />
            </MainStack.Navigator>
            
           
        </NavigationContainer>
    );
};

export default AppNavigation;

