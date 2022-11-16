import React from 'react';
import {
  Image,
  Modal,
  ScrollView,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import { globalStyles } from './global';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCaretUp } from '@fortawesome/free-solid-svg-icons';
import CommonText from '../../../shared/CommonText';

interface Props {}

export const Notification = (props: Props) => {
  return (
    <View style={globalStyles.notification_container}>
      <View style={globalStyles.browse_sub_menu_line}></View>
      <TouchableOpacity>
        <View style={globalStyles.notification}>
          <View style={globalStyles.notification_content}>
            <View style={globalStyles.image_text_notification}>
              <View style={globalStyles.elemnent_image_text_notification}>
                <Image
                  source={{
                    uri: 'https://dnm.nflximg.net/api/v6/kvDymu0eXRyicIuSUzvRrxrm5dU/AAAABcXX0-mVS5bypgKiX0K836oTg96GgFQ78UJhEj7yQwtEktQDyMaZ_Dia8vmEwoafaHBARZsq3pVZJWyvZP8uH7IyvjLOTnHX4YvgZBOU5TOHHzvy0Ei79-z5hL-gziUOLzGHD0_ZeXddc48.jpg?r=ba8',
                  }}
                  style={{
                    width: 112,
                    height: 63,
                    resizeMode: 'contain',
                  }}
                />
              </View>

              <View style={globalStyles.elemnent_image_text_notification1}>
                <View>
                  <CommonText
                    title='New Arrival'
                    titleStyle={{ color: '#cccccc', fontSize: 16 }}
                  />
                  <CommonText
                    title='From Scratch'
                    titleStyle={{ color: '#cccccc', fontSize: 16 }}
                  />

                  <CommonText
                    title='2 days ago'
                    titleStyle={{ color: '#808080', fontSize: 12 }}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={globalStyles.notification}>
          <View style={globalStyles.notification_content}>
            <View style={globalStyles.image_text_notification}>
              <View style={globalStyles.elemnent_image_text_notification}>
                <Image
                  source={{
                    uri: 'https://dnm.nflximg.net/api/v6/kvDymu0eXRyicIuSUzvRrxrm5dU/AAAABcXX0-mVS5bypgKiX0K836oTg96GgFQ78UJhEj7yQwtEktQDyMaZ_Dia8vmEwoafaHBARZsq3pVZJWyvZP8uH7IyvjLOTnHX4YvgZBOU5TOHHzvy0Ei79-z5hL-gziUOLzGHD0_ZeXddc48.jpg?r=ba8',
                  }}
                  style={{
                    width: 112,
                    height: 63,
                    resizeMode: 'contain',
                  }}
                />
              </View>

              <View style={globalStyles.elemnent_image_text_notification1}>
                <View>
                  <CommonText
                    title='New Arrival'
                    titleStyle={{ color: '#cccccc', fontSize: 16 }}
                  />
                  <CommonText
                    title='From Scratch'
                    titleStyle={{ color: '#cccccc', fontSize: 16 }}
                  />

                  <CommonText
                    title='2 days ago'
                    titleStyle={{ color: '#808080', fontSize: 12 }}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={globalStyles.notification}>
          <View style={globalStyles.notification_content}>
            <View style={globalStyles.image_text_notification}>
              <View style={globalStyles.elemnent_image_text_notification}>
                <Image
                  source={{
                    uri: 'https://dnm.nflximg.net/api/v6/kvDymu0eXRyicIuSUzvRrxrm5dU/AAAABcXX0-mVS5bypgKiX0K836oTg96GgFQ78UJhEj7yQwtEktQDyMaZ_Dia8vmEwoafaHBARZsq3pVZJWyvZP8uH7IyvjLOTnHX4YvgZBOU5TOHHzvy0Ei79-z5hL-gziUOLzGHD0_ZeXddc48.jpg?r=ba8',
                  }}
                  style={{
                    width: 112,
                    height: 63,
                    resizeMode: 'contain',
                  }}
                />
              </View>

              <View style={globalStyles.elemnent_image_text_notification1}>
                <View>
                  <CommonText
                    title='New Arrival'
                    titleStyle={{ color: '#cccccc', fontSize: 16 }}
                  />
                  <CommonText
                    title='From Scratch'
                    titleStyle={{ color: '#cccccc', fontSize: 16 }}
                  />

                  <CommonText
                    title='2 days ago'
                    titleStyle={{ color: '#808080', fontSize: 12 }}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={globalStyles.notification}>
          <View style={globalStyles.notification_content}>
            <View style={globalStyles.image_text_notification}>
              <View style={globalStyles.elemnent_image_text_notification}>
                <Image
                  source={{
                    uri: 'https://dnm.nflximg.net/api/v6/kvDymu0eXRyicIuSUzvRrxrm5dU/AAAABcXX0-mVS5bypgKiX0K836oTg96GgFQ78UJhEj7yQwtEktQDyMaZ_Dia8vmEwoafaHBARZsq3pVZJWyvZP8uH7IyvjLOTnHX4YvgZBOU5TOHHzvy0Ei79-z5hL-gziUOLzGHD0_ZeXddc48.jpg?r=ba8',
                  }}
                  style={{
                    width: 112,
                    height: 63,
                    resizeMode: 'contain',
                  }}
                />
              </View>

              <View style={globalStyles.elemnent_image_text_notification1}>
                <View>
                  <CommonText
                    title='New Arrival'
                    titleStyle={{ color: '#cccccc', fontSize: 16 }}
                  />
                  <CommonText
                    title='From Scratch'
                    titleStyle={{ color: '#cccccc', fontSize: 16 }}
                  />

                  <CommonText
                    title='2 days ago'
                    titleStyle={{ color: '#808080', fontSize: 12 }}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};
