import React, { Component } from 'react';
import { Image, StyleSheet } from 'react-native';
import styles from './styles.js';

export default class BackgroundImage extends Component {

    render() {
        return (
            <Image
              source={require('../../images/gigsMic.jpg')}
              style={styles.backgroundImage}
            >
                    {this.props.children}
            </Image>
        )
    }
}
