import React from 'react';
import { StatusBar, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Constants } from 'expo';

import Banner from './Banner';
import FileBrowserItem from './FileBrowserItem';

class FileBrowser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      files: [],
      dirBasename: undefined,
      isFetched: false,
    };
  }

  componentDidMount() {
    const { baseUrl, apiUrl, remainUrl } = this.props;
    const url = remainUrl ? `${baseUrl}/${apiUrl}/${remainUrl}` : `${baseUrl}/${apiUrl}`;

    this.setState({
      files: [],
      dirBasename: undefined,
      fetched: false,
    });
    console.log(`fetch.url: ${url}`);

    fetch( url, { method: 'get' } )
      .then( (response) => response.json() )
      .then( (responseJson) => {
        this.setState({
          files: responseJson.files,
          dirBasename: responseJson.dirBasename,
          isFetched: true,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  // http://busypeoples.github.io/post/react-component-lifecycle/
  componentWillReceiveProps(nextProps) {
    const { navigation, baseUrl, apiUrl, remainUrl, bannerLabel } = nextProps;
    const { params } = nextProps.navigation.state;

    if ( params && params.openUrl ) {
      console.log( `remainUrl: ${remainUrl}, openUrl: ${params.openUrl}` );
      const url = params.openUrl ? `${baseUrl}/${apiUrl}/${params.openUrl}` : `${baseUrl}/${apiUrl}`;

      this.setState({
        files: [],
        dirBasename: undefined,
        fetched: false,
      });
      console.log(`fetch.url: ${url}`);
      fetch( url, { method: 'get' } )
        .then( (response) => response.json() )
        .then( (responseJson) => {
          this.setState({
            files: responseJson.files,
            dirBasename: responseJson.dirBasename,
            fetched: true,
          });
        })
        .catch((error) => {
          console.error(error);
        });
      }
    }

  render() {
    const { navigation, baseUrl, apiUrl, remainUrl, bannerLabel } = this.props;
    const { files, dirBasename, isFetched } = this.state;
    const url = remainUrl ? `${baseUrl}/${apiUrl}/${remainUrl}` : `${baseUrl}/${apiUrl}`;

    if (!isFetched) {
      return (
        <View style={{ flex: 1 }}>
          <Banner label={ dirBasename ? dirBasename : bannerLabel } navigation={navigation} />
          <ScrollView style={{ flex: 1 }}>
          </ScrollView>
          <StatusBar barStyle="light-content" />
          <View style={styles.statusBarUnderlay} />
        </View>
      );
    }

    const { params } = navigation.state;
    const remainUrlReal = params && params.openUrl ? params.openUrl : remainUrl;

    return (
      <View style={{ flex: 1 }}>
        <Banner label={ dirBasename ? dirBasename : bannerLabel } navigation={navigation} />
        <ScrollView style={{ flex: 1 }}>
          {files.map((file) => {
             return (
               <FileBrowserItem
                 key={file.name}
                 name={file.name}
                 description={file.description}
                 isDir={file.isType === "dir"}
                 navigation={navigation}
                 baseUrl={baseUrl}
                 apiUrl={apiUrl}
                 remainUrl={ remainUrlReal ? `${remainUrl}/${file.name}` : file.name }
               />
              );
            })}
        </ScrollView>
        <StatusBar barStyle="light-content" />
        <View style={styles.statusBarUnderlay} />
      </View>
    );
  }
}

export default FileBrowser;

const styles = StyleSheet.create({
  statusBarUnderlay: {
    backgroundColor: '#32aeca',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: Constants.statusBarHeight,
  },
});
