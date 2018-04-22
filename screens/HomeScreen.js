import React, { Component } from 'react';
import { View } from 'react-native';
import { Button, Text } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { AppLoading, Font } from 'expo';

class HomeScreen extends Component {
    state = {
        isReady: false
    }

    static navigationOptions = ({ navigation }) => ({
        title: 'Home'
    })

    componentWillMount() {
        (async() => {
            await Font.loadAsync({
                'Lobster':require('../assets/fonts/Lobster/Lobster-Regular.ttf')
            });

            this.setState({ isReady: true });
        })();
    }

    render() {
        if (!this.state.isReady) {
            return <AppLoading />;
        }

        return (
            <View style={styles.containerStyle}>
                <Text h4 style={styles.titleStyle}>Welcome to Haji TrackAR!</Text>
                <Button
                    onPress={() => this.props.navigation.navigate('scan')}
                    title="SCAN YOUR TAG"
                    color="#000"
                    titleStyle={{ fontWeight: "700" }}
                    buttonStyle={{
                        backgroundColor: "#f5dc00",
                        width: 300,
                        height: 45,
                        borderColor: "#000",
                        borderWidth: 0,
                        borderRadius: 5  
                    }}
                />
            </View>
        );
    }
}

const styles = {
    containerStyle : {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#f7f8f9'
    },
    titleStyle: {
        fontFamily: 'Lobster',
        color: '#000'
    }
}

export default HomeScreen;
