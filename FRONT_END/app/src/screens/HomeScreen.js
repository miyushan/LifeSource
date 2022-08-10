import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaView, View, Text, TextInput, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon3 from 'react-native-vector-icons/FontAwesome';
import Icon5 from 'react-native-vector-icons/AntDesign';
import COLORS from '../consts/color';
import STYLES from '../styles/index';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import MainButton from '../components/mainButton';
import Header from '../components/header';

const HomeScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
            <ScrollView showsVerticalScrollIndicator={false}>

                {/* <Header /> */}

                <View style={{
                    justifyContent: 'space-evenly',
                    paddingHorizontal: 20,
                    marginTop: 40,
                    height: 245,
                    borderBottomLeftRadius: 70,
                    borderBottomRightRadius: 70,
                    backgroundColor: COLORS.primary
                }}>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        // marginTop: 40,
                        height: 245,
                    }}>
                        <View>
                            <Icon
                                name="menu"
                                color={COLORS.white}
                                size={40}
                            />
                        </View>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                        }}>
                            <Icon3
                                name="gratipay"
                                color='#54FF5B'
                                size={25}
                            />
                            <Text style={{ fontWeight: 'bold', fontSize: 22, color: COLORS.white, marginLeft: 5 }}>Kilinochchi</Text>
                        </View>
                    </View>

                </View>
                <View>
                    <MainButton
                        style={{ color: '#fff', fontWeight: 'bold', fontSize: 18 }}
                        onPress={() => {
                            navigation.navigate('EventAdd');
                        }}
                        title="Post an Event"
                    /></View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default HomeScreen;