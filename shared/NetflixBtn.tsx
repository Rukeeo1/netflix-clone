import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';

interface Props {
  text: string;
}

const NetflixBtn = (props: Props) => {
  return (
    <View>
      <Text style={styles.buttonText}>{props.text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 337.5,
    height: 50,
    borderRadius: 4,
    backgroundColor: '#e50914',
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
});

export default NetflixBtn;
