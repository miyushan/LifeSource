import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, Text, TextInput, Image, Button } from 'react-native';
import axios from 'axios';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import DropDownPicker from 'react-native-dropdown-picker';

import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon3 from 'react-native-vector-icons/FontAwesome';
import Icon4 from 'react-native-vector-icons/Ionicons';
import COLORS from '../consts/color';
import STYLES from '../styles/index';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import MainButton from '../components/mainButton';
import Header from '../components/header';

const EventAddScreen = ({ navigation }) => {

    const [oName, setOrganizerUserName] = useState('');
    const [oFullName, setOrganizerFullName] = useState('');
    const [oMobile, setOrganizerMobile] = useState('');
    const [eDate, setEventDate] = useState('');
    const [eTime, setEventTime] = useState('');
    const [eDistrict, setEventDistrict] = useState('');
    const [eLocation, setEventLocation] = useState('');
    const [nHospital, setNearestHospital] = useState('');


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

    //time picker
    const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
    const showTimePicker = () => {
        setDatePickerVisibility(true);
    };
    const hideTimePicker = () => {
        setDatePickerVisibility(false);
    };
    const handleConfirmTime = (date) => {
        // console.warn("A date has been picked: ", date);
        hideDatePicker();
    };




    // useEffect(() => {


    //     console.log('start fetching');

    //     axios.get('https://localhost:8000/api/users', {
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'Accept': 'application/json',
    //         }
    //     })
    //         .then(res => {
    //             setUsers(res.data);
    //         }).catch(err => {
    //             console.log(err);
    //         });

    //     console.log('start2 fetching');

    // }, []);

    return (
        <SafeAreaView style={{ paddingHorizontal: 20, flex: 1, backgroundColor: COLORS.white }}>
            <ScrollView showsVerticalScrollIndicator={false}>

                <Header />

                <View style={{ marginTop: 70 }}>
                    <Text style={{ fontSize: 27, fontWeight: 'bold', color: COLORS.dark }}>
                        Add Event
                    </Text>
                    <Text style={{ fontSize: 19, fontWeight: 'bold', color: COLORS.light }}>
                        Fill the form to add event
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
                        <TextInput placeholder="Organizer Username" style={STYLES.input} />
                    </View>
                    <View style={STYLES.inputContainer}>
                        <Icon
                            name="person-outline"
                            color={COLORS.light}
                            size={20}
                            style={STYLES.inputIcon_usual}
                        />
                        <TextInput placeholder="Organizer's Full Name" style={STYLES.input} />
                    </View>
                    <View style={STYLES.inputContainer}>
                        <Icon
                            name="mobile-friendly"
                            color={COLORS.light}
                            size={20}
                            style={STYLES.inputIcon_usual}
                        />
                        <TextInput placeholder="organizer's Mobile Number" style={STYLES.input} />
                    </View>
                    <View style={STYLES.inputContainer}>
                        <View>
                            <Icon
                                name="date-range"
                                color={COLORS.light}
                                size={20}
                                style={STYLES.inputIcon_blood}
                            />
                            <Text style={STYLES.formLabel}>Event date  </Text>
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
                    {/* <View style={STYLES.inputContainer}>
                        <View>
                            <Icon
                                name="access-time"
                                color={COLORS.light}
                                size={20}
                                style={STYLES.inputIcon_blood}
                            />
                            <Text style={STYLES.formLabel}>Event Start Time  </Text>
                        </View>
                        <Button onPress={showTimePicker} title="Select"></Button>
                        <DateTimePickerModal
                            isVisible={isTimePickerVisible}
                            mode="time"
                            onConfirm={handleConfirmTime}
                            onCancel={hideTimePicker}
                            style={{
                                backgroundColor: COLORS.primary,
                                // height: 50,
                                // borderRadius: 5,
                                // justifyContent: 'center',
                                // alignItems: 'center',
                                // marginTop: 50,
                            }}
                        />
                    </View> */}

                    <View style={STYLES.inputContainer}>
                        <Icon4
                            name="location-outline"
                            color={COLORS.light}
                            size={20}
                            style={STYLES.inputIcon_usual}
                        />
                        <TextInput placeholder="Event District" style={STYLES.input} />
                    </View>
                    <View style={STYLES.inputContainer}>
                        <Icon4
                            name="location"
                            color={COLORS.light}
                            size={20}
                            style={STYLES.inputIcon_usual}
                        />
                        <TextInput placeholder="Event Location" style={STYLES.input} />
                    </View>
                    <View style={STYLES.inputContainer}>
                        <Icon2
                            name="hospital-box-outline"
                            color={COLORS.light}
                            size={20}
                            style={STYLES.inputIcon_usual}
                        />
                        <TextInput placeholder="Nearest Hospital from Event location" style={STYLES.input} />
                    </View>

                    <View>
                        <MainButton style={{ color: '#fff', fontWeight: 'bold', fontSize: 18 }}
                            // onPress={() => { navigation.navigate('AddEvent') }}
                            title="Add Event"
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

                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default EventAddScreen;