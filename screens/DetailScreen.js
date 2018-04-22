import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions';

class DetailScreen extends Component {
    componentDidMount() {
        let data = JSON.parse(this.props.detailData);

        this.props.storeProfileData(data);
    }

    render() {
        return (
            <View style={styles.containerStyle}>
                <Text>Name: {this.props.name}</Text>
                <Text>Passport Number: {this.props.passportNumber}</Text>
                <Text>Package Name: {this.props.packageName}</Text>
                <Text>Hotel Name: {this.props.hotelName}</Text>
            </View>
        );
    }
}

const styles = {
    containerStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
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
