import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, Text, TextInput, Image } from 'react-native';
import axios from 'axios';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon3 from 'react-native-vector-icons/Ionicons';
import COLORS from '../consts/color';
import STYLES from '../styles/index';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

const SignUpScreen = ({ navigation }) => {

    const [users, setUsers] = useState([]);
    const [isPrevUser, setIsPrevUser] = useState(false);
    const [branch, setBranch] = useState('');

    useEffect(() => {
        axios.get('http://localhost:8000/api/users')
            .then(res => {
                setUsers(res.data);
                console.log(res.data);
            })

        try {
            users.forEach(user => {

                if (NIC_num === user.nic && password === user.password) {
                    setIsPrevUser(true);
                }

            })
        } catch (e) {
            alert('No Account Exists!');
        }
    }, [users]);

    return (
        <SafeAreaView style={{ paddingHorizontal: 20, flex: 1, backgroundColor: COLORS.white }}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ flexDirection: 'row', marginTop: 40 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 22, color: COLORS.dark }}>
                        Life
                    </Text>
                    <Text
                        style={{ fontWeight: 'bold', fontSize: 22, color: COLORS.primary }}>
                        Source
                    </Text>
                </View>
                <View style={{ marginTop: 70 }}>
                    <Text style={{ fontSize: 27, fontWeight: 'bold', color: COLORS.dark }}>
                        Welcome Back,
                    </Text>
                    <Text style={{ fontSize: 19, fontWeight: 'bold', color: COLORS.light }}>
                        Sign up to continue
                    </Text>
                </View>

                {/* form data */}
                <View style={{ marginTop: 20 }}>
                    <View style={STYLES.inputContainer}>
                        <Icon
                            name="person-pin"
                            color={COLORS.light}
                            size={20}
                            style={STYLES.inputIcon}
                        />
                        <TextInput placeholder="Username" style={STYLES.input} />
                    </View>
                    <View style={STYLES.inputContainer}>
                        <Icon
                            name="person-outline"
                            color={COLORS.light}
                            size={20}
                            style={STYLES.inputIcon}
                        />
                        <TextInput placeholder="Full Name" style={STYLES.input} />
                    </View>
                    <View style={STYLES.inputContainer}>
                        <Icon
                            name="date-range"
                            color={COLORS.light}
                            size={20}
                            style={STYLES.inputIcon}
                        />
                        <TextInput placeholder="Date of Birth" style={STYLES.input} />
                    </View>
                    <View style={STYLES.inputContainer}>
                        <Icon2
                            name="weight"
                            color={COLORS.light}
                            size={20}
                            style={STYLES.inputIcon}
                        />
                        <TextInput placeholder="Weight" style={STYLES.input} />
                    </View>
                    <View style={STYLES.inputContainer}>
                        <Icon2
                            name="heart-multiple-outline"
                            color={COLORS.light}
                            size={20}
                            style={STYLES.inputIcon}
                        />
                        <TextInput placeholder="Health Condition" style={STYLES.input} />
                    </View>
                    <View style={STYLES.inputContainer}>
                        <Icon2
                            name="blood-bag"
                            color={COLORS.light}
                            size={20}
                            style={STYLES.inputIcon}
                        />
                        <TextInput placeholder="Blood Group" style={STYLES.input} />
                    </View>
                    <View style={STYLES.inputContainer}>
                        <Icon2
                            name="hospital-box-outline"
                            color={COLORS.light}
                            size={20}
                            style={STYLES.inputIcon}
                        />
                        <TextInput placeholder="Region" style={STYLES.input} />
                    </View>
                    <View style={STYLES.inputContainer}>
                        <Icon3
                            name="location-outline"
                            color={COLORS.light}
                            size={20}
                            style={STYLES.inputIcon}
                        />
                        <TextInput placeholder="District" style={STYLES.input} />
                    </View>

                    <View style={STYLES.inputContainer}>
                        <Icon
                            name="mail-outline"
                            color={COLORS.light}
                            size={20}
                            style={STYLES.inputIcon}
                        />
                        <TextInput placeholder="Email" style={STYLES.input} />
                    </View>
                    <View style={STYLES.inputContainer}>
                        <Icon
                            name="lock-outline"
                            color={COLORS.light}
                            size={20}
                            style={STYLES.inputIcon}
                        />
                        <TextInput
                            placeholder="Password"
                            style={STYLES.input}
                            secureTextEntry
                        />
                    </View>


                    <View style={STYLES.btnPrimary}>
                        <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 18 }}>
                            Sign Up
                        </Text>
                    </View>
                    <View style={{
                        marginVertical: 20,
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <View style={STYLES.line}></View>
                        <Text style={{ marginHorizontal: 5, fontWeight: 'bold' }}>OR</Text>
                        <View style={STYLES.line}></View>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                    }}>
                        <View style={STYLES.btnSecondary}>
                            <Text style={{ fontWeight: 'bold', fontSize: 16 }}>
                                Sign up with
                            </Text>
                            <Image
                                style={STYLES.btnImage}
                                source={require('../assets/facebook.png')}
                            />
                        </View>
                        <View style={{ width: 10 }}></View>
                        <View style={STYLES.btnSecondary}>
                            <Text style={{ fontWeight: 'bold', fontSize: 16 }}>
                                Sign up with
                            </Text>
                            <Image
                                style={STYLES.btnImage}
                                source={require('../assets/google.png')}
                            />
                        </View>
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
                        Already have an account ?
                    </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
                        <Text style={{ color: COLORS.primary, fontWeight: 'bold' }}> Sign in
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default SignUpScreen;