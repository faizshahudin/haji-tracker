import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';
import * as actions from '../actions';

class DetailScreen extends Component {
    componentDidMount() {
        if (this.props.detailData !== '') {
            let data = JSON.parse(this.props.detailData);

            this.props.storeProfileData(data);
        }
    }

    render() {
        if (this.props.detailData === '') {
            return (
                <View style={styles.containerStyle}>
                <Text>There is no data for your profile yet.</Text>
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
        } else {
            console.log('detailData: ', this.props.detailData);
            return (
                <View style={styles.containerStyle}>
                    <View style={styles.profilepicWrap}>
                        <Image style={styles.profilepic} source={require('../assets/profileimage.jpg')} />
                    </View>
                    <Text style={styles.textStyle}>Name: {this.props.name}</Text>
                    <Text>Passport Number: {this.props.passportNumber}</Text>
                    <Text>Package Name: {this.props.packageName}</Text>
                    <Text>Hotel Name: {this.props.hotelName}</Text>
                </View>
            );
        }
    }
}

const styles = {
    containerStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    profilepicWrap: {
        width: 130,
        height: 130,
        borderRadius: 65,
    },
    profilepic: {
        //flex: 1,
        width: 130,
        height: 130,
        alignSelf: 'stretch',
        borderRadius: 65,
        //borderColor: '#F3D72C',
        //borderWidth: 1,
    },
    textStyle: {
        marginTop: 50
    }
}

function mapStateToProps({ scan, profile }) {
    return {
        detailData: scan.barcodeData,
        name: profile.name,
        passportNumber: profile.passportNumber,
        packageName: profile.packageName,
        hotelName: profile.hotelName
    };
}

export default connect(mapStateToProps, actions)(DetailScreen);
