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
import mainPlayButton from "../../assets/images/home-card-button-play.png";
import infoIcon from "../../assets/images/info.png";
import CommonText from "../../shared/CommonText";

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
            <CommonText
              title="TV Shows"
              titleStyle={homeStyles.HomeCardNavText}
            />
            <CommonText
              title="Movies"
              titleStyle={homeStyles.HomeCardNavText}
            />

            <View style={homeStyles.categoryContainer}>
              <CommonText
                title="Categories"
                titleStyle={homeStyles.CategoryText}
              />

              <Image source={caretDownIcon} style={homeStyles.caretDownIcon} />
            </View>
          </View>
        </View>

        <View style={homeStyles.HomeCardContent}>
          <ImageBackground
            source={mainPoster}
            resizeMode="contain"
            style={homeStyles.mainPoster}
          >
            <View style={homeStyles.mainPosterActions}>
              <View style={homeStyles.mainPosterActionContents}>
                <View style={homeStyles.myListContainer}>
                  <TouchableOpacity>
                    <View style={homeStyles.myListContent}>
                      <Image
                        source={plus}
                        resizeMode="contain"
                        style={homeStyles.plus}
                      />
                      <CommonText
                        title="My List"
                        titleStyle={homeStyles.myListText}
                      />
                    </View>
                  </TouchableOpacity>
                </View>

                <TouchableOpacity>
                  <Image
                    source={mainPlayButton}
                    resizeMode="contain"
                    style={homeStyles.mainPlayButton}
                  />
                </TouchableOpacity>

                <View style={homeStyles.infoContainer}>
                  <TouchableOpacity>
                    <View style={homeStyles.infoContent}>
                      <Image
                        source={infoIcon}
                        resizeMode="contain"
                        style={homeStyles.infoIcon}
                      />
                      <CommonText
                        title="Info"
                        titleStyle={homeStyles.infoText}
                      />
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </ImageBackground>
        </View>
      </View>
    </ScrollView>
  );
};
