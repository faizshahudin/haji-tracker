import _ from 'lodash';
import { Constants, Location, Permissions } from 'expo';
import React, { Component } from 'react';
import { View, Text, Dimensions, StyleSheet, Platform } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import MapView from 'react-native-maps';
import getDirections from 'react-native-google-maps-directions';
import { connect } from 'react-redux';
import * as actions from '../actions';

const GOOGLE_MAPS_APIKEY = 'AIzaSyC7P0Wml9DBzQdnCFqrZjHC7ZhxgElrr3I';

class LocateScreen extends Component {
    state= {
        location: null,
        originLatitude: null,
        originLongitude: null,
        errorMessage: null,
    };

    componentWillMount() {
        if (Platform.OS === 'android' && !Constants.isDevice) {
            this.setState({
                errorMessage: 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
            });
        } else {
            this._getLocationAsync();
        }
    }

    _getLocationAsync = async () => {
        let { status } = await Permissions.askAsync(Permissions.LOCATION);
        if (status !== 'granted') {
            this.setState({
                errorMessage: 'Permission to access location was denied',
            });
        }

        let location = await Location.getCurrentPositionAsync({});
        //this.setState({ location });
        _.map(location, (item) => {
            if (item.latitude !== null) {
                this.setState({ originLatitude: item.latitude });
            }

            if (item.longitude !== null) {
                this.setState({ originLongitude: item.longitude });
            }
        });
    };

    handleGetDirections = () => {
        const data = {
            source: {
                latitude: this.state.originLatitude,
                longitude: this.state.originLongitude
            },
            destination: {
                latitude: this.props.latitude,
                longitude: this.props.longitude
            },
            params: [
                {
                    key: "travelmode",
                    value: "driving"
                },
                {
                    key: "dir_action",
                    value: "navigate"
                }
            ]
        }

        getDirections(data)
    }
    /*
    renderLocation() {
        let location = this.state.location;
        if (this.state.errorMessage) {
            return (
                <View>
                    <Text>{this.state.errorMessage}</Text>
                </View>
            );
        } else if (location !== null) {
           // text = JSON.stringify(this.state.location);
            return _.map(this.state.location, (item, i) => {
                return (
                    <View key={i}>
                        <Text>Latitude: {item.latitude}</Text>
                    </View>
                );
            });
        }
    }
    
    render() {
        

        return (
            <View style={styles.container}>
                {this.renderLocation()}
                <Button onPress={this.handleGetDirections} title="Get Directions" />
            </View>
        );
    }*/
    render() {
        if (this.props.latitude === '' || this.props.longitude === '') {
            return (
                <View style={styles.buttonContainerStyle}>
                    <Text>There is no data for your location yet.</Text>
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
            )
        } else {
            return (
                <View style={styles.container}>
                    <Button onPress={this.handleGetDirections} title="Get Direction to Your Hotel" />
                </View>

            );
        }
        
    }
}

const styles = {
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#d10e46'
    },
    buttonContainerStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerStyle: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    mapStyle: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0
    }
}

function mapStateToProps({ profile }) {
    return {
        latitude: profile.hotelLatitude,
        longitude: profile.hotelLongitude
    };
}

export default connect(mapStateToProps, actions)(LocateScreen);
