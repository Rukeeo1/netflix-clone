import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

interface Props {
  title: string;
}

const CommonText = (props: Props) => {
  return (
    <View>
      <Text style={styles.row_header_title}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  row_header_title: {
    fontSize: 12,
    color: '#e5e5e5',
  },
});

export default CommonText;
