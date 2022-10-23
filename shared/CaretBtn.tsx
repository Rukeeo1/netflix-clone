import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';

interface Props {
  text: string;
}

const CaretBtn = (props: Props) => {
  return (
    <TouchableOpacity>
      <View style={styles.button}></View>
    </TouchableOpacity>
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

export default CaretBtn;
