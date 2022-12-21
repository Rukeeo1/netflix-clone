import React, { FC } from "react";
import {
  Image,
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import homeStyles from "./homeStyle";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faChevronDown,
  faCircleInfo,
  faPlay,
  faRotateRight,
} from "@fortawesome/free-solid-svg-icons";
import caretDownIcon from "../../assets/images/caretDownIcon.png";
import mainPoster from "../../assets/images/MainPoster.png";
import plus from "../../assets/images/plus.png";
import mainPlayButton from "../../assets/images/MainPLayButton.png";
import infoIcon from "../../assets/images/info.png";

interface Props {}

export const HomeCard: FC<Props> = () => {
  return (
    <ScrollView
      style={{ flex: 1 }}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={homeStyles.scrollview}
    >
      <View style={homeStyles.HomeCardContainer}>
        <View style={homeStyles.HomeCardNavBarContainer}>
          <View style={homeStyles.HomeCardNavBarContent}>
            <Text style={homeStyles.HomeCardNavText}>TV Shows</Text>
            <Text style={homeStyles.HomeCardNavText}>Movies</Text>

            <View style={homeStyles.categoryContainer}>
              <Text style={homeStyles.CategoryText}>Categories</Text>
              <Image source={caretDownIcon} style={homeStyles.caretDownIcon} />
            </View>
          </View>
        </View>

        <View style={homeStyles.HomeCardContent}>
          <ImageBackground
            source={mainPoster}
            resizeMode="stretch"
            style={homeStyles.mainPoster}
          >
            <View style={homeStyles.mainPosterActions}>
              <View style={homeStyles.myListContainer}>
                <Image
                  source={plus}
                  resizeMode="contain"
                  style={homeStyles.plus}
                />
                <Text style={homeStyles.myListText}>My List</Text>
              </View>

              <Image
                source={mainPlayButton}
                resizeMode="contain"
                style={homeStyles.mainPlayButton}
              />

              <View style={homeStyles.infoContainer}>
                <Image
                  source={infoIcon}
                  resizeMode="contain"
                  style={homeStyles.infoIcon}
                />
                <Text style={homeStyles.infoText}>Info</Text>
              </View>
            </View>
          </ImageBackground>
        </View>
      </View>
    </ScrollView>
  );
};
