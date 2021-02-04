import React, { useState, useEffect } from "react";

import { View, Text, FlatList, TouchableHighlight, } from "react-native";

import styles from './../../components/style/styles';

const Page2 = () => {

    const [user, setUser] = useState([]);

    const getUsers = async () => {
        try {
            const response = await fetch("http://192.168.1.xx:3005/user");//Change to localhost or IP
            const jsonData = await response.json()

            setUser(jsonData);
        } catch (error) {
            console.error(error);

        }
        getUsers();
    }

    useEffect(() => {
        getUsers();
    }, [])
    return (
        <FlatList
            data={user}
            keyExtractor={(item, index) => index.toString()}

            renderItem={({ item }) => {
                return (
                    <View style={{ flex: 1 }}>
                        <View style={styles.card}>
                            <Text style={{ marginLeft: 15 }}>Name: {item.name} </Text>
                            <Text style={{ marginLeft: 15 }}>Last Name: {item.last_name} </Text>
                            <Text style={{ marginLeft: 15 }}>Phone #: {item.phone} </Text>
                        </View>
                    </View>
                )
            }}
        />
    )
}

export default Page2;