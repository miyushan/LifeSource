import { useEffect } from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';

import COLORS from '../consts/color';

import logo from '../assets/logo.png';

export default function SplashScreen({ navigation }) {

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Welcome');
        }, 3000);
    });

    return (
        <View style={styles.container}>
            <Image source={logo} style={styles.logo}></Image>
            <Text style={styles.brandName}>Life Source</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.primary,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: 200,
        height: 200,
    },
    brandName: {
        fontSize: 30,
        fontWeight: 'bold',
        color: COLORS.white,
    }
});
