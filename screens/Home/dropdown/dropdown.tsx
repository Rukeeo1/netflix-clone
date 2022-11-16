import React from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import CommonText from '../../../shared/CommonText';
import NetflixBtn from '../../../shared/NetflixBtn';
import { globalStyles } from './global';
import Hawkins from '../../../assets/svgs/hawkins-upload-emptystate.svg';
import ProfileTransfer from '../../../assets/svgs/profile-transfer-upload-emptystate.svg';
import HawkinsAccount from '../../../assets/svgs/hawkins-account-upload-emptystate.svg';
import HawkinsStandard from '../../../assets/svgs/hawkins-standard-upload-emptystate.svg';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCaretUp } from '@fortawesome/free-solid-svg-icons';

interface Props {}

export const DropdownMenu = (props: Props) => {
  return (
    <View style={globalStyles.account_dropdown_menu}>
      <View style={globalStyles.caret_icon}>
        <FontAwesomeIcon
          icon={faCaretUp}
          size={14}
          style={{ color: 'white' }}
        />
      </View>

      <View style={globalStyles.ptrack_content}>
        <View style={globalStyles.ptrack_sub_menu_list}>
          <TouchableOpacity>
            <View style={globalStyles.sub_menu_item}>
              <View style={globalStyles.profile_link}>
                <View style={globalStyles.avatar_wrapper}>
                  <Image
                    source={{
                      uri: 'https://occ-0-2705-2706.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdYJV5wt63AcxNaDoqDXUhqZb55oN5Dxt1m-Zdn_z5rn_hIq9m8dA8JB2xdcPmrY3yXnlVWYKPXnOrbv2QN4aEVU28dESJg.png?r=1d4',
                    }}
                    style={{
                      width: 32,
                      height: 32,
                      marginRight: 10,
                      resizeMode: 'contain',
                    }}
                  />
                </View>

                <View style={globalStyles.profile_name}>
                  <CommonText
                    title='Valyria'
                    titleStyle={{ color: '#ffffff', fontSize: 13 }}
                  />
                </View>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={globalStyles.sub_menu_item}>
              <View style={globalStyles.profile_link}>
                <View style={globalStyles.avatar_wrapper}>
                  <Image
                    source={{
                      uri: 'https://occ-0-3934-1007.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABR7lLPqedvGk0KTfGtM5RT4dsxADNl_ZKzUxzRw7VUAxm5kGCH9-oSOGkD1UObA6Py7PQrBY00LpSZX5fjcBip15x45Arr4.png?r=11f',
                    }}
                    style={{
                      width: 32,
                      height: 32,
                      marginRight: 10,
                      resizeMode: 'contain',
                    }}
                  />
                </View>

                <View style={globalStyles.profile_name}>
                  <CommonText
                    title='Kids'
                    titleStyle={{ color: '#ffffff', fontSize: 13 }}
                  />
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>

        <View style={globalStyles.ptrack_sub_menu_list2}>
          <TouchableOpacity>
            <View style={globalStyles.sub_menu_item2}>
              <NetflixBtn
                text='Kids'
                textStyle={{ color: '#ffffff', fontSize: 13 }}
              />
            </View>
          </TouchableOpacity>
        </View>

        <View style={globalStyles.account_links}>
          <TouchableOpacity>
            <View style={globalStyles.sub_menu_item}>
              <View style={globalStyles.sub_menu_link_icon}>
                <View style={globalStyles.hawkins_icon}>
                  <Hawkins />
                </View>

                <CommonText
                  title='Manage Profiles'
                  titleStyle={{ fontSize: 13, color: '#ffffff' }}
                />
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={globalStyles.sub_menu_item}>
              <View style={globalStyles.sub_menu_link_icon}>
                <View style={globalStyles.hawkins_icon}>
                  <ProfileTransfer />
                </View>

                <CommonText
                  title='Transfer Profile'
                  titleStyle={{ fontSize: 13, color: '#ffffff' }}
                />
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={globalStyles.sub_menu_item}>
              <View style={globalStyles.sub_menu_link_icon}>
                <View style={globalStyles.hawkins_icon}>
                  <HawkinsAccount />
                </View>

                <CommonText
                  title='Account'
                  titleStyle={{ fontSize: 13, color: '#ffffff' }}
                />
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={globalStyles.sub_menu_item}>
              <View style={globalStyles.sub_menu_link_icon}>
                <View style={globalStyles.hawkins_icon}>
                  <HawkinsStandard />
                </View>

                <CommonText
                  title='Help Center'
                  titleStyle={{ fontSize: 13, color: '#ffffff' }}
                />
              </View>
            </View>
          </TouchableOpacity>
        </View>

        <View style={globalStyles.signout_links}>
          <TouchableOpacity>
            <View style={globalStyles.sub_menu_item_out}>
              <CommonText
                title='Sign out of Netflix'
                titleStyle={{ color: '#ffffff', fontSize: 13 }}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
