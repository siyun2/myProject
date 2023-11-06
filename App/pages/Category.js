import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Dimensions, Text } from 'react-native';

// ---------------------------------------------------------
import Icon from 'react-native-vector-icons/Feather';
import Fontisto from 'react-native-vector-icons/Fontisto';

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const Main = ({ navigation }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState('분석 가능한 운동'); // 초기 선택값

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleOptionSelect = (value) => {
        setSelectedValue(value);
        toggleDropdown();
    };

    return (
        <View style={styles.Container}>
            <View style={styles.headerComponent}>
                <TouchableOpacity style={styles.bellBtn} onPress={() => { }}>
                    <Fontisto name="bell" size={35} color="black" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.userBtn} onPress={() => { }}>
                    <View style={styles.userCircle}>
                        <Icon name="user" size={35} color="#AB9EF4" />
                    </View>
                </TouchableOpacity>
            </View>
            <View style = {{alignItems: 'center'}}>
                <TouchableOpacity style={styles.dropdownHeader} onPress={toggleDropdown}>
                    <Text style={{ color: 'black', fontWeight : "bold" }}>{selectedValue}</Text>
                </TouchableOpacity>

                {isDropdownOpen && (
                    <View style={styles.dropdownOptions}>
                        <TouchableOpacity onPress={() => handleOptionSelect('스쿼트')}>
                            <Text style={{ color: 'black', fontWeight : "bold" }}>스쿼트</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => handleOptionSelect('런지')}>
                            <Text style={{ color: 'black', fontWeight : "bold" }}>런지</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => handleOptionSelect('푸쉬업')}>
                            <Text style={{ color: 'black', fontWeight : "bold" }}>푸쉬업</Text>
                        </TouchableOpacity>
                    </View>

                )}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    Container: {
        width: windowWidth,
        height: windowHeight,
        backgroundColor: 'white',
        flex: 1,

    },
    headerComponent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 60,
        paddingHorizontal: 15,
    },
    bellBtn: {
        marginRight: 15,
    },
    userBtn: {
        marginLeft: 15,
    },
    userCircle: {
        width: '100%',
        borderWidth: 3,
        borderColor: '#AB9EF4',
        borderRadius: 50,
    },
    dropdownHeader: {
        backgroundColor: "#F9F7FE",
        padding: 15,
        borderRadius: 10,
        alignItems: "center",
        width: '90%',
        marginTop: 30,

    },
    dropdownOptions: {
        backgroundColor: 'blue',
        padding: 15, // 같은 패딩 사용
        borderRadius: 10, // 같은 모양 사용
        alignItems: "center", // 가운데 정렬
        width: '90%', // 같은 너비 사용
        marginTop: 5, // 적절한 간격 사용
        

    },
});

export default Main;
