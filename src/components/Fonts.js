import React,{useRef} from 'react';
import {View, Text,StyleSheet,Image } from 'react-native';
import {showMessage} from 'react-native-flash-message';

type Title = {
    name: string;
    numberOfLines:any;
  };

  
  
const JudsonBold = (props) => {
    return (
        <Text style={[styles.signinTitle,props.style]}>{props.name}</Text>
    );
  };

  
  const Judson = (props) => {
    return (
        <Text style={[styles.judsonregular,props.style]}>{props.name}</Text>
    );
  };
  const JudsonItalic = (props) => {
    return (
        <Text style={[styles.judsonitalic,props.style]}>{props.name}</Text>
    );
  };

  const InterBold = (props) => {
    return (
        <Text style={[styles.interbold,props.style]}>{props.name}</Text>
    );
  };

  const Interregular = (props) => {
    return (
        <Text style={[styles.interregular,props.style]}>{props.name}</Text>
    );
  };

  const Inter = (props) => {
    return (
        <Text numberOfLines={props.numberOfLines} style={[styles.interregular,props.style]}>{props.name}</Text>
    );
  };
  const Interlight = (props) => {
    return (
        <Text style={styles.interlight}>{props.name}</Text>
    );
  };

  const Intermedium = (props) => {
    return (
      <Text style={[styles.intermedium,props.style]}>{props.name}</Text>
      );
  };
  const Interthin = (props) => {
    return (
      <Text style={[styles.interthin,props.style]}>{props.name}</Text>
      );
  };

  const showToast = (text,color,borderColor,imgSrc,flashMessageRef,bottomPosition) => {
    let message = {
      message: text,
      style: {
        width:'90%',
        backgroundColor: color,
        borderColor:borderColor,
        borderWidth:1.5,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        bottom:bottomPosition
      },
      duration: 2000,
      position: 'top' ,
      floating: true,
      titleStyle: {textAlign: 'center',color:'black'},
      icon: props => <Image source={imgSrc} style={{marginLeft:10}}/>,
    };
    flashMessageRef.current.showMessage(message);
  };

  const styles = StyleSheet.create({
    signinTitle:{
      fontFamily:"Judson-Bold",
   
      color:"#575757",
    },
    judsonregular:{
        fontFamily:"Judson-Regular",
        fontSize:20,
        color:"#575757",
      },
      interbold:{
        fontFamily:"Inter-Bold",
      fontSize:14,
      },
      interregular:{
        fontFamily:"Inter-Regular",
        color:"#575757",

      },
      interlight:{
        fontFamily:"Inter-Light",
        marginTop:30,
      fontSize:11,
      },
      interthin:{
        fontFamily:"Inter-Thin"
      },
      judsonitalic:{
        fontFamily:"Judson-Italic"
      },
      intermedium:{
        fontFamily:"Inter-Medium",
        fontWeight:400,
      },
      interthin:{
        fontFamily:"Inter-Thin"
      }
      


  
  });
  export default JudsonBold;
  export {JudsonBold,Judson,JudsonItalic,Inter,Interlight,InterBold,Intermedium,Interthin,showToast};