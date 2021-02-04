import React, { useState, useEffect } from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";

import styles from './../../components/style/styles';

const Page3 = () => {

    const [user, setUser] = useState([]);


    const getUsers = async () => {
        try {
            const response = await fetch("http://192.168.1.xx:3005/user") //Change localhost or IP
            const jsonData = await response.json()

            setUser(jsonData);
        } catch (error) {
            console.error(error);

        }
    }

    const deleteData = async (id) => {
        try {
            const deleteData = await fetch(`http://192.168.1.xx:3005/deleteuser/${id}`, { //change to localhost or IP
                method: 'DELETE'
            })
            setUser(user.filter(user => user.id !== id))
            const dataResponse = await deleteData.json();

        } catch (error) {
            console.error(error.message);

        }
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
                            <Text style={{ marginLeft: 15 }}>Phone #:  {item.phone} </Text>
                            <View style={{ marginLeft: 20, marginRight: 20 }}>

                                <TouchableOpacity style={styles.buttonStyle}
                                    onPress={() => deleteData(item.id)}
                                >


                                    <Text style={styles.textUserStyle} >Delete</Text>
                                </TouchableOpacity>

                            </View>
                        </View>
                    </View>
                )
            }}
        />
    )
}


export default Page3;