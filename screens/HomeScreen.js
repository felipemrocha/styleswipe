import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native'
import React from 'react'
import NameLogo from './../assets/fullname.svg';
import IconLogo from './../assets/icon.svg';
import TwitterIcon from './../assets/twitter.svg'
import InstagramIcon from './../assets/instagram.svg'
import FacebookIcon from './../assets/facebook.svg'
import { SafeAreaView } from 'react-native-safe-area-context';
import { EnvelopeIcon } from 'react-native-heroicons/outline';
import MapView from 'react-native-maps';
import { useNavigation } from '@react-navigation/native';
import LocalSwaps from '../components/LocalSwaps';
import Notification from '../components/Notification'
import BottomBar from '../components/BottomBar';



const HomeScreen = () => {

    const navigation = useNavigation();

  return (
    <>
    <SafeAreaView className="flex-1">
        <View className="flex flex-row items-center justify-end p-4 border-b-4">  
            <View className="flex flex-grow justify-start ml-[48px]">
                <NameLogo height={40}/>
            </View>
            
            <TouchableOpacity>
                <EnvelopeIcon color="black" strokeWidth={2} size={35}/>
                {/*<Notification count={0} size={12}/>*/}
            </TouchableOpacity>
        </View>

        <ScrollView>
            <Text className="text-[18px] font-bold pt-4 pb-1 px-4">Swipe Spots Near You</Text>
            <View className="w-full h-60 px-3 overflow-hidden">
                <TouchableOpacity className="border-2 w-full h-60 rounded-lg overflow-hidden">
                    <MapView
                    initialRegion={{
                        latitude: 30.28565,
                        longitude: -97.73921,
                        latitudeDelta: 0.005,
                        longitudeDelta: 0.005,
                    }}
                    className="flex-1 z-0"
                    mapType='mutedStandard'
                    userInterfaceStyle = 'dark'/>
                </TouchableOpacity>
            </View>
            
            <View className="flex-row justify-between pt-6 pb-1 px-4 items-center">
                <Text className="text-[18px] font-bold">Your Friends' Items</Text>
                <Text className="text-[13px] text-[#4A9E6C]">See more{'>'}</Text>
            </View>
            <ScrollView horizontal={true} className="space-x-2">
                <View className="w-2"/>
                <TouchableOpacity>
                    <Image source={require('./../assets/clothes/12.jpg')}
                    className="h-40 w-40"/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={require('./../assets/clothes/13.jpg')}
                    className="h-40 w-40"/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={require('./../assets/clothes/14.jpg')}
                    className="h-40 w-40"/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={require('./../assets/clothes/15.jpg')}
                    className="h-40 w-40"/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={require('./../assets/clothes/16.jpg')}
                    className="h-40 w-40"/>
                </TouchableOpacity>
                <View className="w-2"/>
            </ScrollView>

            <View className="flex-row justify-between pt-6 pb-1 px-4 items-center">
                <Text className="text-[18px] font-bold">Local Swaps Happening Soon</Text>
                <Text className="text-[13px] text-[#4A9E6C]">See more{'>'}</Text>
            </View>
            <View className="flex-1">
                <ScrollView horizontal={true} className="space-x-2">
                    <View className="w-2"/>
                    <LocalSwaps/>
                    <LocalSwaps/>
                    <LocalSwaps/>
                    <LocalSwaps/>
                    <LocalSwaps/>
                    <LocalSwaps/>
                    <LocalSwaps/>
                    <View className="w-2"/>

                </ScrollView>
            </View>

            <TouchableOpacity className="bg-[#4A9E6C] my-5 mx-10 rounded-lg p-4">
                <Text className="text-white font-bold text-center text-[16px]">Learn More About Circular Fashion</Text>
            </TouchableOpacity>
            
            <Text className="text-center mb-1 font-bold">Follow StyleSwipe</Text>
            <View className="flex-row justify-center mb-5">
                <TouchableOpacity><FacebookIcon/></TouchableOpacity>
                <View className="border-b w-8 mb-[10] mx-1"/>
                <TouchableOpacity><InstagramIcon/></TouchableOpacity>
                <View className="border-b w-8 mb-[10] mx-1"/>
                <TouchableOpacity><TwitterIcon/></TouchableOpacity>
            </View>
        </ScrollView>
        <BottomBar/>
        
    </SafeAreaView>
    </>
  )
}

export default HomeScreen