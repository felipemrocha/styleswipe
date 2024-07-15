import { View, Text, Image, ScrollView, TouchableOpacity, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StarRatingDisplay } from 'react-native-star-rating-widget'
import { ArrowPathRoundedSquareIcon, HomeIcon, UserIcon } from 'react-native-heroicons/outline'
import { useNavigation } from '@react-navigation/native'
import BottomBar from '../components/BottomBar'

const ProfileScreen = () => {
    const screenWidth = Dimensions.get('window').width;
    const imageHeight = screenWidth / 3;
    const navigation = useNavigation();


  return (
<>
    <SafeAreaView className="flex-1">
      <View className="items-center pt-5 border-b-2">
        <Image className="rounded-full h-20 w-20"
        source={require('./../assets/profilepicture.png')}/>
        <Text className="font-bold text-lg">Felipe</Text>
        <Text>@feliperocha</Text>
        <StarRatingDisplay
        rating={4.7}
        color="#4A9E6C"
        starSize={20}
        />

        <View className="flex-row pt-3 pb-4">
            <View className="flex-col items-center">
                <Text className="font-bold text-[20px]">263</Text>
                <Text className="text-[12px]">matches</Text>
            </View>
            <View className="border-l-2 mx-6"/>
            <View className="flex-col items-center">
                <Text className="font-bold text-[20px]">57</Text>
                <Text className="text-[12px]">clothes</Text>
            </View>
            <View className="border-l-2 mx-6"/>
            <View className="flex-col items-center">
                <Text className="font-bold text-[20px]">12</Text>
                <Text className="text-[12px]">swaps</Text>
            </View>
        </View>

        <View className="flex-row justify-between py-3 px-[40px] w-full">
            <Text className="text-[17px] font-bold border-b-[3px] border-[#4A9E6C]">Closet</Text>
            <Text className="text-[17px]">Likes</Text>
            <Text className="text-[17px]">Swaps</Text>
        </View>
      </View>

      <ScrollView>
        <View className="flex-row">
            <View className="border-white">
                <Image source={require('./../assets/clothes/0.jpg')}
                style={{width:imageHeight, height: imageHeight}}/>
            </View>
            <View className="border-white">
                <Image source={require('./../assets/clothes/1.jpg')}
                style={{width:imageHeight, height: imageHeight}}/>
            </View>
            <View className="border-white">
                <Image source={require('./../assets/clothes/2.jpg')}
                style={{width:imageHeight, height: imageHeight}}/>
            </View>
        </View>
        <View className="flex-row">
            <View className="border-white">
                <Image source={require('./../assets/clothes/3.jpg')}
                style={{width:imageHeight, height: imageHeight}}/>
            </View>
            <View className="border-white">
                <Image source={require('./../assets/clothes/4.jpg')}
                style={{width:imageHeight, height: imageHeight}}/>
            </View>
            <View className="border-white">
                <Image source={require('./../assets/clothes/5.jpg')}
                style={{width:imageHeight, height: imageHeight}}/>
            </View>
        </View>
        <View className="flex-row">
            <View className="border-white">
                <Image source={require('./../assets/clothes/6.jpg')}
                style={{width:imageHeight, height: imageHeight}}/>
            </View>
            <View className="border-white">
                <Image source={require('./../assets/clothes/7.jpg')}
                style={{width:imageHeight, height: imageHeight}}/>
            </View>
            <View className="border-white">
                <Image source={require('./../assets/clothes/8.jpg')}
                style={{width:imageHeight, height: imageHeight}}/>
            </View>
        </View>
                <View className="flex-row">
            <View className="border-white">
                <Image source={require('./../assets/clothes/9.jpg')}
                style={{width:imageHeight, height: imageHeight}}/>
            </View>
            <View className="border-white">
                <Image source={require('./../assets/clothes/10.jpg')}
                style={{width:imageHeight, height: imageHeight}}/>
            </View>
            <View className="border-white">
                <Image source={require('./../assets/clothes/11.jpg')}
                style={{width:imageHeight, height: imageHeight}}/>
            </View>
        </View>

      </ScrollView> 
      <BottomBar/>     
    </SafeAreaView>




  
</>
  )
}

export default ProfileScreen