import { StyleSheet } from "react-native";
import COLORS from "../consts/color";

const STYLES = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        marginTop: 20,
    },
    input: {
        color: COLORS.light,
        paddingLeft: 30,
        borderBottomWidth: 1,
        borderColor: COLORS.light,
        borderBottomWidth: 0.5,
        flex: 1,
        fontSize: 18,
    },
    formLabel: {
        color: COLORS.light,
        paddingLeft: 30,
        borderColor: COLORS.light,
        flex: 1,
        fontSize: 18,
        marginTop: 14,
        // position: 'absolute'
    },
    inputIcon: {
        usual: {
            marginTop: 5,
            position: 'absolute'
        },
        blood: {
            marginTop: 14,
            position: 'absolute'
        }
    },
    btn_primary: {
        justifyContent: 'center',
        borderColor: '#fff',
        borderRadius: 8,
        borderWidth: 2,
        width: 265,
        height: 53,
    },
    btn_text: {
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 16,
        textAlign: 'center',
    },
    btnPrimary: {
        backgroundColor: COLORS.primary,
        height: 50,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
    },
    btnSecondary: {
        height: 50,
        borderWidth: 1,
        borderColor: '#a5a5a5',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        flex: 1,
        flexDirection: 'row',
    },
    btnImage: {
        width: 20,
        height: 20,
        marginLeft: 5
    },
    line: {
        height: 1,
        width: 30,
        backgroundColor: '#a5a5a5'
    },
});

export default STYLES;