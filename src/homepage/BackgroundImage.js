import React, { Component } from 'react';
import { Image, StyleSheet } from 'react-native';

export default class BackgroundImage extends Component {

    render() {
        return (
            <Image
            source={require('../images/mic.jpg')}
            style={styles.backgroundImage}
            >
                    {this.props.children}
            </Image>
        )
    }
}

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover',
        marginTop: 25,
        marginBottom: 4,
        marginLeft: 2,
        marginRight: 2,
    }
});
