import React, { useState } from "react";
import { StyleSheet, Image, Text, View, ImageBackground } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import topLogoIcon from "../assets/images/TopLogo.png";
import cast from "../assets/images/cast.png";
import search from "../assets/images/search.png";
import accountUser from "../assets/images/accountUser.png";

interface Props {
  title: string;
}

export default function Header(props: Props) {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.profile_header}>
        <Image source={topLogoIcon} style={styles.topLogoIcon} />

        <View style={styles.profile_header_icon_content}>
          <TouchableOpacity>
            <Image source={cast} style={styles.cast} />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image style={styles.search} source={search} />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image style={styles.account} source={accountUser} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },

  profile_header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    position: "relative",
    width: 375,
  },

  topLogoIcon: {
    width: 33.474178314208984,
    height: 33.474178314208984,
    left: 16,
    borderRadius: 0,
    resizeMode: "contain",
  },

  profile_header_icon_content: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    right: 16,
    width: 140,
  },

  cast: {
    height: 29.107980728149414,
    width: 29.107980728149414,
    borderRadius: 0,
    resizeMode: "contain",
  },

  search: {
    height: 29.107980728149414,
    width: 29.107980728149414,
    resizeMode: "contain",
  },

  account: {
    height: 29.107980728149414,
    width: 29.107980728149414,
    resizeMode: "contain",
  },
});
