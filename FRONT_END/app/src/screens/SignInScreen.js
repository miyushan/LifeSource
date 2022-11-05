import 'react-native-gesture-handler';
import React, { useEffect, useState, useContext } from 'react';
import { SafeAreaView, View, Text, TextInput, Image, Button } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon3 from 'react-native-vector-icons/FontAwesome';
import COLORS from '../consts/color';
import STYLES from '../styles/index';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

import MainButton from '../components/mainButton';
import Header from '../components/header';

import { UserContext } from '../context/userContext';

const SignInScreen = ({ navigation }) => {

    useEffect(() => { }, [goBack])
    const { users } = useContext(UserContext);

    const [userName, setUserName] = useState('');
    const [NIC, setNIC] = useState();
    const [password, setPassword] = useState('');

    const [goBack, setGoBack] = useState(false);

    const checkUser = () => {
        let isValidUser = false;
        console.log(users['users']);

        try {
            users['users'].forEach(user => {
                if (NIC === user.NIC) {
                    if (userName === user.userName && password === user.password) {
                        isValidUser = true;
                    }
                }
            })

            if (isValidUser) {
                navigation.navigate('Home')
                // axios.post('http://10.102.10.212:8000/api/users', {
                //     contactNumber: contactNumber,
                //     name: branchName,
                //     address: address,
                // })
                //     .then(() => {
                //         alert('New Branch is Added Successfully!');
                //         setContactNumber('');
                //         setBranchName('');
                //         setAddress('');
                //     });
            } else {
                console.warn('Invalid User');
            }

        } catch (e) {
            console.warn('No data found');
        }
    };

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
                        <TextInput placeholder="NIC Number" style={STYLES.input} keyboardType="numeric" onChangeText={newText => setNIC(newText)} defaultValue={NIC} />
                    </View>
                    <View style={STYLES.inputContainer}>
                        <Icon
                            name="person-pin"
                            color={COLORS.light}
                            size={20}
                            style={STYLES.inputIcon_usual}
                        />
                        <TextInput placeholder="Username" style={STYLES.input} onChangeText={newText => setUserName(newText)} defaultValue={userName} />
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
                            onChangeText={newText => setPassword(newText)} defaultValue={password}
                        />
                    </View>
                    <View>
                        <MainButton style={{ color: '#fff', fontWeight: 'bold', fontSize: 18 }}
                            onPress={() => {
                                checkUser();
                            }}
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
                    <TouchableOpacity onPress={() => {
                        setGoBack(true);
                        navigation.navigate('SignUp');
                    }}>
                        <Text style={{ color: COLORS.primary, fontWeight: 'bold' }}> Sign up
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default SignInScreen;