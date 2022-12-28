import React from "react";
import { StyleSheet, View, Text } from "react-native";

interface Props {
  title: string;
  titleStyle: any;
}

const CommonText = (props: Props) => {
  return (
    <View>
      <Text style={[styles.rowHeaderTitle, props.titleStyle]}>
        {props.title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  rowHeaderTitle: {
    color: "#e5e5e5",
  },
});

export default CommonText;
