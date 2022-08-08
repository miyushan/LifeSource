import React from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';

import COLORS from '../consts/color';

export default function Button(props) {
    const { onPress, title = 'Save' } = props;
    return (
        <Pressable style={styles.button} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
        // alignItems: 'center',
        // justifyContent: 'center',
        // paddingVertical: 12,
        // paddingHorizontal: 32,
        // borderRadius: 4,
        // elevation: 3,
        // backgroundColor: 'black',
        backgroundColor: COLORS.primary,
        height: 50,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
    },
});