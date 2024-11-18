import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import LogoNameSVG from '../Assest/Image/logoName.svg';
import SettingSVG from '../Assest/Image/settings.svg';

const Navbar = ({onPress }) => {
 return (
    <View style={styles.container}>
    <LogoNameSVG />
        <TouchableOpacity onPress={onPress}>
          <SettingSVG style={{ margin: 10 }} />
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    paddingVertical: 0,
    borderBottomWidth:1,
    borderBottomColor:'rgba(228, 228, 228, 1)'
  },
});

export default Navbar;