import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
  notification_container: {
    alignItems: 'center',
    justifyContent: 'center',
    // width: 408,
    width: 318,
    height: 387,
    backgroundColor: 'rgba(0,0,0,.9)',
    borderWidth: 1,
    borderColor: 'hsla(0,0%,100%,.15)',
    position: 'absolute',
    top: 71,
    zIndex: 1,
  },

  browse_sub_menu_line: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#ffffff',
    width: 317,
  },

  notification: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: 340,
    borderBottomWidth: 1,
    borderBottomColor: 'hsla(0,0%,100%,.15)',
    // width: 408,
  },

  notification_content: {
    alignItems: 'center',
    justifyContent: 'center',
    // width: 408,
  },

  image_text_notification: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    // width: 408,
  },

  elemnent_image_text_notification: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    // width: 144,
  },

  elemnent_image_text_notification1: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    // width: 264,
  },
});
