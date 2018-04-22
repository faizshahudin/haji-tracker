import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
//import { Button } from 'react-native-elements';
//import Icon from 'react-native-vector-icons/FontAwesome';

class HomeScreen extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: 'Home'
    })
/*
    renderIcon(name) {
        return (
            <Icon
                name
                size={15}
                color='white'
            />
        );
    }
*/
    render() {
        return (
            <View style={styles.containerStyle}>
                <Text>Welcome to Haji TrackAR!</Text>
                <Button
                    onPress={() => this.props.navigation.navigate('scan')}
                    title="SCAN YOUR TAG"
                    color="#d1512f"
                />
            </View>
        );
    }
}

const styles = {
    containerStyle : {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
}

export default HomeScreen;
