import React, { useState } from "react";
// import { View, Text } from "react-native";
import { View, Text, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { MaterialCommunityIcons, FontAwesome5, Feather, SimpleLineIcons } from '@expo/vector-icons'

import InputComponent from './../../components/InputComponent'

const Page1 = () => {
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');

    const handleSubmit = async () => {
        try {
            const body = {
                name: name,
                last_name: lastName,
                phone: phone,

            };
            const response = await fetch("http://192.168.1.xx:3005/adduser", { //  change to localhost or IP
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });

        } catch (error) {
            console.error(error.message);
        }


        setName('')
        setLastName('')
        setPhone('')

    }
    return (

        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss()
        }}>

            <View style={styles.container}>
                <View style={styles.inputStyle}>
                    <View style={styles.logoStyle} >
                        <FontAwesome5 name="user-circle" size={40} color="white" />
                    </View>
                    <View style={styles.iconStyles}>
                        <SimpleLineIcons name="user" size={24} color="white" />

                        <InputComponent
                            placeholder="Name"
                            placeholderTextColor='gray'
                            value={name}
                            onChangeText={e => setName(e)}
                        />
                    </View>
                    <View style={styles.iconStyles}>
                        <SimpleLineIcons name="user" size={24} color="white" />

                        <InputComponent
                            placeholder="Last Name"
                            placeholderTextColor='gray'
                            value={lastName}
                            onChangeText={e => setLastName(e)}
                        />
                    </View>
                    <View style={styles.iconStyles} >
                        <Feather name="phone" size={24} color="white" />

                        <InputComponent
                            placeholder="Phone"
                            keyboardType="number-pad"
                            placeholderTextColor='gray'
                            value={phone}
                            onChangeText={e => setPhone(e)}
                        />

                    </View>

                </View>
                <View style={{ marginLeft: 20, marginRight: 20 }}>

                    <TouchableOpacity style={styles.buttonStyle}
                        onPress={handleSubmit}
                    >
                        <Text style={styles.textUserStyle} >Submit Data</Text>
                    </TouchableOpacity>

                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default Page1;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#262432',
        justifyContent: "center"
    },
    inputStyle: {
        marginLeft: 20,
        marginRight: 50
    },
    buttonStyle: {
        padding: 10,
        backgroundColor: '#1D1B28',
        marginBottom: 15
    },
    textUserStyle: {
        color: 'white',
        textAlign: "center",

    },
    iconStyles: {
        flex: 1,
        flexDirection: 'row',
        alignItems: "center",
        marginBottom: 60
    },
    logoStyle: {
        color: 'white',
        textAlign: "center",
        fontSize: 30,
        alignItems: "center",
        marginBottom: 60
    }

})

