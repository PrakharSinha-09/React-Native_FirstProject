/* eslint-disable quotes */
/* eslint-disable space-infix-ops */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import React from "react";

import {
    View,
    Text,
    useColorScheme,
    StyleSheet,
} from 'react-native';

function AppPro(): JSX.Element{     

    const isDarkMode=useColorScheme()==='dark';

    return (
        <View style={styles.container}>
            <Text style={isDarkMode ? styles.lightText : styles.darkText}>
                hey there
            </Text>
        </View> 
    );
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
    },

    lightText:{
        color:'#FFFFFF',
    },

    darkText:{
        color:'#000000',
    },
});
export default AppPro;