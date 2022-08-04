import { StyleSheet, Image, Text, View, TouchableOpacity } from 'react-native';

import STYLES from '../styles/index';
import COLORS from '../consts/color';

import logo from '../assets/logo.png';

export default function WelcomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.section_1}>
                <Image source={logo} style={styles.logo}></Image>
                <Text style={styles.brandName}>Life Source</Text>
            </View>

            <View style={styles.section_2}>
                <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
                    <View style={STYLES.btn_primary}>
                        <Text style={STYLES.btn_text}>Log In</Text>
                    </View>
                </TouchableOpacity>
                <View style={{ marginTop: 50 }}></View>
                <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                    <View style={STYLES.btn_primary}>
                        <Text style={STYLES.btn_text}>Sign Up</Text>
                    </View>
                </TouchableOpacity>
            </View>
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
    section_1: {
        flex: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    section_2: {
        flex: 2,
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
    },
});
