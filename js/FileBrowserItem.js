import React from 'react';
import { StyleSheet, TouchableOpacity, SafeAreaView, View, Text } from 'react-native';
import { Constants } from 'expo';
import FileBrowserItemIcon from './FileBrowserItemIcon';

class FileBrowserItem extends React.Component {
  render() {
    const { navigation, baseUrl, apiUrl, remainUrl, isDir } = this.props;
    const url = remainUrl ? `${baseUrl}/${apiUrl}/${remainUrl}` : `${baseUrl}/${apiUrl}`;

    console.log( `FileBrowserItem.remainUrl: [${ isDir ? 'd' : '-' }] ${remainUrl}` );

    return (
      <TouchableOpacity
        onPress={() => {
          console.log(`  touched: ${this.props.name}`);
          console.log(`    isDir: ${isDir}`);
          console.log(`remainUrl: ${remainUrl}`);
          { isDir && navigation.navigate('FilesFileBrowser', { openUrl: remainUrl }) }
        }}
      >
        <SafeAreaView
          style={styles.itemContainer}
          forceInset={{ vertical: 'never' }}
        >
          <View style={styles.item}>
            <FileBrowserItemIcon isDir={this.props.isDir} />
            <View style={styles.itemText}>
              <Text style={styles.title}>
                {this.props.name}
              </Text>
              <Text style={styles.description}>
                {this.props.description}
              </Text>
            </View>
          </View>
        </SafeAreaView>
      </TouchableOpacity>
    );
  }
}

export default FileBrowserItem;

const styles = StyleSheet.create({
  item: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    flexDirection: 'row',
  },
  itemText: {
    marginLeft: 10,
  },
  itemContainer: {
    backgroundColor: '#fff',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#ddd',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#444',
  },
  description: {
    fontSize: 13,
    color: '#999',
  },
});

