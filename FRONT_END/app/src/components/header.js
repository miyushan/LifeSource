import 'react-native-gesture-handler';
import React from 'react';
import { View, Text } from 'react-native';
import COLORS from '../consts/color';

const Header = () => {
    return (
        <View style={{ flexDirection: 'row', marginTop: 40 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 22, color: COLORS.dark }}>
                Life
            </Text>
            <Text style={{ fontWeight: 'bold', fontSize: 22, color: COLORS.primary }}>
                Source
            </Text>
        </View>
    );
}

export default Header;