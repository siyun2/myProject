import React, { useState } from "react";
import { ImageBackground, View, TextInput, Text, StyleSheet, Image, Button, TouchableOpacity } from "react-native";

function FindPw({ navigation }) {
    const [email, setEmail] = useState("");
    const [showPasswordFields, setShowPasswordFields] = useState(false);
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleCheckEmail = () => {
        if (email === "abc") {
            setShowPasswordFields(true);
            setErrorMessage("");
        } else {
            setErrorMessage("등록된 회원 정보가 없습니다");
        }
    };

    return (
        <ImageBackground
            source={require('../assets/backColor.png')}
            style={styles.container}
        >
            <Text style={{ ...styles.text, marginLeft: 28 }}>이메일 입력</Text>
            <TextInput
                style={styles.inputText}
                value={email}
                onChangeText={text => setEmail(text)}
            />
            <TouchableOpacity style={styles.checkBtn} onPress={handleCheckEmail}>
                <Text style={styles.checkBtnText}>다음</Text>
            </TouchableOpacity>

            {showPasswordFields && (
                <View>
                    <TextInput
                        style={styles.inputText}
                        placeholder="새 비밀번호"
                        value={newPassword}
                        onChangeText={text => setNewPassword(text)}
                    />
                    <TextInput
                        style={styles.inputText}
                        placeholder="비밀번호 확인"
                        value={confirmPassword}
                        onChangeText={text => setConfirmPassword(text)}
                    />
                    <TouchableOpacity style={styles.checkBtn}onPress={() => navigation.navigate("Login")}>
                        <Text style={styles.checkBtnText}>확인</Text>
                    </TouchableOpacity>
                </View>
            )}

            {errorMessage !== "" && ( // errorMessage가 비어있지 않은 경우에만 출력
                <Text style={styles.errorMessage}>{errorMessage}</Text>
            )}
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
        paddingVertical: 2,
        paddingHorizontal: 20,
        borderRadius: 10,
        marginVertical: 10,
        fontSize: 18,
        width: 320,
        height : 50,
    },
    checkBtn: {
        backgroundColor: "#7254F5",
        padding: 15,
        borderRadius: 10,
        alignItems: "center",
        width: 320,
        marginVertical: 10,
    },
    checkBtnText: {
        fontWeight: "bold",
        color: "white",
        fontSize: 15,
    },
    text: {
        marginRight: 250,
        fontWeight: "bold",
        color: "black",
        fontSize: 15,
    },
    errorMessage: {
        color: "red",
        fontSize: 15,
        marginTop: 10, // errorMessage와 다음 버튼 사이의 간격 조절
        marginBottom : 150
    },
});

export default FindPw;
