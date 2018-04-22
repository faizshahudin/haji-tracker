import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import MapView from 'react-native-maps';
import { connect } from 'react-redux';
import * as actions from '../actions';

class LocateScreen extends Component {
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
                <View style={styles.containerStyle}>
                    
                    <MapView 
                        style={styles.mapStyle}
                        region={{
                            latitude: this.props.latitude,
                            longitude: this.props.longitude,
                            latitudeDelta: 0.1,
                            longitudeDelta: 0.1
                        }}
                    >
                        <MapView.Marker
                            coordinate={{
                                latitude: this.props.latitude,
                                longitude: this.props.longitude,
                                latitudeDelta: 0.1,
                                longitudeDelta: 0.1
                            }}
                            title={'My hotel'}
                            desciption={'Here is the assign hotel'}
                        />
                    </MapView>
                </View>
            );
        }
        
    }
}

const styles = {
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
