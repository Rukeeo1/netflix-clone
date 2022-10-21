import React from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import globalStyles from './global';
import NetflixSvg from '../../assets/svgs/netflix-upload-emptystate.svg';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
  faBell,
  faCaretDown,
  faCircleInfo,
  faPlay,
  faRotateRight,
} from '@fortawesome/free-solid-svg-icons';
import profile_logo from '../../assets/images/profile_logo.png';
import netflix_hero from '../../assets/images/netflix_hero_image.webp';
import netflix_power from '../../assets/images/netflix_power.webp';
import Rank_1 from '../../assets/svgs/rank_1-upload-emptystate.svg';
import Rank_2 from '../../assets/svgs/rank_2-upload-emptystate.svg';
import Rank_3 from '../../assets/svgs/rank_3-upload-emptystate.svg';
import Rank_4 from '../../assets/svgs/rank_4-upload-emptystate.svg';
import Rank_5 from '../../assets/svgs/rank_5-upload-emptystate.svg';
import Rank_6 from '../../assets/svgs/rank_6-upload-emptystate.svg';
import Rank_7 from '../../assets/svgs/rank_7-upload-emptystate.svg';
import Rank_8 from '../../assets/svgs/rank_8-upload-emptystate.svg';
import Rank_9 from '../../assets/svgs/rank_9-upload-emptystate.svg';
import Rank_10 from '../../assets/svgs/rank_10-upload-emptystate.svg';
import netflix_pic from '../../assets/images/netflix_pic.jpeg';
import Facebook from '../../assets/svgs/facebook-upload-emptystate.svg';
import Instagram from '../../assets/svgs/instagram-upload-emptystate.svg';
import Youtube from '../../assets/svgs/youtube-upload-emptystate.svg';
import slides from '../../Components/NetflixImages';
import { HomeCard_2 } from './HomeCard_2';
import { HomeCard_1 } from './HomeCard_1';
import CommonText from '../../shared/CommonText';

interface Props {
  slides: {
    id: number;
    image: string;
  };
}

export const Home = (props: Props) => {
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
                <View style={globalStyles.pinning_header}>
                  <View style={globalStyles.pinning_header_container}>
                    <View style={globalStyles.main_header_menu_navigation}>
                      <View style={globalStyles.main_netflix_logo_content}>
                        <View style={globalStyles.svg_nfLogo}>
                          <NetflixSvg style={globalStyles.netflix_logo} />
                        </View>

                        <View style={globalStyles.tabbed_primary_navigation}>
                          <View style={globalStyles.tabbed_primary_browse}>
                            <Text
                              style={globalStyles.tabbed_primary_browse_text}
                            >
                              Browse
                            </Text>
                          </View>

                          <FontAwesomeIcon
                            icon={faCaretDown}
                            size={16}
                            style={globalStyles.faUserIcon}
                          />
                        </View>
                      </View>

                      <View style={globalStyles.secondary_navigation}>
                        <View style={globalStyles.nav_element}></View>
                        <View style={globalStyles.nav_element_notification}>
                          <View style={globalStyles.nav_span_notification}>
                            <View style={globalStyles.nav_notification_menu}>
                              <FontAwesomeIcon
                                icon={faBell}
                                size={24}
                                style={globalStyles.faUserBell}
                              />
                            </View>
                          </View>
                        </View>

                        <View style={globalStyles.nav_element_blue_icon}>
                          <View style={globalStyles.nav_account_menu_item}>
                            <View
                              style={globalStyles.nav_account_dropdown_button}
                            >
                              <View
                                style={globalStyles.nav_account_profile_link}
                              >
                                <Image
                                  source={profile_logo}
                                  style={{
                                    width: 32,
                                    height: 32,
                                    resizeMode: 'contain',
                                  }}
                                />
                              </View>
                            </View>
                          </View>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>

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

                              <View style={globalStyles.billboard_links_player}>
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

                    <View style={globalStyles.lolomoRow_title_card}>
                      <View style={globalStyles.rowHeader_ltr}>
                        <View style={globalStyles.rowTitle_ltr0}>
                          <Text style={globalStyles.row_header_title}>
                            Top 10 TV Shows in Nigeria Today
                          </Text>
                        </View>
                      </View>

                      <View style={globalStyles.rowContainer_title_card}>
                        <View style={globalStyles.ptrack_container}>
                          <View style={globalStyles.rowContent_slider}>
                            <View style={globalStyles.slider}>
                              <View style={globalStyles.sliderMask_showPeek}>
                                <View style={globalStyles.sliderContent}>
                                  <ScrollView
                                    pagingEnabled
                                    horizontal
                                    showsHorizontalScrollIndicator={false}
                                  >
                                    <TouchableOpacity>
                                      <View style={globalStyles.sliderItem}>
                                        <View
                                          style={
                                            globalStyles.titleCard_Container
                                          }
                                        >
                                          <View
                                            style={globalStyles.boxArt_size}
                                          >
                                            <View
                                              style={
                                                globalStyles.rank_1_container
                                              }
                                            >
                                              <Rank_1 />
                                            </View>

                                            <Image
                                              source={{
                                                uri: slides[0]['image'],
                                              }}
                                              style={{
                                                width: 85.88,
                                                height: 122.66,
                                                resizeMode: 'contain',
                                              }}
                                            />
                                          </View>
                                        </View>
                                      </View>
                                    </TouchableOpacity>

                                    <TouchableOpacity>
                                      <View style={globalStyles.sliderItem}>
                                        <View
                                          style={
                                            globalStyles.titleCard_Container
                                          }
                                        >
                                          <View
                                            style={globalStyles.boxArt_size}
                                          >
                                            <View
                                              style={
                                                globalStyles.rank_1_container
                                              }
                                            >
                                              <Rank_2 />
                                            </View>

                                            <Image
                                              source={{
                                                uri: slides[1]['image'],
                                              }}
                                              style={{
                                                width: 85.88,
                                                height: 122.66,
                                                resizeMode: 'contain',
                                              }}
                                            />
                                          </View>
                                        </View>
                                      </View>
                                    </TouchableOpacity>

                                    <TouchableOpacity>
                                      <View style={globalStyles.sliderItem}>
                                        <View
                                          style={
                                            globalStyles.titleCard_Container
                                          }
                                        >
                                          <View
                                            style={globalStyles.boxArt_size}
                                          >
                                            <View
                                              style={
                                                globalStyles.rank_1_container
                                              }
                                            >
                                              <Rank_3 />
                                            </View>

                                            <Image
                                              source={{
                                                uri: slides[3]['image'],
                                              }}
                                              style={{
                                                width: 85.88,
                                                height: 122.66,
                                                resizeMode: 'contain',
                                              }}
                                            />
                                          </View>
                                        </View>
                                      </View>
                                    </TouchableOpacity>

                                    <TouchableOpacity>
                                      <View style={globalStyles.sliderItem}>
                                        <View
                                          style={
                                            globalStyles.titleCard_Container
                                          }
                                        >
                                          <View
                                            style={globalStyles.boxArt_size}
                                          >
                                            <View
                                              style={
                                                globalStyles.rank_1_container
                                              }
                                            >
                                              <Rank_4 />
                                            </View>

                                            <Image
                                              source={{
                                                uri: slides[4]['image'],
                                              }}
                                              style={{
                                                width: 85.88,
                                                height: 122.66,
                                                resizeMode: 'contain',
                                              }}
                                            />
                                          </View>
                                        </View>
                                      </View>
                                    </TouchableOpacity>

                                    <TouchableOpacity>
                                      <View style={globalStyles.sliderItem}>
                                        <View
                                          style={
                                            globalStyles.titleCard_Container
                                          }
                                        >
                                          <View
                                            style={globalStyles.boxArt_size}
                                          >
                                            <View
                                              style={
                                                globalStyles.rank_1_container
                                              }
                                            >
                                              <Rank_5 />
                                            </View>

                                            <Image
                                              source={{
                                                uri: slides[5]['image'],
                                              }}
                                              style={{
                                                width: 85.88,
                                                height: 122.66,
                                                resizeMode: 'contain',
                                              }}
                                            />
                                          </View>
                                        </View>
                                      </View>
                                    </TouchableOpacity>

                                    <TouchableOpacity>
                                      <View style={globalStyles.sliderItem}>
                                        <View
                                          style={
                                            globalStyles.titleCard_Container
                                          }
                                        >
                                          <View
                                            style={globalStyles.boxArt_size}
                                          >
                                            <View
                                              style={
                                                globalStyles.rank_1_container
                                              }
                                            >
                                              <Rank_6 />
                                            </View>

                                            <Image
                                              source={{
                                                uri: slides[6]['image'],
                                              }}
                                              style={{
                                                width: 85.88,
                                                height: 122.66,
                                                resizeMode: 'contain',
                                              }}
                                            />
                                          </View>
                                        </View>
                                      </View>
                                    </TouchableOpacity>

                                    <TouchableOpacity>
                                      <View style={globalStyles.sliderItem}>
                                        <View
                                          style={
                                            globalStyles.titleCard_Container
                                          }
                                        >
                                          <View
                                            style={globalStyles.boxArt_size}
                                          >
                                            <View
                                              style={
                                                globalStyles.rank_1_container
                                              }
                                            >
                                              <Rank_7 />
                                            </View>

                                            <Image
                                              source={{
                                                uri: slides[7]['image'],
                                              }}
                                              style={{
                                                width: 85.88,
                                                height: 122.66,
                                                resizeMode: 'contain',
                                              }}
                                            />
                                          </View>
                                        </View>
                                      </View>
                                    </TouchableOpacity>

                                    <TouchableOpacity>
                                      <View style={globalStyles.sliderItem}>
                                        <View
                                          style={
                                            globalStyles.titleCard_Container
                                          }
                                        >
                                          <View
                                            style={globalStyles.boxArt_size}
                                          >
                                            <View
                                              style={
                                                globalStyles.rank_1_container
                                              }
                                            >
                                              <Rank_8 />
                                            </View>

                                            <Image
                                              source={{
                                                uri: slides[8]['image'],
                                              }}
                                              style={{
                                                width: 85.88,
                                                height: 122.66,
                                                resizeMode: 'contain',
                                              }}
                                            />
                                          </View>
                                        </View>
                                      </View>
                                    </TouchableOpacity>

                                    <TouchableOpacity>
                                      <View style={globalStyles.sliderItem}>
                                        <View
                                          style={
                                            globalStyles.titleCard_Container
                                          }
                                        >
                                          <View
                                            style={globalStyles.boxArt_size}
                                          >
                                            <View
                                              style={
                                                globalStyles.rank_1_container
                                              }
                                            >
                                              <Rank_9 />
                                            </View>

                                            <Image
                                              source={{
                                                uri: slides[9]['image'],
                                              }}
                                              style={{
                                                width: 85.88,
                                                height: 122.66,
                                                resizeMode: 'contain',
                                              }}
                                            />
                                          </View>
                                        </View>
                                      </View>
                                    </TouchableOpacity>

                                    <TouchableOpacity>
                                      <View style={globalStyles.sliderItem}>
                                        <View
                                          style={
                                            globalStyles.titleCard_Container
                                          }
                                        >
                                          <View
                                            style={globalStyles.boxArt_size}
                                          >
                                            <View
                                              style={
                                                globalStyles.rank_1_container
                                              }
                                            >
                                              <Rank_10 />
                                            </View>

                                            <Image
                                              source={{
                                                uri: slides[10]['image'],
                                              }}
                                              style={{
                                                width: 85.88,
                                                height: 122.66,
                                                resizeMode: 'contain',
                                              }}
                                            />
                                          </View>
                                        </View>
                                      </View>
                                    </TouchableOpacity>
                                  </ScrollView>
                                </View>
                              </View>
                            </View>
                          </View>
                        </View>
                      </View>
                    </View>

                    <HomeCard_1 />
                    {/* <View style={globalStyles.lolomoRow_title_card_1}>
                      <View style={globalStyles.rowHeader_ltr}>
                        <View style={globalStyles.rowTitle_ltr0}>
                          <Text style={globalStyles.row_header_title}>
                            Continue Watching
                          </Text>
                        </View>
                      </View>

                      <View style={globalStyles.rowContainer_title_card_1}>
                        <View style={globalStyles.ptrack_container_1}>
                          <View style={globalStyles.rowContent_slider_1}>
                            <View style={globalStyles.slider_1}>
                              <View style={globalStyles.sliderMask_showPeek}>
                                <View style={globalStyles.sliderContent}>
                                  <ScrollView
                                    pagingEnabled
                                    horizontal
                                    showsHorizontalScrollIndicator={false}
                                  >
                                    <TouchableOpacity>
                                      <View style={globalStyles.sliderItem1}>
                                        <View
                                          style={
                                            globalStyles.titleCard_Container1
                                          }
                                        >
                                          <View
                                            style={globalStyles.boxArt_size1}
                                          >
                                            <Image
                                              source={{
                                                uri: slides[11]['image'],
                                              }}
                                              style={{
                                                width: 171.75,
                                                height: 96.59,
                                                resizeMode: 'contain',
                                              }}
                                            />
                                          </View>
                                        </View>
                                      </View>
                                    </TouchableOpacity>

                                    <TouchableOpacity>
                                      <View style={globalStyles.sliderItem1}>
                                        <View
                                          style={
                                            globalStyles.titleCard_Container1
                                          }
                                        >
                                          <View
                                            style={globalStyles.boxArt_size1}
                                          >
                                            <Image
                                              source={{
                                                uri: slides[12]['image'],
                                              }}
                                              style={{
                                                width: 171.75,
                                                height: 96.59,
                                                resizeMode: 'contain',
                                              }}
                                            />
                                          </View>
                                        </View>
                                      </View>
                                    </TouchableOpacity>

                                    <TouchableOpacity>
                                      <View style={globalStyles.sliderItem1}>
                                        <View
                                          style={
                                            globalStyles.titleCard_Container1
                                          }
                                        >
                                          <View
                                            style={globalStyles.boxArt_size1}
                                          >
                                            <Image
                                              source={{
                                                uri: slides[13]['image'],
                                              }}
                                              style={{
                                                width: 171.75,
                                                height: 96.59,
                                                resizeMode: 'contain',
                                              }}
                                            />
                                          </View>
                                        </View>
                                      </View>
                                    </TouchableOpacity>

                                    <TouchableOpacity>
                                      <View style={globalStyles.sliderItem1}>
                                        <View
                                          style={
                                            globalStyles.titleCard_Container1
                                          }
                                        >
                                          <View
                                            style={globalStyles.boxArt_size1}
                                          >
                                            <Image
                                              source={{
                                                uri: slides[14]['image'],
                                              }}
                                              style={{
                                                width: 171.75,
                                                height: 96.59,
                                                resizeMode: 'contain',
                                              }}
                                            />
                                          </View>
                                        </View>
                                      </View>
                                    </TouchableOpacity>

                                    <TouchableOpacity>
                                      <View style={globalStyles.sliderItem1}>
                                        <View
                                          style={
                                            globalStyles.titleCard_Container1
                                          }
                                        >
                                          <View
                                            style={globalStyles.boxArt_size1}
                                          >
                                            <Image
                                              source={{
                                                uri: slides[15]['image'],
                                              }}
                                              style={{
                                                width: 171.75,
                                                height: 96.59,
                                                resizeMode: 'contain',
                                              }}
                                            />
                                          </View>
                                        </View>
                                      </View>
                                    </TouchableOpacity>

                                    <TouchableOpacity>
                                      <View style={globalStyles.sliderItem1}>
                                        <View
                                          style={
                                            globalStyles.titleCard_Container1
                                          }
                                        >
                                          <View
                                            style={globalStyles.boxArt_size1}
                                          >
                                            <Image
                                              source={{
                                                uri: slides[16]['image'],
                                              }}
                                              style={{
                                                width: 171.75,
                                                height: 96.59,
                                                resizeMode: 'contain',
                                              }}
                                            />
                                          </View>
                                        </View>
                                      </View>
                                    </TouchableOpacity>

                                    <TouchableOpacity>
                                      <View style={globalStyles.sliderItem1}>
                                        <View
                                          style={
                                            globalStyles.titleCard_Container1
                                          }
                                        >
                                          <View
                                            style={globalStyles.boxArt_size1}
                                          >
                                            <Image
                                              source={{
                                                uri: slides[17]['image'],
                                              }}
                                              style={{
                                                width: 171.75,
                                                height: 96.59,
                                                resizeMode: 'contain',
                                              }}
                                            />
                                          </View>
                                        </View>
                                      </View>
                                    </TouchableOpacity>

                                    <TouchableOpacity>
                                      <View style={globalStyles.sliderItem1}>
                                        <View
                                          style={
                                            globalStyles.titleCard_Container1
                                          }
                                        >
                                          <View
                                            style={globalStyles.boxArt_size1}
                                          >
                                            <Image
                                              source={{
                                                uri: slides[18]['image'],
                                              }}
                                              style={{
                                                width: 171.75,
                                                height: 96.59,
                                                resizeMode: 'contain',
                                              }}
                                            />
                                          </View>
                                        </View>
                                      </View>
                                    </TouchableOpacity>

                                    <TouchableOpacity>
                                      <View style={globalStyles.sliderItem1}>
                                        <View
                                          style={
                                            globalStyles.titleCard_Container1
                                          }
                                        >
                                          <View
                                            style={globalStyles.boxArt_size1}
                                          >
                                            <Image
                                              source={{
                                                uri: slides[19]['image'],
                                              }}
                                              style={{
                                                width: 171.75,
                                                height: 96.59,
                                                resizeMode: 'contain',
                                              }}
                                            />
                                          </View>
                                        </View>
                                      </View>
                                    </TouchableOpacity>

                                    <TouchableOpacity>
                                      <View style={globalStyles.sliderItem1}>
                                        <View
                                          style={
                                            globalStyles.titleCard_Container1
                                          }
                                        >
                                          <View
                                            style={globalStyles.boxArt_size1}
                                          >
                                            <Image
                                              source={{
                                                uri: slides[20]['image'],
                                              }}
                                              style={{
                                                width: 171.75,
                                                height: 96.59,
                                                resizeMode: 'contain',
                                              }}
                                            />
                                          </View>
                                        </View>
                                      </View>
                                    </TouchableOpacity>

                                    <TouchableOpacity>
                                      <View style={globalStyles.sliderItem1}>
                                        <View
                                          style={
                                            globalStyles.titleCard_Container1
                                          }
                                        >
                                          <View
                                            style={globalStyles.boxArt_size1}
                                          >
                                            <Image
                                              source={{
                                                uri: slides[21]['image'],
                                              }}
                                              style={{
                                                width: 171.75,
                                                height: 96.59,
                                                resizeMode: 'contain',
                                              }}
                                            />
                                          </View>
                                        </View>
                                      </View>
                                    </TouchableOpacity>

                                    <TouchableOpacity>
                                      <View style={globalStyles.sliderItem1}>
                                        <View
                                          style={
                                            globalStyles.titleCard_Container1
                                          }
                                        >
                                          <View
                                            style={globalStyles.boxArt_size1}
                                          >
                                            <Image
                                              source={{
                                                uri: slides[22]['image'],
                                              }}
                                              style={{
                                                width: 171.75,
                                                height: 96.59,
                                                resizeMode: 'contain',
                                              }}
                                            />
                                          </View>
                                        </View>
                                      </View>
                                    </TouchableOpacity>

                                    <TouchableOpacity>
                                      <View style={globalStyles.sliderItem1}>
                                        <View
                                          style={
                                            globalStyles.titleCard_Container1
                                          }
                                        >
                                          <View
                                            style={globalStyles.boxArt_size1}
                                          >
                                            <Image
                                              source={{
                                                uri: slides[23]['image'],
                                              }}
                                              style={{
                                                width: 171.75,
                                                height: 96.59,
                                                resizeMode: 'contain',
                                              }}
                                            />
                                          </View>
                                        </View>
                                      </View>
                                    </TouchableOpacity>

                                    <TouchableOpacity>
                                      <View style={globalStyles.sliderItem1}>
                                        <View
                                          style={
                                            globalStyles.titleCard_Container1
                                          }
                                        >
                                          <View
                                            style={globalStyles.boxArt_size1}
                                          >
                                            <Image
                                              source={{
                                                uri: slides[24]['image'],
                                              }}
                                              style={{
                                                width: 171.75,
                                                height: 96.59,
                                                resizeMode: 'contain',
                                              }}
                                            />
                                          </View>
                                        </View>
                                      </View>
                                    </TouchableOpacity>

                                    <TouchableOpacity>
                                      <View style={globalStyles.sliderItem1}>
                                        <View
                                          style={
                                            globalStyles.titleCard_Container1
                                          }
                                        >
                                          <View
                                            style={globalStyles.boxArt_size1}
                                          >
                                            <Image
                                              source={{
                                                uri: slides[25]['image'],
                                              }}
                                              style={{
                                                width: 171.75,
                                                height: 96.59,
                                                resizeMode: 'contain',
                                              }}
                                            />
                                          </View>
                                        </View>
                                      </View>
                                    </TouchableOpacity>

                                    <TouchableOpacity>
                                      <View style={globalStyles.sliderItem1}>
                                        <View
                                          style={
                                            globalStyles.titleCard_Container1
                                          }
                                        >
                                          <View
                                            style={globalStyles.boxArt_size1}
                                          >
                                            <Image
                                              source={{
                                                uri: slides[26]['image'],
                                              }}
                                              style={{
                                                width: 171.75,
                                                height: 96.59,
                                                resizeMode: 'contain',
                                              }}
                                            />
                                          </View>
                                        </View>
                                      </View>
                                    </TouchableOpacity>

                                    <TouchableOpacity>
                                      <View style={globalStyles.sliderItem1}>
                                        <View
                                          style={
                                            globalStyles.titleCard_Container1
                                          }
                                        >
                                          <View
                                            style={globalStyles.boxArt_size1}
                                          >
                                            <Image
                                              source={{
                                                uri: slides[27]['image'],
                                              }}
                                              style={{
                                                width: 171.75,
                                                height: 96.59,
                                                resizeMode: 'contain',
                                              }}
                                            />
                                          </View>
                                        </View>
                                      </View>
                                    </TouchableOpacity>

                                    <TouchableOpacity>
                                      <View style={globalStyles.sliderItem1}>
                                        <View
                                          style={
                                            globalStyles.titleCard_Container1
                                          }
                                        >
                                          <View
                                            style={globalStyles.boxArt_size1}
                                          >
                                            <Image
                                              source={{
                                                uri: slides[29]['image'],
                                              }}
                                              style={{
                                                width: 171.75,
                                                height: 96.59,
                                                resizeMode: 'contain',
                                              }}
                                            />
                                          </View>
                                        </View>
                                      </View>
                                    </TouchableOpacity>

                                    <TouchableOpacity>
                                      <View style={globalStyles.sliderItem1}>
                                        <View
                                          style={
                                            globalStyles.titleCard_Container1
                                          }
                                        >
                                          <View
                                            style={globalStyles.boxArt_size1}
                                          >
                                            <Image
                                              source={{
                                                uri: slides[30]['image'],
                                              }}
                                              style={{
                                                width: 171.75,
                                                height: 96.59,
                                                resizeMode: 'contain',
                                              }}
                                            />
                                          </View>
                                        </View>
                                      </View>
                                    </TouchableOpacity>

                                    <TouchableOpacity>
                                      <View style={globalStyles.sliderItem1}>
                                        <View
                                          style={
                                            globalStyles.titleCard_Container1
                                          }
                                        >
                                          <View
                                            style={globalStyles.boxArt_size1}
                                          >
                                            <Image
                                              source={{
                                                uri: slides[31]['image'],
                                              }}
                                              style={{
                                                width: 171.75,
                                                height: 96.59,
                                                resizeMode: 'contain',
                                              }}
                                            />
                                          </View>
                                        </View>
                                      </View>
                                    </TouchableOpacity>
                                  </ScrollView>
                                </View>
                              </View>
                            </View>
                          </View>
                        </View>
                      </View>
                    </View> */}

                    <HomeCard_2 />

                    {/* <View style={globalStyles.lolomoRow_title_card_2}>
                      <View style={globalStyles.rowHeader_ltr}>
                        <View style={globalStyles.rowTitle_ltr0}>
                          <Text style={globalStyles.row_header_title}>
                            Top 10 TV Movies in Nigeria Today
                          </Text>
                        </View>
                      </View>

                      <View style={globalStyles.rowContainer_title_card}>
                        <View style={globalStyles.ptrack_container}>
                          <View style={globalStyles.rowContent_slider}>
                            <View style={globalStyles.slider}>
                              <View style={globalStyles.sliderMask_showPeek}>
                                <View style={globalStyles.sliderContent}>
                                  <ScrollView
                                    pagingEnabled
                                    horizontal
                                    showsHorizontalScrollIndicator={false}
                                  >
                                    <TouchableOpacity>
                                      <View style={globalStyles.sliderItem}>
                                        <View
                                          style={
                                            globalStyles.titleCard_Container
                                          }
                                        >
                                          <View
                                            style={globalStyles.boxArt_size}
                                          >
                                            <View
                                              style={
                                                globalStyles.rank_1_container
                                              }
                                            >
                                              <Rank_1 />
                                            </View>

                                            <Image
                                              source={{
                                                uri: slides[0]['image'],
                                              }}
                                              style={{
                                                width: 85.88,
                                                height: 122.66,
                                                resizeMode: 'contain',
                                              }}
                                            />
                                          </View>
                                        </View>
                                      </View>
                                    </TouchableOpacity>

                                    <TouchableOpacity>
                                      <View style={globalStyles.sliderItem}>
                                        <View
                                          style={
                                            globalStyles.titleCard_Container
                                          }
                                        >
                                          <View
                                            style={globalStyles.boxArt_size}
                                          >
                                            <View
                                              style={
                                                globalStyles.rank_1_container
                                              }
                                            >
                                              <Rank_2 />
                                            </View>

                                            <Image
                                              source={{
                                                uri: slides[1]['image'],
                                              }}
                                              style={{
                                                width: 85.88,
                                                height: 122.66,
                                                resizeMode: 'contain',
                                              }}
                                            />
                                          </View>
                                        </View>
                                      </View>
                                    </TouchableOpacity>

                                    <TouchableOpacity>
                                      <View style={globalStyles.sliderItem}>
                                        <View
                                          style={
                                            globalStyles.titleCard_Container
                                          }
                                        >
                                          <View
                                            style={globalStyles.boxArt_size}
                                          >
                                            <View
                                              style={
                                                globalStyles.rank_1_container
                                              }
                                            >
                                              <Rank_3 />
                                            </View>

                                            <Image
                                              source={{
                                                uri: slides[3]['image'],
                                              }}
                                              style={{
                                                width: 85.88,
                                                height: 122.66,
                                                resizeMode: 'contain',
                                              }}
                                            />
                                          </View>
                                        </View>
                                      </View>
                                    </TouchableOpacity>

                                    <TouchableOpacity>
                                      <View style={globalStyles.sliderItem}>
                                        <View
                                          style={
                                            globalStyles.titleCard_Container
                                          }
                                        >
                                          <View
                                            style={globalStyles.boxArt_size}
                                          >
                                            <View
                                              style={
                                                globalStyles.rank_1_container
                                              }
                                            >
                                              <Rank_4 />
                                            </View>

                                            <Image
                                              source={{
                                                uri: slides[4]['image'],
                                              }}
                                              style={{
                                                width: 85.88,
                                                height: 122.66,
                                                resizeMode: 'contain',
                                              }}
                                            />
                                          </View>
                                        </View>
                                      </View>
                                    </TouchableOpacity>

                                    <TouchableOpacity>
                                      <View style={globalStyles.sliderItem}>
                                        <View
                                          style={
                                            globalStyles.titleCard_Container
                                          }
                                        >
                                          <View
                                            style={globalStyles.boxArt_size}
                                          >
                                            <View
                                              style={
                                                globalStyles.rank_1_container
                                              }
                                            >
                                              <Rank_5 />
                                            </View>

                                            <Image
                                              source={{
                                                uri: slides[5]['image'],
                                              }}
                                              style={{
                                                width: 85.88,
                                                height: 122.66,
                                                resizeMode: 'contain',
                                              }}
                                            />
                                          </View>
                                        </View>
                                      </View>
                                    </TouchableOpacity>

                                    <TouchableOpacity>
                                      <View style={globalStyles.sliderItem}>
                                        <View
                                          style={
                                            globalStyles.titleCard_Container
                                          }
                                        >
                                          <View
                                            style={globalStyles.boxArt_size}
                                          >
                                            <View
                                              style={
                                                globalStyles.rank_1_container
                                              }
                                            >
                                              <Rank_6 />
                                            </View>

                                            <Image
                                              source={{
                                                uri: slides[6]['image'],
                                              }}
                                              style={{
                                                width: 85.88,
                                                height: 122.66,
                                                resizeMode: 'contain',
                                              }}
                                            />
                                          </View>
                                        </View>
                                      </View>
                                    </TouchableOpacity>

                                    <TouchableOpacity>
                                      <View style={globalStyles.sliderItem}>
                                        <View
                                          style={
                                            globalStyles.titleCard_Container
                                          }
                                        >
                                          <View
                                            style={globalStyles.boxArt_size}
                                          >
                                            <View
                                              style={
                                                globalStyles.rank_1_container
                                              }
                                            >
                                              <Rank_7 />
                                            </View>

                                            <Image
                                              source={{
                                                uri: slides[7]['image'],
                                              }}
                                              style={{
                                                width: 85.88,
                                                height: 122.66,
                                                resizeMode: 'contain',
                                              }}
                                            />
                                          </View>
                                        </View>
                                      </View>
                                    </TouchableOpacity>

                                    <TouchableOpacity>
                                      <View style={globalStyles.sliderItem}>
                                        <View
                                          style={
                                            globalStyles.titleCard_Container
                                          }
                                        >
                                          <View
                                            style={globalStyles.boxArt_size}
                                          >
                                            <View
                                              style={
                                                globalStyles.rank_1_container
                                              }
                                            >
                                              <Rank_8 />
                                            </View>

                                            <Image
                                              source={{
                                                uri: slides[8]['image'],
                                              }}
                                              style={{
                                                width: 85.88,
                                                height: 122.66,
                                                resizeMode: 'contain',
                                              }}
                                            />
                                          </View>
                                        </View>
                                      </View>
                                    </TouchableOpacity>

                                    <TouchableOpacity>
                                      <View style={globalStyles.sliderItem}>
                                        <View
                                          style={
                                            globalStyles.titleCard_Container
                                          }
                                        >
                                          <View
                                            style={globalStyles.boxArt_size}
                                          >
                                            <View
                                              style={
                                                globalStyles.rank_1_container
                                              }
                                            >
                                              <Rank_9 />
                                            </View>

                                            <Image
                                              source={{
                                                uri: slides[9]['image'],
                                              }}
                                              style={{
                                                width: 85.88,
                                                height: 122.66,
                                                resizeMode: 'contain',
                                              }}
                                            />
                                          </View>
                                        </View>
                                      </View>
                                    </TouchableOpacity>

                                    <TouchableOpacity>
                                      <View style={globalStyles.sliderItem}>
                                        <View
                                          style={
                                            globalStyles.titleCard_Container
                                          }
                                        >
                                          <View
                                            style={globalStyles.boxArt_size}
                                          >
                                            <View
                                              style={
                                                globalStyles.rank_1_container
                                              }
                                            >
                                              <Rank_10 />
                                            </View>

                                            <Image
                                              source={{
                                                uri: slides[10]['image'],
                                              }}
                                              style={{
                                                width: 85.88,
                                                height: 122.66,
                                                resizeMode: 'contain',
                                              }}
                                            />
                                          </View>
                                        </View>
                                      </View>
                                    </TouchableOpacity>
                                  </ScrollView>
                                </View>
                              </View>
                            </View>
                          </View>
                        </View>
                      </View>
                    </View> */}


                    <View style={globalStyles.lolomoRow_title_card_1}>
                      <View style={globalStyles.rowHeader_ltr}>
                        <View style={globalStyles.rowTitle_ltr0}>

                        <CommonText title='TV Mysteries' />
                        
                        
                        </View>
                      </View>

                      <View style={globalStyles.rowContainer_title_card_1}>
                        <View style={globalStyles.ptrack_container_1}>
                          <View style={globalStyles.rowContent_slider_1}>
                            <View style={globalStyles.slider_1}>
                              <View style={globalStyles.sliderMask_showPeek}>
                                <View style={globalStyles.sliderContent}>
                                  <ScrollView
                                    pagingEnabled
                                    horizontal
                                    showsHorizontalScrollIndicator={false}
                                  >
                                    <TouchableOpacity>
                                      <View style={globalStyles.sliderItem1}>
                                        <View
                                          style={
                                            globalStyles.titleCard_Container1
                                          }
                                        >
                                          <View
                                            style={globalStyles.boxArt_size1}
                                          >
                                            <Image
                                              source={{
                                                uri: slides[11]['image'],
                                              }}
                                              style={{
                                                width: 171.75,
                                                height: 96.59,
                                                resizeMode: 'contain',
                                              }}
                                            />
                                          </View>
                                        </View>
                                      </View>
                                    </TouchableOpacity>

                                    <TouchableOpacity>
                                      <View style={globalStyles.sliderItem1}>
                                        <View
                                          style={
                                            globalStyles.titleCard_Container1
                                          }
                                        >
                                          <View
                                            style={globalStyles.boxArt_size1}
                                          >
                                            <Image
                                              source={{
                                                uri: slides[12]['image'],
                                              }}
                                              style={{
                                                width: 171.75,
                                                height: 96.59,
                                                resizeMode: 'contain',
                                              }}
                                            />
                                          </View>
                                        </View>
                                      </View>
                                    </TouchableOpacity>

                                    <TouchableOpacity>
                                      <View style={globalStyles.sliderItem1}>
                                        <View
                                          style={
                                            globalStyles.titleCard_Container1
                                          }
                                        >
                                          <View
                                            style={globalStyles.boxArt_size1}
                                          >
                                            <Image
                                              source={{
                                                uri: slides[13]['image'],
                                              }}
                                              style={{
                                                width: 171.75,
                                                height: 96.59,
                                                resizeMode: 'contain',
                                              }}
                                            />
                                          </View>
                                        </View>
                                      </View>
                                    </TouchableOpacity>

                                    <TouchableOpacity>
                                      <View style={globalStyles.sliderItem1}>
                                        <View
                                          style={
                                            globalStyles.titleCard_Container1
                                          }
                                        >
                                          <View
                                            style={globalStyles.boxArt_size1}
                                          >
                                            <Image
                                              source={{
                                                uri: slides[14]['image'],
                                              }}
                                              style={{
                                                width: 171.75,
                                                height: 96.59,
                                                resizeMode: 'contain',
                                              }}
                                            />
                                          </View>
                                        </View>
                                      </View>
                                    </TouchableOpacity>

                                    <TouchableOpacity>
                                      <View style={globalStyles.sliderItem1}>
                                        <View
                                          style={
                                            globalStyles.titleCard_Container1
                                          }
                                        >
                                          <View
                                            style={globalStyles.boxArt_size1}
                                          >
                                            <Image
                                              source={{
                                                uri: slides[15]['image'],
                                              }}
                                              style={{
                                                width: 171.75,
                                                height: 96.59,
                                                resizeMode: 'contain',
                                              }}
                                            />
                                          </View>
                                        </View>
                                      </View>
                                    </TouchableOpacity>

                                    <TouchableOpacity>
                                      <View style={globalStyles.sliderItem1}>
                                        <View
                                          style={
                                            globalStyles.titleCard_Container1
                                          }
                                        >
                                          <View
                                            style={globalStyles.boxArt_size1}
                                          >
                                            <Image
                                              source={{
                                                uri: slides[16]['image'],
                                              }}
                                              style={{
                                                width: 171.75,
                                                height: 96.59,
                                                resizeMode: 'contain',
                                              }}
                                            />
                                          </View>
                                        </View>
                                      </View>
                                    </TouchableOpacity>

                                    <TouchableOpacity>
                                      <View style={globalStyles.sliderItem1}>
                                        <View
                                          style={
                                            globalStyles.titleCard_Container1
                                          }
                                        >
                                          <View
                                            style={globalStyles.boxArt_size1}
                                          >
                                            <Image
                                              source={{
                                                uri: slides[17]['image'],
                                              }}
                                              style={{
                                                width: 171.75,
                                                height: 96.59,
                                                resizeMode: 'contain',
                                              }}
                                            />
                                          </View>
                                        </View>
                                      </View>
                                    </TouchableOpacity>

                                    <TouchableOpacity>
                                      <View style={globalStyles.sliderItem1}>
                                        <View
                                          style={
                                            globalStyles.titleCard_Container1
                                          }
                                        >
                                          <View
                                            style={globalStyles.boxArt_size1}
                                          >
                                            <Image
                                              source={{
                                                uri: slides[18]['image'],
                                              }}
                                              style={{
                                                width: 171.75,
                                                height: 96.59,
                                                resizeMode: 'contain',
                                              }}
                                            />
                                          </View>
                                        </View>
                                      </View>
                                    </TouchableOpacity>

                                    <TouchableOpacity>
                                      <View style={globalStyles.sliderItem1}>
                                        <View
                                          style={
                                            globalStyles.titleCard_Container1
                                          }
                                        >
                                          <View
                                            style={globalStyles.boxArt_size1}
                                          >
                                            <Image
                                              source={{
                                                uri: slides[19]['image'],
                                              }}
                                              style={{
                                                width: 171.75,
                                                height: 96.59,
                                                resizeMode: 'contain',
                                              }}
                                            />
                                          </View>
                                        </View>
                                      </View>
                                    </TouchableOpacity>

                                    <TouchableOpacity>
                                      <View style={globalStyles.sliderItem1}>
                                        <View
                                          style={
                                            globalStyles.titleCard_Container1
                                          }
                                        >
                                          <View
                                            style={globalStyles.boxArt_size1}
                                          >
                                            <Image
                                              source={{
                                                uri: slides[20]['image'],
                                              }}
                                              style={{
                                                width: 171.75,
                                                height: 96.59,
                                                resizeMode: 'contain',
                                              }}
                                            />
                                          </View>
                                        </View>
                                      </View>
                                    </TouchableOpacity>

                                    <TouchableOpacity>
                                      <View style={globalStyles.sliderItem1}>
                                        <View
                                          style={
                                            globalStyles.titleCard_Container1
                                          }
                                        >
                                          <View
                                            style={globalStyles.boxArt_size1}
                                          >
                                            <Image
                                              source={{
                                                uri: slides[21]['image'],
                                              }}
                                              style={{
                                                width: 171.75,
                                                height: 96.59,
                                                resizeMode: 'contain',
                                              }}
                                            />
                                          </View>
                                        </View>
                                      </View>
                                    </TouchableOpacity>

                                    <TouchableOpacity>
                                      <View style={globalStyles.sliderItem1}>
                                        <View
                                          style={
                                            globalStyles.titleCard_Container1
                                          }
                                        >
                                          <View
                                            style={globalStyles.boxArt_size1}
                                          >
                                            <Image
                                              source={{
                                                uri: slides[22]['image'],
                                              }}
                                              style={{
                                                width: 171.75,
                                                height: 96.59,
                                                resizeMode: 'contain',
                                              }}
                                            />
                                          </View>
                                        </View>
                                      </View>
                                    </TouchableOpacity>

                                    <TouchableOpacity>
                                      <View style={globalStyles.sliderItem1}>
                                        <View
                                          style={
                                            globalStyles.titleCard_Container1
                                          }
                                        >
                                          <View
                                            style={globalStyles.boxArt_size1}
                                          >
                                            <Image
                                              source={{
                                                uri: slides[23]['image'],
                                              }}
                                              style={{
                                                width: 171.75,
                                                height: 96.59,
                                                resizeMode: 'contain',
                                              }}
                                            />
                                          </View>
                                        </View>
                                      </View>
                                    </TouchableOpacity>

                                    <TouchableOpacity>
                                      <View style={globalStyles.sliderItem1}>
                                        <View
                                          style={
                                            globalStyles.titleCard_Container1
                                          }
                                        >
                                          <View
                                            style={globalStyles.boxArt_size1}
                                          >
                                            <Image
                                              source={{
                                                uri: slides[24]['image'],
                                              }}
                                              style={{
                                                width: 171.75,
                                                height: 96.59,
                                                resizeMode: 'contain',
                                              }}
                                            />
                                          </View>
                                        </View>
                                      </View>
                                    </TouchableOpacity>

                                    <TouchableOpacity>
                                      <View style={globalStyles.sliderItem1}>
                                        <View
                                          style={
                                            globalStyles.titleCard_Container1
                                          }
                                        >
                                          <View
                                            style={globalStyles.boxArt_size1}
                                          >
                                            <Image
                                              source={{
                                                uri: slides[25]['image'],
                                              }}
                                              style={{
                                                width: 171.75,
                                                height: 96.59,
                                                resizeMode: 'contain',
                                              }}
                                            />
                                          </View>
                                        </View>
                                      </View>
                                    </TouchableOpacity>

                                    <TouchableOpacity>
                                      <View style={globalStyles.sliderItem1}>
                                        <View
                                          style={
                                            globalStyles.titleCard_Container1
                                          }
                                        >
                                          <View
                                            style={globalStyles.boxArt_size1}
                                          >
                                            <Image
                                              source={{
                                                uri: slides[26]['image'],
                                              }}
                                              style={{
                                                width: 171.75,
                                                height: 96.59,
                                                resizeMode: 'contain',
                                              }}
                                            />
                                          </View>
                                        </View>
                                      </View>
                                    </TouchableOpacity>

                                    <TouchableOpacity>
                                      <View style={globalStyles.sliderItem1}>
                                        <View
                                          style={
                                            globalStyles.titleCard_Container1
                                          }
                                        >
                                          <View
                                            style={globalStyles.boxArt_size1}
                                          >
                                            <Image
                                              source={{
                                                uri: slides[27]['image'],
                                              }}
                                              style={{
                                                width: 171.75,
                                                height: 96.59,
                                                resizeMode: 'contain',
                                              }}
                                            />
                                          </View>
                                        </View>
                                      </View>
                                    </TouchableOpacity>

                                    <TouchableOpacity>
                                      <View style={globalStyles.sliderItem1}>
                                        <View
                                          style={
                                            globalStyles.titleCard_Container1
                                          }
                                        >
                                          <View
                                            style={globalStyles.boxArt_size1}
                                          >
                                            <Image
                                              source={{
                                                uri: slides[29]['image'],
                                              }}
                                              style={{
                                                width: 171.75,
                                                height: 96.59,
                                                resizeMode: 'contain',
                                              }}
                                            />
                                          </View>
                                        </View>
                                      </View>
                                    </TouchableOpacity>

                                    <TouchableOpacity>
                                      <View style={globalStyles.sliderItem1}>
                                        <View
                                          style={
                                            globalStyles.titleCard_Container1
                                          }
                                        >
                                          <View
                                            style={globalStyles.boxArt_size1}
                                          >
                                            <Image
                                              source={{
                                                uri: slides[30]['image'],
                                              }}
                                              style={{
                                                width: 171.75,
                                                height: 96.59,
                                                resizeMode: 'contain',
                                              }}
                                            />
                                          </View>
                                        </View>
                                      </View>
                                    </TouchableOpacity>

                                    <TouchableOpacity>
                                      <View style={globalStyles.sliderItem1}>
                                        <View
                                          style={
                                            globalStyles.titleCard_Container1
                                          }
                                        >
                                          <View
                                            style={globalStyles.boxArt_size1}
                                          >
                                            <Image
                                              source={{
                                                uri: slides[31]['image'],
                                              }}
                                              style={{
                                                width: 171.75,
                                                height: 96.59,
                                                resizeMode: 'contain',
                                              }}
                                            />
                                          </View>
                                        </View>
                                      </View>
                                    </TouchableOpacity>
                                  </ScrollView>
                                </View>
                              </View>
                            </View>
                          </View>
                        </View>
                      </View>
                    </View>

                    <View style={globalStyles.lolomoRow_title_card_1}>
                      <View style={globalStyles.rowHeader_ltr}>
                        <View style={globalStyles.rowTitle_ltr0}>
                          <Text style={globalStyles.row_header_title}>
                            Trending Now
                          </Text>
                        </View>
                      </View>

                      <View style={globalStyles.rowContainer_title_card_1}>
                        <View style={globalStyles.ptrack_container_1}>
                          <View style={globalStyles.rowContent_slider_1}>
                            <View style={globalStyles.slider_1}>
                              <View style={globalStyles.sliderMask_showPeek}>
                                <View style={globalStyles.sliderContent}>
                                  <ScrollView
                                    pagingEnabled
                                    horizontal
                                    showsHorizontalScrollIndicator={false}
                                  >
                                    <TouchableOpacity>
                                      <View style={globalStyles.sliderItem1}>
                                        <View
                                          style={
                                            globalStyles.titleCard_Container1
                                          }
                                        >
                                          <View
                                            style={globalStyles.boxArt_size1}
                                          >
                                            <Image
                                              source={{
                                                uri: slides[11]['image'],
                                              }}
                                              style={{
                                                width: 171.75,
                                                height: 96.59,
                                                resizeMode: 'contain',
                                              }}
                                            />
                                          </View>
                                        </View>
                                      </View>
                                    </TouchableOpacity>

                                    <TouchableOpacity>
                                      <View style={globalStyles.sliderItem1}>
                                        <View
                                          style={
                                            globalStyles.titleCard_Container1
                                          }
                                        >
                                          <View
                                            style={globalStyles.boxArt_size1}
                                          >
                                            <Image
                                              source={{
                                                uri: slides[12]['image'],
                                              }}
                                              style={{
                                                width: 171.75,
                                                height: 96.59,
                                                resizeMode: 'contain',
                                              }}
                                            />
                                          </View>
                                        </View>
                                      </View>
                                    </TouchableOpacity>

                                    <TouchableOpacity>
                                      <View style={globalStyles.sliderItem1}>
                                        <View
                                          style={
                                            globalStyles.titleCard_Container1
                                          }
                                        >
                                          <View
                                            style={globalStyles.boxArt_size1}
                                          >
                                            <Image
                                              source={{
                                                uri: slides[13]['image'],
                                              }}
                                              style={{
                                                width: 171.75,
                                                height: 96.59,
                                                resizeMode: 'contain',
                                              }}
                                            />
                                          </View>
                                        </View>
                                      </View>
                                    </TouchableOpacity>

                                    <TouchableOpacity>
                                      <View style={globalStyles.sliderItem1}>
                                        <View
                                          style={
                                            globalStyles.titleCard_Container1
                                          }
                                        >
                                          <View
                                            style={globalStyles.boxArt_size1}
                                          >
                                            <Image
                                              source={{
                                                uri: slides[14]['image'],
                                              }}
                                              style={{
                                                width: 171.75,
                                                height: 96.59,
                                                resizeMode: 'contain',
                                              }}
                                            />
                                          </View>
                                        </View>
                                      </View>
                                    </TouchableOpacity>

                                    <TouchableOpacity>
                                      <View style={globalStyles.sliderItem1}>
                                        <View
                                          style={
                                            globalStyles.titleCard_Container1
                                          }
                                        >
                                          <View
                                            style={globalStyles.boxArt_size1}
                                          >
                                            <Image
                                              source={{
                                                uri: slides[15]['image'],
                                              }}
                                              style={{
                                                width: 171.75,
                                                height: 96.59,
                                                resizeMode: 'contain',
                                              }}
                                            />
                                          </View>
                                        </View>
                                      </View>
                                    </TouchableOpacity>

                                    <TouchableOpacity>
                                      <View style={globalStyles.sliderItem1}>
                                        <View
                                          style={
                                            globalStyles.titleCard_Container1
                                          }
                                        >
                                          <View
                                            style={globalStyles.boxArt_size1}
                                          >
                                            <Image
                                              source={{
                                                uri: slides[16]['image'],
                                              }}
                                              style={{
                                                width: 171.75,
                                                height: 96.59,
                                                resizeMode: 'contain',
                                              }}
                                            />
                                          </View>
                                        </View>
                                      </View>
                                    </TouchableOpacity>

                                    <TouchableOpacity>
                                      <View style={globalStyles.sliderItem1}>
                                        <View
                                          style={
                                            globalStyles.titleCard_Container1
                                          }
                                        >
                                          <View
                                            style={globalStyles.boxArt_size1}
                                          >
                                            <Image
                                              source={{
                                                uri: slides[17]['image'],
                                              }}
                                              style={{
                                                width: 171.75,
                                                height: 96.59,
                                                resizeMode: 'contain',
                                              }}
                                            />
                                          </View>
                                        </View>
                                      </View>
                                    </TouchableOpacity>

                                    <TouchableOpacity>
                                      <View style={globalStyles.sliderItem1}>
                                        <View
                                          style={
                                            globalStyles.titleCard_Container1
                                          }
                                        >
                                          <View
                                            style={globalStyles.boxArt_size1}
                                          >
                                            <Image
                                              source={{
                                                uri: slides[18]['image'],
                                              }}
                                              style={{
                                                width: 171.75,
                                                height: 96.59,
                                                resizeMode: 'contain',
                                              }}
                                            />
                                          </View>
                                        </View>
                                      </View>
                                    </TouchableOpacity>

                                    <TouchableOpacity>
                                      <View style={globalStyles.sliderItem1}>
                                        <View
                                          style={
                                            globalStyles.titleCard_Container1
                                          }
                                        >
                                          <View
                                            style={globalStyles.boxArt_size1}
                                          >
                                            <Image
                                              source={{
                                                uri: slides[19]['image'],
                                              }}
                                              style={{
                                                width: 171.75,
                                                height: 96.59,
                                                resizeMode: 'contain',
                                              }}
                                            />
                                          </View>
                                        </View>
                                      </View>
                                    </TouchableOpacity>

                                    <TouchableOpacity>
                                      <View style={globalStyles.sliderItem1}>
                                        <View
                                          style={
                                            globalStyles.titleCard_Container1
                                          }
                                        >
                                          <View
                                            style={globalStyles.boxArt_size1}
                                          >
                                            <Image
                                              source={{
                                                uri: slides[20]['image'],
                                              }}
                                              style={{
                                                width: 171.75,
                                                height: 96.59,
                                                resizeMode: 'contain',
                                              }}
                                            />
                                          </View>
                                        </View>
                                      </View>
                                    </TouchableOpacity>

                                    <TouchableOpacity>
                                      <View style={globalStyles.sliderItem1}>
                                        <View
                                          style={
                                            globalStyles.titleCard_Container1
                                          }
                                        >
                                          <View
                                            style={globalStyles.boxArt_size1}
                                          >
                                            <Image
                                              source={{
                                                uri: slides[21]['image'],
                                              }}
                                              style={{
                                                width: 171.75,
                                                height: 96.59,
                                                resizeMode: 'contain',
                                              }}
                                            />
                                          </View>
                                        </View>
                                      </View>
                                    </TouchableOpacity>

                                    <TouchableOpacity>
                                      <View style={globalStyles.sliderItem1}>
                                        <View
                                          style={
                                            globalStyles.titleCard_Container1
                                          }
                                        >
                                          <View
                                            style={globalStyles.boxArt_size1}
                                          >
                                            <Image
                                              source={{
                                                uri: slides[22]['image'],
                                              }}
                                              style={{
                                                width: 171.75,
                                                height: 96.59,
                                                resizeMode: 'contain',
                                              }}
                                            />
                                          </View>
                                        </View>
                                      </View>
                                    </TouchableOpacity>

                                    <TouchableOpacity>
                                      <View style={globalStyles.sliderItem1}>
                                        <View
                                          style={
                                            globalStyles.titleCard_Container1
                                          }
                                        >
                                          <View
                                            style={globalStyles.boxArt_size1}
                                          >
                                            <Image
                                              source={{
                                                uri: slides[23]['image'],
                                              }}
                                              style={{
                                                width: 171.75,
                                                height: 96.59,
                                                resizeMode: 'contain',
                                              }}
                                            />
                                          </View>
                                        </View>
                                      </View>
                                    </TouchableOpacity>

                                    <TouchableOpacity>
                                      <View style={globalStyles.sliderItem1}>
                                        <View
                                          style={
                                            globalStyles.titleCard_Container1
                                          }
                                        >
                                          <View
                                            style={globalStyles.boxArt_size1}
                                          >
                                            <Image
                                              source={{
                                                uri: slides[24]['image'],
                                              }}
                                              style={{
                                                width: 171.75,
                                                height: 96.59,
                                                resizeMode: 'contain',
                                              }}
                                            />
                                          </View>
                                        </View>
                                      </View>
                                    </TouchableOpacity>

                                    <TouchableOpacity>
                                      <View style={globalStyles.sliderItem1}>
                                        <View
                                          style={
                                            globalStyles.titleCard_Container1
                                          }
                                        >
                                          <View
                                            style={globalStyles.boxArt_size1}
                                          >
                                            <Image
                                              source={{
                                                uri: slides[25]['image'],
                                              }}
                                              style={{
                                                width: 171.75,
                                                height: 96.59,
                                                resizeMode: 'contain',
                                              }}
                                            />
                                          </View>
                                        </View>
                                      </View>
                                    </TouchableOpacity>

                                    <TouchableOpacity>
                                      <View style={globalStyles.sliderItem1}>
                                        <View
                                          style={
                                            globalStyles.titleCard_Container1
                                          }
                                        >
                                          <View
                                            style={globalStyles.boxArt_size1}
                                          >
                                            <Image
                                              source={{
                                                uri: slides[26]['image'],
                                              }}
                                              style={{
                                                width: 171.75,
                                                height: 96.59,
                                                resizeMode: 'contain',
                                              }}
                                            />
                                          </View>
                                        </View>
                                      </View>
                                    </TouchableOpacity>

                                    <TouchableOpacity>
                                      <View style={globalStyles.sliderItem1}>
                                        <View
                                          style={
                                            globalStyles.titleCard_Container1
                                          }
                                        >
                                          <View
                                            style={globalStyles.boxArt_size1}
                                          >
                                            <Image
                                              source={{
                                                uri: slides[27]['image'],
                                              }}
                                              style={{
                                                width: 171.75,
                                                height: 96.59,
                                                resizeMode: 'contain',
                                              }}
                                            />
                                          </View>
                                        </View>
                                      </View>
                                    </TouchableOpacity>

                                    <TouchableOpacity>
                                      <View style={globalStyles.sliderItem1}>
                                        <View
                                          style={
                                            globalStyles.titleCard_Container1
                                          }
                                        >
                                          <View
                                            style={globalStyles.boxArt_size1}
                                          >
                                            <Image
                                              source={{
                                                uri: slides[29]['image'],
                                              }}
                                              style={{
                                                width: 171.75,
                                                height: 96.59,
                                                resizeMode: 'contain',
                                              }}
                                            />
                                          </View>
                                        </View>
                                      </View>
                                    </TouchableOpacity>

                                    <TouchableOpacity>
                                      <View style={globalStyles.sliderItem1}>
                                        <View
                                          style={
                                            globalStyles.titleCard_Container1
                                          }
                                        >
                                          <View
                                            style={globalStyles.boxArt_size1}
                                          >
                                            <Image
                                              source={{
                                                uri: slides[30]['image'],
                                              }}
                                              style={{
                                                width: 171.75,
                                                height: 96.59,
                                                resizeMode: 'contain',
                                              }}
                                            />
                                          </View>
                                        </View>
                                      </View>
                                    </TouchableOpacity>

                                    <TouchableOpacity>
                                      <View style={globalStyles.sliderItem1}>
                                        <View
                                          style={
                                            globalStyles.titleCard_Container1
                                          }
                                        >
                                          <View
                                            style={globalStyles.boxArt_size1}
                                          >
                                            <Image
                                              source={{
                                                uri: slides[31]['image'],
                                              }}
                                              style={{
                                                width: 171.75,
                                                height: 96.59,
                                                resizeMode: 'contain',
                                              }}
                                            />
                                          </View>
                                        </View>
                                      </View>
                                    </TouchableOpacity>
                                  </ScrollView>
                                </View>
                              </View>
                            </View>
                          </View>
                        </View>
                      </View>
                    </View>

                    <View style={globalStyles.lolomoRow_title_card_1}>
                      <View style={globalStyles.rowHeader_ltr}>
                        <View style={globalStyles.rowTitle_ltr0}>
                          <Text style={globalStyles.row_header_title}>
                            US TV Comedies
                          </Text>
                        </View>
                      </View>

                      <View style={globalStyles.rowContainer_title_card_1}>
                        <View style={globalStyles.ptrack_container_1}>
                          <View style={globalStyles.rowContent_slider_1}>
                            <View style={globalStyles.slider_1}>
                              <View style={globalStyles.sliderMask_showPeek}>
                                <View style={globalStyles.sliderContent}>
                                  <View style={globalStyles.sliderItem1}>
                                    <View
                                      style={globalStyles.titleCard_Container1}
                                    >
                                      <View style={globalStyles.boxArt_size1}>
                                        <Image
                                          source={netflix_pic}
                                          style={{
                                            width: 171.75,
                                            height: 96.59,
                                            resizeMode: 'contain',
                                          }}
                                        />
                                      </View>
                                    </View>
                                  </View>

                                  <View style={globalStyles.sliderItem1}>
                                    <View
                                      style={globalStyles.titleCard_Container1}
                                    >
                                      <View style={globalStyles.boxArt_size1}>
                                        <Image
                                          source={netflix_pic}
                                          style={{
                                            width: 171.75,
                                            height: 96.59,
                                            resizeMode: 'contain',
                                          }}
                                        />
                                      </View>
                                    </View>
                                  </View>
                                </View>
                              </View>
                            </View>
                          </View>
                        </View>
                      </View>
                    </View>

                    <View style={globalStyles.lolomoRow_title_card_1}>
                      <View style={globalStyles.rowHeader_ltr}>
                        <View style={globalStyles.rowTitle_ltr0}>
                          <Text style={globalStyles.row_header_title}>
                            Popular on Netflix
                          </Text>
                        </View>
                      </View>

                      <View style={globalStyles.rowContainer_title_card_1}>
                        <View style={globalStyles.ptrack_container_1}>
                          <View style={globalStyles.rowContent_slider_1}>
                            <View style={globalStyles.slider_1}>
                              <View style={globalStyles.sliderMask_showPeek}>
                                <View style={globalStyles.sliderContent}>
                                  <View style={globalStyles.sliderItem1}>
                                    <View
                                      style={globalStyles.titleCard_Container1}
                                    >
                                      <View style={globalStyles.boxArt_size1}>
                                        <Image
                                          source={netflix_pic}
                                          style={{
                                            width: 171.75,
                                            height: 96.59,
                                            resizeMode: 'contain',
                                          }}
                                        />
                                      </View>
                                    </View>
                                  </View>

                                  <View style={globalStyles.sliderItem1}>
                                    <View
                                      style={globalStyles.titleCard_Container1}
                                    >
                                      <View style={globalStyles.boxArt_size1}>
                                        <Image
                                          source={netflix_pic}
                                          style={{
                                            width: 171.75,
                                            height: 96.59,
                                            resizeMode: 'contain',
                                          }}
                                        />
                                      </View>
                                    </View>
                                  </View>
                                </View>
                              </View>
                            </View>
                          </View>
                        </View>
                      </View>
                    </View>

                    <View style={globalStyles.lolomoRow_title_card_1}>
                      <View style={globalStyles.rowHeader_ltr}>
                        <View style={globalStyles.rowTitle_ltr0}>
                          <Text style={globalStyles.row_header_title}>
                            Acclaimed Writers
                          </Text>
                        </View>
                      </View>

                      <View style={globalStyles.rowContainer_title_card_1}>
                        <View style={globalStyles.ptrack_container_1}>
                          <View style={globalStyles.rowContent_slider_1}>
                            <View style={globalStyles.slider_1}>
                              <View style={globalStyles.sliderMask_showPeek}>
                                <View style={globalStyles.sliderContent}>
                                  <View style={globalStyles.sliderItem1}>
                                    <View
                                      style={globalStyles.titleCard_Container1}
                                    >
                                      <View style={globalStyles.boxArt_size1}>
                                        <Image
                                          source={netflix_pic}
                                          style={{
                                            width: 171.75,
                                            height: 96.59,
                                            resizeMode: 'contain',
                                          }}
                                        />
                                      </View>
                                    </View>
                                  </View>

                                  <View style={globalStyles.sliderItem1}>
                                    <View
                                      style={globalStyles.titleCard_Container1}
                                    >
                                      <View style={globalStyles.boxArt_size1}>
                                        <Image
                                          source={netflix_pic}
                                          style={{
                                            width: 171.75,
                                            height: 96.59,
                                            resizeMode: 'contain',
                                          }}
                                        />
                                      </View>
                                    </View>
                                  </View>
                                </View>
                              </View>
                            </View>
                          </View>
                        </View>
                      </View>
                    </View>

                    <View style={globalStyles.lolomoRow_title_card_1}>
                      <View style={globalStyles.rowHeader_ltr}>
                        <View style={globalStyles.rowTitle_ltr0}>
                          <Text style={globalStyles.row_header_title}>
                            Get In On the Action
                          </Text>
                        </View>
                      </View>

                      <View style={globalStyles.rowContainer_title_card_1}>
                        <View style={globalStyles.ptrack_container_1}>
                          <View style={globalStyles.rowContent_slider_1}>
                            <View style={globalStyles.slider_1}>
                              <View style={globalStyles.sliderMask_showPeek}>
                                <View style={globalStyles.sliderContent}>
                                  <View style={globalStyles.sliderItem1}>
                                    <View
                                      style={globalStyles.titleCard_Container1}
                                    >
                                      <View style={globalStyles.boxArt_size1}>
                                        <Image
                                          source={netflix_pic}
                                          style={{
                                            width: 171.75,
                                            height: 96.59,
                                            resizeMode: 'contain',
                                          }}
                                        />
                                      </View>
                                    </View>
                                  </View>

                                  <View style={globalStyles.sliderItem1}>
                                    <View
                                      style={globalStyles.titleCard_Container1}
                                    >
                                      <View style={globalStyles.boxArt_size1}>
                                        <Image
                                          source={netflix_pic}
                                          style={{
                                            width: 171.75,
                                            height: 96.59,
                                            resizeMode: 'contain',
                                          }}
                                        />
                                      </View>
                                    </View>
                                  </View>
                                </View>
                              </View>
                            </View>
                          </View>
                        </View>
                      </View>
                    </View>

                    <View style={globalStyles.lolomoRow_title_card_1}>
                      <View style={globalStyles.rowHeader_ltr}>
                        <View style={globalStyles.rowTitle_ltr0}>
                          <Text style={globalStyles.row_header_title}>
                            New Releases
                          </Text>
                        </View>
                      </View>

                      <View style={globalStyles.rowContainer_title_card_1}>
                        <View style={globalStyles.ptrack_container_1}>
                          <View style={globalStyles.rowContent_slider_1}>
                            <View style={globalStyles.slider_1}>
                              <View style={globalStyles.sliderMask_showPeek}>
                                <View style={globalStyles.sliderContent}>
                                  <View style={globalStyles.sliderItem1}>
                                    <View
                                      style={globalStyles.titleCard_Container1}
                                    >
                                      <View style={globalStyles.boxArt_size1}>
                                        <Image
                                          source={netflix_pic}
                                          style={{
                                            width: 171.75,
                                            height: 96.59,
                                            resizeMode: 'contain',
                                          }}
                                        />
                                      </View>
                                    </View>
                                  </View>

                                  <View style={globalStyles.sliderItem1}>
                                    <View
                                      style={globalStyles.titleCard_Container1}
                                    >
                                      <View style={globalStyles.boxArt_size1}>
                                        <Image
                                          source={netflix_pic}
                                          style={{
                                            width: 171.75,
                                            height: 96.59,
                                            resizeMode: 'contain',
                                          }}
                                        />
                                      </View>
                                    </View>
                                  </View>
                                </View>
                              </View>
                            </View>
                          </View>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>

                <View style={globalStyles.contentInfo_footer}>
                  <View style={globalStyles.social_links}>
                    <View style={globalStyles.social_links_icon}>
                      <TouchableOpacity>
                        <View style={globalStyles.social_icon_container}>
                          <Facebook style={globalStyles.facebook} />
                        </View>
                      </TouchableOpacity>
                    </View>

                    <View style={globalStyles.social_links_icon}>
                      <TouchableOpacity>
                        <View style={globalStyles.social_icon_container}>
                          <Instagram style={globalStyles.facebook} />
                        </View>
                      </TouchableOpacity>
                    </View>

                    <View style={globalStyles.social_links_icon}>
                      <TouchableOpacity>
                        <View style={globalStyles.social_icon_container}>
                          <Youtube style={globalStyles.facebook} />
                        </View>
                      </TouchableOpacity>
                    </View>
                  </View>

                  <View style={globalStyles.social_link_list}>
                    <View style={globalStyles.member_footer_link_wrapper}>
                      <View style={globalStyles.member_footer_links}>
                        <Text style={globalStyles.member_footer_link_text}>
                          Audio Description
                        </Text>
                      </View>

                      <View style={globalStyles.member_footer_links}>
                        <Text style={globalStyles.member_footer_link_text}>
                          Help Center
                        </Text>
                      </View>
                    </View>

                    <View style={globalStyles.member_footer_link_wrapper}>
                      <View style={globalStyles.member_footer_links}>
                        <Text style={globalStyles.member_footer_link_text}>
                          Gift Cards
                        </Text>
                      </View>

                      <View style={globalStyles.member_footer_links}>
                        <Text style={globalStyles.member_footer_link_text}>
                          Media Center
                        </Text>
                      </View>
                    </View>

                    <View style={globalStyles.member_footer_link_wrapper}>
                      <View style={globalStyles.member_footer_links}>
                        <Text style={globalStyles.member_footer_link_text}>
                          Investor Relations
                        </Text>
                      </View>

                      <View style={globalStyles.member_footer_links}>
                        <Text style={globalStyles.member_footer_link_text}>
                          Jobs
                        </Text>
                      </View>
                    </View>

                    <View style={globalStyles.member_footer_link_wrapper}>
                      <View style={globalStyles.member_footer_links}>
                        <Text style={globalStyles.member_footer_link_text}>
                          Terms of Use
                        </Text>
                      </View>

                      <View style={globalStyles.member_footer_links}>
                        <Text style={globalStyles.member_footer_link_text}>
                          Privacy
                        </Text>
                      </View>
                    </View>

                    <View style={globalStyles.member_footer_link_wrapper}>
                      <View style={globalStyles.member_footer_links}>
                        <Text style={globalStyles.member_footer_link_text}>
                          Legal Notices
                        </Text>
                      </View>

                      <View style={globalStyles.member_footer_links}>
                        <Text style={globalStyles.member_footer_link_text}>
                          Cookie Preferences
                        </Text>
                      </View>
                    </View>

                    <View style={globalStyles.member_footer_link_wrapper}>
                      <View style={globalStyles.member_footer_links}>
                        <Text style={globalStyles.member_footer_link_text}>
                          Corporate Information
                        </Text>
                      </View>

                      <View style={globalStyles.member_footer_links}>
                        <Text style={globalStyles.member_footer_link_text}>
                          Contact Us
                        </Text>
                      </View>
                    </View>

                    <View style={globalStyles.member_footer_service}>
                      <TouchableOpacity>
                        <View style={globalStyles.member_footer_button}>
                          <Text style={globalStyles.member_footer_btn}>
                            Service Code
                          </Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
