import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaView, View, Text, TextInput, Image, Button } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon3 from 'react-native-vector-icons/FontAwesome';
import COLORS from '../consts/color';
import STYLES from '../styles/index';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

import MainButton from '../components/mainButton';
import Header from '../components/header';

const SignInScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={{ paddingHorizontal: 20, flex: 1, backgroundColor: COLORS.white }}>
            <ScrollView showsVerticalScrollIndicator={false}>

                <Header />

                <View style={{ marginTop: 70 }}>
                    <Text style={{ fontSize: 27, fontWeight: 'bold', color: COLORS.dark }}>
                        Welcome Back,
                    </Text>
                    <Text style={{ fontSize: 19, fontWeight: 'bold', color: COLORS.light }}>
                        Sign in to continue
                    </Text>
                </View>

                <View style={{ marginTop: 20 }}>
                    <View style={STYLES.inputContainer}>
                        <Icon3
                            name="id-card-o"
                            color={COLORS.light}
                            size={20}
                            style={STYLES.inputIcon_usual}
                        />
                        <TextInput placeholder="NIC Number" style={STYLES.input} keyboardType="numeric" />
                    </View>
                    <View style={STYLES.inputContainer}>
                        <Icon
                            name="person-pin"
                            color={COLORS.light}
                            size={20}
                            style={STYLES.inputIcon_usual}
                        />
                        <TextInput placeholder="Username" style={STYLES.input} />
                    </View>
                    <View style={STYLES.inputContainer}>
                        <Icon
                            name="lock-outline"
                            color={COLORS.light}
                            size={20}
                            style={STYLES.inputIcon_usual}
                        />
                        <TextInput
                            placeholder="Password"
                            style={STYLES.input}
                            secureTextEntry
                        />
                    </View>
                    <View>
                        <MainButton style={{ color: '#fff', fontWeight: 'bold', fontSize: 18 }}
                            onPress={() => { navigation.navigate('Home') }}
                            title="Sign In"
                        />
                    </View>
                </View>

                <View style={{
                    flexDirection: 'row',
                    alignItems: 'flex-end',
                    justifyContent: 'center',
                    marginTop: 40,
                    marginBottom: 20,
                }}>
                    <Text style={{ color: COLORS.light, fontWeight: 'bold' }}>
                        Don`t have an account ?
                    </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                        <Text style={{ color: COLORS.primary, fontWeight: 'bold' }}> Sign up
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default SignInScreen;