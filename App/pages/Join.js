import React, { useState } from "react";
import { ImageBackground, View, TextInput, Text, StyleSheet, Image, Button, TouchableOpacity } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

function Join({ navigation }) {
    return (
        <KeyboardAwareScrollView
            style={{ flex: 1 }}
            showsVerticalScrollIndicator={false}
            resetScrollToCoords={{ x: 0, y: 0 }}
            scrollEnabled={true}
        >
            <ImageBackground source={require('../assets/backColor.png')} style={styles.container}>
                <Text style={{ ...styles.text, marginLeft: 28 }}>이메일 입력</Text>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.emailInputText} />
                    <TouchableOpacity style={styles.btn} onPress={() => { }}>
                        <Text style={styles.emailBtnText}>확인</Text>
                    </TouchableOpacity>
                </View>
                <Text style={{ ...styles.text, marginLeft: 10 }}>비밀번호</Text>
                <TextInput style={styles.inputText} />
                <Text style={{ ...styles.text, marginLeft: 40 }}>비밀번호 확인</Text>
                <TextInput style={styles.inputText} />
                <Text style={{ ...styles.text, marginLeft: 1 }}>닉네임</Text>
                <TextInput style={styles.inputText} />
                <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate("Login")}>
                    <Text style={styles.loginButtonText}>회원가입</Text>
                </TouchableOpacity>
            </ImageBackground>
        </KeyboardAwareScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: 400,
        height: 680
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
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: {
        marginRight: 250,
        fontWeight: "bold",
        color: "black",
        fontSize: 15,
    },
    loginButton: {
        backgroundColor: "#7254F5",
        padding: 15,
        borderRadius: 10,
        alignItems: "center",
        width: '80%',
        marginVertical: 20,
        marginTop: 20
    },
    loginButtonText: {
        fontWeight: "bold",
        color: "white",
        fontSize: 15,
    },
    btn: {
        backgroundColor: "#7254F5",
        padding: 15,
        borderRadius: 10,
        alignItems: "center",
        width: 70,
        height: 59,

    },
    emailBtnText: {
        fontWeight: "bold",
        color: "white",
        fontSize: 15,
        marginTop: 4
    },
    emailInputText: {
        backgroundColor: "white",
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 10,
        marginVertical: 20,
        fontSize: 18,
        width: '60%',
        marginRight: 20,
    },
});

export default Join;