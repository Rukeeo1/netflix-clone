import React from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import globalStyles from './global';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
  faCircleInfo,
  faPlay,
  faRotateRight,
} from '@fortawesome/free-solid-svg-icons';
import netflix_hero from '../../assets/images/netflix_hero_image.webp';
import netflix_power from '../../assets/images/netflix_power.webp';
import slides from '../../Components/NetflixImages';
import { HomeCard_2 } from './HomeCard_2';
import { HomeCard_1 } from './HomeCard_1';
import { HomeCard_3 } from './HomeCard_3';
import { HomeCard_4 } from './HomeCard_4';
import { HomeCard_5 } from './HomeCard_5';
import { HomeCard_6 } from './HomeCard_6';
import { HomeCard } from './HomeCard';
import { HomeCard_7 } from './HomeCard_7';
import { HomeCard_8 } from './HomeCard_8';
import { HomeCard_9 } from './HomeCard_9';
import { HomeFooter } from './HomeFooter';
import { DropdownMenu } from './dropdown/dropdown';

export const Home = () => {
  return (
    <ScrollView
      style={{ flex: 1 }}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={globalStyles.scrollview}
    >
      <View style={globalStyles.HomeMountPoint}>
        <View style={globalStyles.netflix_sans_loader}>
          <View style={globalStyles.netflix_dir_ltr}>
            <View>
              <View style={globalStyles.netflix_dark_background}>
                <DropdownMenu />

                <View>
                  <View style={globalStyles.mainView}>
                    <View style={globalStyles.lolomo_fullbleed}>
                      <View style={globalStyles.volatile_billboard}>
                        <View style={globalStyles.billboard_row}>
                          <View style={globalStyles.billboard_billboardPane}>
                            <Image
                              source={netflix_hero}
                              resizeMode='cover'
                              style={globalStyles.hero_image_wrapper}
                            />

                            <View style={globalStyles.info_meta_layer}>
                              <View style={globalStyles.logo_text__meta_layer}>
                                <View style={globalStyles.billboard_title}>
                                  <Image
                                    source={netflix_power}
                                    style={{
                                      width: 100,
                                      resizeMode: 'contain',
                                    }}
                                  />
                                </View>

                                <View style={globalStyles.info_wrapper}>
                                  <View
                                    style={globalStyles.synopsis_fade_container}
                                  >
                                    <View
                                      style={
                                        globalStyles.synopsis_no_supplemental
                                      }
                                    >
                                      <Text
                                        style={globalStyles.synopsis_track_text}
                                      >
                                        In this absorbing crime drama, a
                                        successful and well liked
                                      </Text>
                                      <Text
                                        style={globalStyles.synopsis_track_text}
                                      >
                                        nightclub owner moonlights as a drug
                                        dealer to New York City's
                                      </Text>
                                      <Text
                                        style={globalStyles.synopsis_track_text}
                                      >
                                        A-list users
                                      </Text>
                                    </View>
                                  </View>
                                </View>

                                <View
                                  style={globalStyles.billboard_links_player}
                                >
                                  <TouchableOpacity>
                                    <View style={globalStyles.playButton}>
                                      <FontAwesomeIcon
                                        icon={faPlay}
                                        size={12}
                                        style={globalStyles.faUserPlay}
                                      />

                                      <Text style={globalStyles.playButtonText}>
                                        Play
                                      </Text>
                                    </View>
                                  </TouchableOpacity>

                                  <TouchableOpacity>
                                    <View style={globalStyles.moreButton}>
                                      <FontAwesomeIcon
                                        icon={faCircleInfo}
                                        size={12}
                                        style={globalStyles.faUserInfo}
                                      />

                                      <Text style={globalStyles.moreButtonText}>
                                        More Info
                                      </Text>
                                    </View>
                                  </TouchableOpacity>
                                </View>
                              </View>
                            </View>

                            <View style={globalStyles.embeded_components}>
                              <View style={globalStyles.actionButtons}>
                                <FontAwesomeIcon
                                  icon={faRotateRight}
                                  size={12.13}
                                  style={globalStyles.faUserBell}
                                />
                              </View>

                              <View style={globalStyles.maturity_rating}>
                                <Text style={globalStyles.maturity_number}>
                                  18+
                                </Text>
                              </View>
                            </View>
                          </View>
                        </View>
                      </View>

                      <HomeCard />

                      <HomeCard_1 />

                      <HomeCard_2 />

                      <HomeCard_3 />

                      <HomeCard_4 />

                      <HomeCard_5 />

                      <HomeCard_6 />

                      <HomeCard_7 />

                      <HomeCard_8 />

                      <HomeCard_9 />
                    </View>
                  </View>

                  <HomeFooter />
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
