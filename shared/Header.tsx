import React, { useState } from "react";
import { StyleSheet, Image, Text, View, ImageBackground } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import topLogoIcon from "../assets/images/TopLogo.png";
import cast from "../assets/images/cast.png";
import search from "../assets/images/search.png";
import accountUser from "../assets/images/account-user-profile.png";

interface Props {
  title: string;
}

export default function Header(props: Props) {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.profile_header}>
        <Image
          source={topLogoIcon}
          style={styles.topLogoIcon}
          resizeMode="contain"
        />

        <View style={styles.profile_header_icon_content}>
          <TouchableOpacity>
            <Image source={cast} style={styles.cast} resizeMode="contain" />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image style={styles.search} source={search} resizeMode="contain" />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image
              style={styles.account}
              source={accountUser}
              resizeMode="contain"
            />
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
    width: "100%",
  },

  profile_header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    position: "relative",
    maxWidth: 375,
    width: "100%",
  },

  topLogoIcon: {
    width: 33.474178314208984,
    height: 40.474178314208984,
  },

  profile_header_icon_content: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: 125,
  },

  cast: {
    height: 24.107980728149414,
    width: 24.107980728149414,
  },

  search: {
    height: 24.107980728149414,
    width: 24.107980728149414,
  },

  account: {
    height: 24.107980728149414,
    width: 24.107980728149414,
  },
});
