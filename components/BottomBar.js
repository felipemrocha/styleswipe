import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { ArrowPathRoundedSquareIcon, HomeIcon, UserIcon } from 'react-native-heroicons/outline';
import { useNavigation } from '@react-navigation/native';

const BottomBar = () => {
    const navigation = useNavigation();

    return(
    <View className="fixed -bottom-10 w-full h-28 pb-5 px-10 border-t-2 flex-row justify-between items-center bg-white -mt-10">
        <TouchableOpacity onPress={() => {
            navigation.navigate("Home")}}>
            <HomeIcon color="black" strokeWidth={2} size={35}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
            navigation.navigate("Swipe")}}>
            <ArrowPathRoundedSquareIcon color="black" strokeWidth={2} size={40}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
            navigation.navigate("Profile")}}>
            <UserIcon color="black" strokeWidth={2} size={35}/>
        </TouchableOpacity>
    </View>
    )
}

export default BottomBar