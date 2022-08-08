import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, Text, TextInput, Image, Button } from 'react-native';
import axios from 'axios';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import DropDownPicker from 'react-native-dropdown-picker';

import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon3 from 'react-native-vector-icons/Ionicons';
import COLORS from '../consts/color';
import STYLES from '../styles/index';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

const SignUpScreen = ({ navigation }) => {

    const [userName, setUserName] = useState('');
    const [fullName, setFullName] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [weight, setWeight] = useState('');
    const [healthCondition, setHealthCondition] = useState('');
    const [bloodGroup, setBloodGroup] = useState('');
    const [city, setCity] = useState('');
    const [district, setDistrict] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    // user confirmation
    const [users, setUsers] = useState([]);
    const [isPrevUser, setIsPrevUser] = useState(false);

    //date picker
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };
    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };
    const handleConfirm = (date) => {
        // console.warn("A date has been picked: ", date);
        hideDatePicker();
    };

    // dropdown for choose blood group
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState('BPos');
    const [items, setItems] = useState([
        { label: 'B+', value: 'BPos' },
        { label: 'B-', value: 'BNeg' },
        { label: 'A+', value: 'APos' },
        { label: 'A-', value: 'ANeg' },
        { label: 'O+', value: 'OPos' },
        { label: 'O-', value: 'ONeg' },
        { label: 'AB+', value: 'ABPos' },
        { label: 'AB-', value: 'ABNeg' },
    ]);




    useEffect(() => {
        const url = 'http://10.0.2.2:8000/api/users';
        const fetchUsers = async () => {
            try {
                // setIsLoading(true);
                const response = await axios.get(url);
                if (response.status === 200) {
                    console.log(response.data);
                    setUsers(response);
                    setIsLoading(false);
                    return;
                } else {
                    throw new Error("Failed to fetch users");
                }
            } catch (error) {
                console.log(`Error: `, error.message);
            }
        };
        fetchUsers();
        return () => source.cancel("Data fetching cancelled");
    }, []);

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
                            style={STYLES.inputIcon_usual}
                        />
                        <TextInput placeholder="Username" style={STYLES.input} />
                    </View>
                    <View style={STYLES.inputContainer}>
                        <Icon
                            name="person-outline"
                            color={COLORS.light}
                            size={20}
                            style={STYLES.inputIcon_usual}
                        />
                        <TextInput placeholder="Full Name" style={STYLES.input} />
                    </View>
                    <View style={STYLES.inputContainer}>
                        <View>
                            <Icon
                                name="date-range"
                                color={COLORS.light}
                                size={20}
                                style={STYLES.inputIcon_blood}
                            />
                            <Text style={STYLES.formLabel}>Date of Birth</Text>
                        </View>
                        <Button onPress={showDatePicker} title="Select"></Button>
                        <DateTimePickerModal
                            isVisible={isDatePickerVisible}
                            mode="date"
                            onConfirm={handleConfirm}
                            onCancel={hideDatePicker}
                            style={{
                                backgroundColor: COLORS.primary,
                                // height: 50,
                                // borderRadius: 5,
                                // justifyContent: 'center',
                                // alignItems: 'center',
                                // marginTop: 50,
                            }}
                        />
                    </View>
                    <View style={STYLES.inputContainer}>
                        <Icon2
                            name="weight"
                            color={COLORS.light}
                            size={20}
                            style={STYLES.inputIcon_usual}
                        />
                        <TextInput placeholder="Weight (Kg)" style={STYLES.input} />
                    </View>
                    <View style={STYLES.inputContainer}>
                        <Icon2
                            name="heart-multiple-outline"
                            color={COLORS.light}
                            size={20}
                            style={STYLES.inputIcon_usual}
                        />
                        <TextInput placeholder="Health Condition" style={STYLES.input} />
                    </View>
                    <View style={STYLES.inputContainer}>
                        <View>
                            <Icon2
                                name="blood-bag"
                                color={COLORS.light}
                                size={20}
                                style={STYLES.inputIcon_blood}
                            />
                            <Text style={STYLES.formLabel}>Blood Group</Text>
                        </View>
                        <View style={{ marginLeft: 20 }}>
                            <DropDownPicker
                                open={open}
                                value={value}
                                items={items}
                                setOpen={setOpen}
                                setValue={setValue}
                                setItems={setItems}
                                style={{
                                    width: '40%',
                                    color: COLORS.light,
                                    // paddingLeft: 0,
                                    borderColor: COLORS.light,
                                    borderBottomWidth: 1,
                                    flex: 1,
                                    fontSize: 18,
                                    backgroundColor: COLORS.primary
                                }}
                                listMode="SCROLLVIEW"
                            />
                        </View>
                    </View>
                    <View style={STYLES.inputContainer}>
                        <Icon2
                            name="hospital-box-outline"
                            color={COLORS.light}
                            size={20}
                            style={STYLES.inputIcon_usual}
                        />
                        <TextInput placeholder="City" style={STYLES.input} />
                    </View>
                    <View style={STYLES.inputContainer}>
                        <Icon3
                            name="location-outline"
                            color={COLORS.light}
                            size={20}
                            style={STYLES.inputIcon_usual}
                        />
                        <TextInput placeholder="District" style={STYLES.input} />
                    </View>

                    <View style={STYLES.inputContainer}>
                        <Icon
                            name="mail-outline"
                            color={COLORS.light}
                            size={20}
                            style={STYLES.inputIcon_usual}
                        />
                        <TextInput placeholder="Email" style={STYLES.input} />
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