import 'react-native-gesture-handler';
import React, { useEffect, useState, useContext } from 'react';
import { SafeAreaView, View, Text, TextInput, Image, Button } from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import DropDownPicker from 'react-native-dropdown-picker';
import axios from 'axios';

import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon3 from 'react-native-vector-icons/FontAwesome';
import Icon4 from 'react-native-vector-icons/Ionicons';
import COLORS from '../consts/color';
import STYLES from '../styles/index';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import MainButton from '../components/mainButton';
import Header from '../components/header';

import { UserContext } from '../context/userContext';

const SignUpScreen = ({ navigation }) => {

    useEffect(() => { }, [goBack])

    const { users } = useContext(UserContext);

    const [userName, setUserName] = useState('');
    const [fullName, setFullName] = useState('');
    const [NIC, setNIC] = useState();
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [weight, setWeight] = useState('');
    const [address, setAddress] = useState('');
    const [healthCondition, setHealthCondition] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [bloodGroup, setBloodGroup] = useState('');
    const [city, setCity] = useState('');
    const [district, setDistrict] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    // user confirmation
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

    // dropdown for choose health condition
    const [openH, setOpenH] = useState(false);
    const [valueH, setValueH] = useState('good');
    const [itemsH, setItemsH] = useState([
        { label: 'Good', value: 'good' },
        { label: 'Fine', value: 'fine' },
        { label: 'Bad', value: 'bad' },
    ]);

    const [goBack, setGoBack] = useState(false);

    const checkNewUser = () => {
        let isNewNumber = true;
        console.log(users['users']);

        try {
            users['users'].forEach(user => {
                if (NIC === user.NIC) {
                    isNewNumber = false;
                }
            })

            if (isNewNumber) {
                navigation.navigate('SignIn')
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
                console.warn('User already exist');
            }

        } catch (e) {
            console.warn('No data found');
        }
        // console.warn('pass 3');



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
                        <TextInput placeholder="Username" style={STYLES.input} onChangeText={newText => setUserName(newText)} defaultValue={userName} />
                    </View>
                    <View style={STYLES.inputContainer}>
                        <Icon
                            name="person-outline"
                            color={COLORS.light}
                            size={20}
                            style={STYLES.inputIcon_usual}
                        />
                        <TextInput placeholder="Full Name" style={STYLES.input} onChangeText={newText => setFullName(newText)} defaultValue={fullName} />
                    </View>
                    <View style={STYLES.inputContainer}>
                        <View>
                            <Icon
                                name="date-range"
                                color={COLORS.light}
                                size={20}
                                style={STYLES.inputIcon_blood}
                            />
                            <Text style={STYLES.formLabel}>Date of Birth   </Text>
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
                                    width: '34%',
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
                        <Icon3
                            name="id-card-o"
                            color={COLORS.light}
                            size={20}
                            style={STYLES.inputIcon_usual}
                        />
                        <TextInput placeholder="NIC Number" style={STYLES.input} keyboardType="numeric" onChangeText={newText => setNIC(newText)} defaultValue={NIC} />
                    </View>
                    <View style={STYLES.inputContainer}>
                        <Icon2
                            name="weight"
                            color={COLORS.light}
                            size={20}
                            style={STYLES.inputIcon_usual}
                        />
                        <TextInput placeholder="Weight (Kg)" style={STYLES.input} keyboardType="numeric" onChangeText={newText => setWeight(newText)} defaultValue={weight} />
                    </View>
                    <View style={STYLES.inputContainer}>
                        <Icon3
                            name="address-book-o"
                            color={COLORS.light}
                            size={20}
                            style={STYLES.inputIcon_usual}
                        />
                        <TextInput placeholder="Address" style={STYLES.input} onChangeText={newText => setAddress(newText)} defaultValue={address} />
                    </View>
                    <View style={STYLES.inputContainer}>
                        <Icon3
                            name="mobile"
                            color={COLORS.light}
                            size={20}
                            style={STYLES.inputIcon_usual}
                        />
                        <TextInput placeholder="Mobile Number" style={STYLES.input} keyboardType="numeric" onChangeText={newText => setMobileNumber(newText)} defaultValue={mobileNumber} />
                    </View>
                    <View style={STYLES.inputContainer}>
                        <View>
                            <Icon2
                                name="heart-multiple-outline"
                                color={COLORS.light}
                                size={20}
                                style={STYLES.inputIcon_blood}
                            />
                            <Text style={STYLES.formLabel}>Health Condition</Text>
                        </View>
                        <View style={{ marginLeft: 20 }}>
                            <DropDownPicker
                                open={openH}
                                value={valueH}
                                items={itemsH}
                                setOpen={setOpenH}
                                setValue={setValueH}
                                setItems={setItemsH}
                                style={{
                                    width: '35%',
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
                        <TextInput placeholder="City" style={STYLES.input} onChangeText={newText => setCity(newText)} defaultValue={city} />
                    </View>
                    <View style={STYLES.inputContainer}>
                        <Icon4
                            name="location-outline"
                            color={COLORS.light}
                            size={20}
                            style={STYLES.inputIcon_usual}
                        />
                        <TextInput placeholder="District" style={STYLES.input} onChangeText={newText => setDistrict(newText)} defaultValue={district} />
                    </View>

                    <View style={STYLES.inputContainer}>
                        <Icon
                            name="mail-outline"
                            color={COLORS.light}
                            size={20}
                            style={STYLES.inputIcon_usual}
                        />
                        <TextInput placeholder="Email" style={STYLES.input} onChangeText={newText => setEmail(newText)} defaultValue={email} />
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
                        <MainButton
                            style={{ color: '#fff', fontWeight: 'bold', fontSize: 18 }}
                            onPress={() => {
                                checkNewUser();
                            }}
                            title="Sign Up"
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
                        Already have an account ?
                    </Text>
                    <TouchableOpacity onPress={() => {
                        setGoBack(true);
                        navigation.navigate('SignIn');
                    }}>
                        <Text style={{ color: COLORS.primary, fontWeight: 'bold' }}> Sign in
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default SignUpScreen;