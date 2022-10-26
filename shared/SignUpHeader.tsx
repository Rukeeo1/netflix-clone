import NetflixSvg from '../assets/svgs/netflix-upload-emptystate.svg';
import React from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface Props {
  navigation: any;
  title: string;
}

export default function SignUpHeader() {
  return (
    <View style={styles.login_header_container}>
      <View style={styles.svg_nfLogo}>
        <NetflixSvg style={styles.netflix_logo} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  login_header_container: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: 375,
    height: 45,
  },

  svg_nfLogo: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 75,
    height: 45,
    marginLeft: '3%',
  },

  netflix_logo: {
    height: 20,
    paddingTop: 12,
    width: 75,
  },
});
