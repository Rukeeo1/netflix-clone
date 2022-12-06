import React, { useState  } from 'react';
import { faBell, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import NetflixSvg from '../assets/svgs/netflix-upload-emptystate.svg';
import profile_logo from '../assets/images/profile_logo.png';
import { StyleSheet, Image, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { DropdownMenu } from "../screens/Home/dropdown/dropdown";
import { Notification } from "../screens/Home/Notification/Notification";
import { Browse } from "../screens/Home/browse/browse";

interface Props {
  title: string;
}

export default function Header(props: Props) {
  const [browse, setBrowse] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);
  const [notices, setNotices] = useState(false);

  return (
    <View style={styles.pinning_header}>
      <View style={styles.pinning_header_container}>
        <View style={styles.main_header_menu_navigation}>
          <View style={styles.main_netflix_logo_content}>
            <View style={styles.svg_nfLogo}>
              <NetflixSvg style={styles.netflix_logo} />
            </View>

            <TouchableOpacity onPress={() => setBrowse(!browse)}>
              <View style={styles.tabbed_primary_navigation}>
                <View style={styles.tabbed_primary_browse}>
                  <Text style={styles.tabbed_primary_browse_text}>Browse</Text>
                </View>

                <FontAwesomeIcon
                  icon={faCaretDown}
                  size={16}
                  style={styles.faUserIcon}
                />
              </View>
            </TouchableOpacity>

            {browse && <Browse />}
          </View>

          <View style={styles.secondary_navigation}>
            <View style={styles.nav_element}></View>
            <View style={styles.nav_element_notification}>
              <View style={styles.nav_span_notification}>
                <TouchableOpacity onPress={() => setNotices(!notices)}>
                  <View style={styles.nav_notification_menu}>
                    <FontAwesomeIcon
                      icon={faBell}
                      size={24}
                      style={styles.faUserBell}
                    />
                  </View>
                </TouchableOpacity>
              </View>
            </View>

            {notices && <Notification />}

            <View style={styles.nav_element_blue_icon}>
              <View style={styles.nav_account_menu_item}>
                <View style={styles.nav_account_dropdown_button}>
                  <TouchableOpacity
                    onPress={() => setOpenProfile(!openProfile)}
                  >
                    <View style={styles.nav_account_profile_link}>
                      <Image
                        source={profile_logo}
                        style={{
                          width: 32,
                          height: 32,
                          resizeMode: 'contain',
                        }}
                      />
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            {openProfile && <DropdownMenu />}
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  pinning_header: {
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
    backgroundColor: '#000',
  },

  pinning_header_container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 375,
    height: 41,
  },

  main_header_menu_navigation: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 375,
    paddingHorizontal: 15,
    fontSize: 19.2,
    position: 'relative',
    backgroundColor: 'transparent',
  },

  main_netflix_logo_content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '50%',
  },

  svg_nfLogo: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 75,
    height: 45,
    marginLeft: '3%',
  },

  netflix_logo: {
    height: 20,
    paddingTop: 12,
    width: 75,
  },

  tabbed_primary_navigation: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 64.25,
  },

  tabbed_primary_browse: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  tabbed_primary_browse_text: {
    color: '#fff',
    fontSize: 9,
  },

  faUserIcon: {
    color: '#fff',
    marginLeft: 4,
  },

  secondary_navigation: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 88,
  },

  nav_element: {},

  nav_element_notification: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 36,
    height: '100%',
    color: '#fff',
    marginRight: 10,
    fontSize: 19.2,
  },

  nav_span_notification: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 36,
  },

  nav_notification_menu: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 36,
    height: '100%',
    paddingTop: 2,
    paddingHorizontal: 6,
    paddingBottom: 3,
    marginTop: 3,
  },

  netflix_bell: {
    width: 24,
    height: 24,
  },

  faUserBell: {
    color: '#fff',
  },

  nav_element_blue_icon: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 32,
  },

  nav_account_menu_item: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 32,
  },

  nav_account_dropdown_button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 32,
  },

  nav_account_profile_link: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 32,
  },
});
