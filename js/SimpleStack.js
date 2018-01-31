import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';

class RecentChatsScreen extends React.Component {
	render() {
		const { navigate } = this.props.navigation;
		return (
			<View>
				<Text>List of recent chats</Text>
				<View style={styles.buttonRowGroup}>
					<View style={styles.buttonItem}>
						<Button
							onPress={ () => navigate('Chat', { user: 'Lucy' }) }
							title="Chat with Lucy"
						/>
					</View>
				</View>
			</View>
		);
	}
}

class AllContactsScreen extends React.Component {
	render() {
		const { navigate } = this.props.navigation;
		return (
			<View>
				<Text>List of all contacts</Text>
				<View style={styles.buttonRowGroup}>
					<View style={styles.buttonItem}>
						<Button
							onPress={ () => navigate('Chat', { user: 'Lucy' }) }
							title="Chat with Lucy"
						/>
					</View>
				</View>
				<View style={styles.buttonRowGroup}>
					<View style={styles.buttonItem}>
						<Button
							onPress={ () => navigate('Chat', { user: 'Pepe' }) }
							title="Chat with Pepe"
						/>
					</View>
				</View>
				<View style={styles.buttonRowGroup}>
					<View style={styles.buttonItem}>
						<Button
							onPress={ () => navigate('Chat', { user: 'Duri' }) }
							title="Chat with Duri"
						/>
					</View>
				</View>
			</View>
		);
	}
}

const MyChatsScreenNavigator = TabNavigator(
	{
		Recent: {
			screen: RecentChatsScreen,
		},
		All: {
			screen: AllContactsScreen,
		},
	},
);

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome'
  };
  render() {
		const { navigate } = this.props.navigation;
    return (
			<View>
			 <Text>Hello, Navigation!</Text>
			 <View style={styles.buttonRowGroup}>
				 <View style={styles.buttonItem}>
					 <Button
					  	onPress={ () => navigate('MyChats') }
							title="My Chats"
					 	/>
			 		</View>
				 </View>
			  <View style={styles.buttonRowGroup}>
					<View style={styles.buttonItem}>
						<Button
							onPress={ () => navigate('Chat', { user: 'Lucy' }) }
						  title="Chat with Lucy"
					   />
					</View>
			  </View>
			  <View style={styles.buttonRowGroup}>
					<View style={styles.buttonItem}>
						<Button
							onPress={ () => navigate('DrawerToggle') }
						  title="Open Drawer"
					   />
					</View>
			  </View>
        <View style={styles.buttonRowGroup}>
          <View style={styles.buttonItem}>
            <Button
              onPress={ () => navigate('HomeFileBrowser') }
              title="File Browser: Home"
            />
          </View>
        </View>
        <View style={styles.buttonRowGroup}>
          <View style={styles.buttonItem}>
            <Button
              onPress={ () => navigate('FilesFileBrowser') }
              title="File Browser: Files"
            />
          </View>
        </View>
			</View>
		);
  }
}

class ChatScreen extends React.Component {
	static navigationOptions = ({ navigation }) => {
    const { state, setParams } = navigation;
    const isInfo = state.params.mode === 'info';
    const { user } = state.params;
    return {
      title: isInfo ? `${user}s Contact Info` : `Chat with ${navigation.state.params.user}`,
      headerRight: (
          <Button
            title={ isInfo ? 'Done' : `${user}s info` }
            onPress={ () => setParams({ mode: isInfo ? 'none' : 'info' }) }
          />
        ),
      };
  };

	render() {
		const { params } = this.props.navigation.state;
    if ( params.mode === 'info' )
    	return (
		   	<View>
			  	<Text>{params.user}s contact info screen</Text>
			  </View>
		  );
    else
    	return (
		   	<View>
			  	<Text>Chat with {params.user}</Text>
			  </View>
		  );
	}
}

const SimpleStack = StackNavigator(
  {
    Home: { screen: HomeScreen },
	  MyChats: {
	  	screen: MyChatsScreenNavigator,
	  	navigationOptions: {
		  	title: 'My Chats',
		  },
  	},
	  Chat: { screen: ChatScreen },
  },
);

export default SimpleStack;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
	buttonRowGroup: {
		flexDirection: 'row',
	},
	buttonItem: {
		flex: 1,
		marginTop: 10,
		marginLeft: 10,
		marginRight: 10,
	},
});
