import React from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { globalStyles } from './global';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCaretUp } from '@fortawesome/free-solid-svg-icons';
import CommonText from '../../../shared/CommonText';

interface Props {}

export const Browse = (props: Props) => {
  return (
    <View style={globalStyles.browse_sub_menu_list}>
      <View style={globalStyles.browse_sub_menu_icon}>
        <FontAwesomeIcon
          icon={faCaretUp}
          size={14}
          style={{ color: 'white' }}
        />
      </View>
      <View style={globalStyles.browse_sub_menu_line}></View>
      <TouchableOpacity>
        <View style={globalStyles.browse_sub_menu_item}>
          <CommonText
            title='Home'
            titleStyle={{ color: '#e5e5e5', fontSize: 13 }}
          />
        </View>
      </TouchableOpacity>

      <TouchableOpacity>
        <View style={globalStyles.browse_sub_menu_item}>
          <CommonText
            title='TV Shows'
            titleStyle={{ color: '#e5e5e5', fontSize: 13 }}
          />
        </View>
      </TouchableOpacity>

      <TouchableOpacity>
        <View style={globalStyles.browse_sub_menu_item}>
          <CommonText
            title='Movies'
            titleStyle={{ color: '#e5e5e5', fontSize: 13 }}
          />
        </View>
      </TouchableOpacity>

      <TouchableOpacity>
        <View style={globalStyles.browse_sub_menu_item}>
          <CommonText
            title='New & Popular'
            titleStyle={{ color: '#e5e5e5', fontSize: 13 }}
          />
        </View>
      </TouchableOpacity>

      <TouchableOpacity>
        <View style={globalStyles.browse_sub_menu_item}>
          <CommonText
            title='My List'
            titleStyle={{ color: '#e5e5e5', fontSize: 13 }}
          />
        </View>
      </TouchableOpacity>

      <TouchableOpacity>
        <View style={globalStyles.browse_sub_menu_item}>
          <CommonText
            title='Browse by Language'
            titleStyle={{ color: '#e5e5e5', fontSize: 13 }}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};
