import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
  browse_sub_menu_list: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 260,
    backgroundColor: 'rgba(0,0,0,.9)',
    borderWidth: 1,
    borderColor: 'hsla(0,0%,100%,.15)',
    position: 'absolute',
    top: 71,
    opacity: 1,
    zIndex: 1,
  },

  browse_sub_menu_line: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#ffffff',
    width: 259,
  },

  browse_sub_menu_item: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 260,
    height: 50,
  },

  browse_sub_menu_icon: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: -12,
  },
});
