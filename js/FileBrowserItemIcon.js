import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Constants } from 'expo';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

class FileBrowserItemIcon extends React.Component {
  render() {
    const { isDir } = this.props;

    var IconElement;
    if (isDir) {
      IconElement = () => (
        <FontAwesomeIcon
          name={ 'folder' }
          size={ 38 }
          color={ '#32aeca' }
          style={ styles.itemIconDir }
        />
      );
    }
    else {
      IconElement = () => (
        <FontAwesomeIcon
          name={ 'file' }
          size={ 35 }
          color={ '#ddd' }
          style={ styles.itemIconFile }
        />
      );
    }

    return (
      <View style={styles.itemIcon}>
        <IconElement />
      </View>
    );
  }
}

export default FileBrowserItemIcon;

const styles = StyleSheet.create({
  itemIcon: {
    width: 40,
  },
  itemIconDir: {
    top: 4,
    left: -2,
  },
  itemIconFile: {
    top: 5,
  },
});
