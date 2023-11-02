import React, { useState } from "react";
import { ImageBackground, View, TextInput, Text, StyleSheet, Image, Button, TouchableOpacity } from "react-native";


function FindPw({ navigation }) {
    const [id, setId] = useState("")
    const [pw, setPw] = useState("")

    return (
        <ImageBackground
            source={require('../assets/backColor.png')}
            style={styles.container} >
            <View>
                <TextInput style={styles.inputText} />
                <TouchableOpacity style={styles.loginButton} onPress={() => {} }>
                    <Text style={styles.loginButtonText}>회원가입</Text>
                </TouchableOpacity>
            </View>
            <View>

            </View>

        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    },
    inputText: {
        backgroundColor: "white",
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 10,
        marginVertical: 20,
        fontSize: 18,
        width: '80%',
    },
    loginButton: {
        backgroundColor: "#7254F5",
        padding: 15,
        borderRadius: 10,
        alignItems: "center",
        width: '80%',
        marginVertical: 20,
    },
    loginButtonText: {
        fontWeight: "bold",
        color: "white",
        fontSize: 15,
    },
});

export default FindPw;