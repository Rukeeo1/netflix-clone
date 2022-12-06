import React, { FC } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import homeStyles from './style';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
  faCircleInfo,
  faPlay,
  faRotateRight,
} from '@fortawesome/free-solid-svg-icons';
import netflix_hero from '../../assets/images/netflix_hero_image.webp';
import netflix_power from '../../assets/images/netflix_power.webp';
// import { HomeCard_2 } from './HomeCard_2';
// import { HomeCard_1 } from './HomeCard_1';
// import { HomeCard_3 } from './HomeCard_3';
// import { HomeCard_4 } from './HomeCard_4';
// import { HomeCard_5 } from './HomeCard_5';
// import { HomeCard_6 } from './HomeCard_6';
// import { HomeCard } from './HomeCard';
// import { HomeCard_7 } from './HomeCard_7';
// import { HomeCard_8 } from './HomeCard_8';
// import { HomeCard_9 } from './HomeCard_9';


interface Props {}

export const HomeCard: FC<Props> = () => {
  return (
    <ScrollView
      style={{ flex: 1 }}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={homeStyles.scrollview}
    >
      <View style={homeStyles.HomeMountPoint}>
        <View style={homeStyles.netflix_sans_loader}>
          <View style={homeStyles.netflix_dir_ltr}>
            <View>
              <View style={homeStyles.netflix_dark_background}>
                <View>
                  <View style={homeStyles.mainView}>
                    <View style={homeStyles.lolomo_fullbleed}>
                      <View style={homeStyles.volatile_billboard}>
                        <View style={homeStyles.billboard_row}>
                          <View style={homeStyles.billboard_billboardPane}>
                            <Image
                              source={netflix_hero}
                              resizeMode="cover"
                              style={homeStyles.hero_image_wrapper}
                            />

                            <View style={homeStyles.info_meta_layer}>
                              <View style={homeStyles.logo_text__meta_layer}>
                                <View style={homeStyles.billboard_title}>
                                  <Image
                                    source={netflix_power}
                                    style={{
                                      width: 100,
                                      resizeMode: "contain",
                                    }}
                                  />
                                </View>

                                <View style={homeStyles.info_wrapper}>
                                  <View
                                    style={homeStyles.synopsis_fade_container}
                                  >
                                    <View
                                      style={
                                        homeStyles.synopsis_no_supplemental
                                      }
                                    >
                                      <Text
                                        style={homeStyles.synopsis_track_text}
                                      >
                                        In this absorbing crime drama, a
                                        successful and well liked
                                      </Text>
                                      <Text
                                        style={homeStyles.synopsis_track_text}
                                      >
                                        nightclub owner moonlights as a drug
                                        dealer to New York City's
                                      </Text>
                                      <Text
                                        style={homeStyles.synopsis_track_text}
                                      >
                                        A-list users
                                      </Text>
                                    </View>
                                  </View>
                                </View>

                                <View style={homeStyles.billboard_links_player}>
                                  <TouchableOpacity>
                                    <View style={homeStyles.playButton}>
                                      <FontAwesomeIcon
                                        icon={faPlay}
                                        size={12}
                                        style={homeStyles.faUserPlay}
                                      />

                                      <Text style={homeStyles.playButtonText}>
                                        Play
                                      </Text>
                                    </View>
                                  </TouchableOpacity>

                                  <TouchableOpacity>
                                    <View style={homeStyles.moreButton}>
                                      <FontAwesomeIcon
                                        icon={faCircleInfo}
                                        size={12}
                                        style={homeStyles.faUserInfo}
                                      />

                                      <Text style={homeStyles.moreButtonText}>
                                        More Info
                                      </Text>
                                    </View>
                                  </TouchableOpacity>
                                </View>
                              </View>
                            </View>

                            <View style={homeStyles.embeded_components}>
                              <View style={homeStyles.actionButtons}>
                                <FontAwesomeIcon
                                  icon={faRotateRight}
                                  size={12.13}
                                  style={homeStyles.faUserBell}
                                />
                              </View>

                              <View style={homeStyles.maturity_rating}>
                                <Text style={homeStyles.maturity_number}>
                                  18+
                                </Text>
                              </View>
                            </View>
                          </View>
                        </View>
                      </View>

                      {/* <HomeCard /> */}

                      {/* <HomeCard_1 /> */}

                      {/* <HomeCard_2 /> */}

                      {/* <HomeCard_3 /> */}

                      {/* <HomeCard_4 /> */}

                      {/* <HomeCard_5 /> */}

                      {/* <HomeCard_6 /> */}

                      {/* <HomeCard_7 /> */}

                      {/* <HomeCard_8 /> */}

                      {/* <HomeCard_9 /> */}
                    </View>
                  </View>

                  {/* <HomeFooter /> */}
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
