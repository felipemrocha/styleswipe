import { View, Text, Image, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import Swiper from 'react-native-deck-swiper'
import NameLogo from './../assets/fullname.svg';
import BottomBar from '../components/BottomBar'
import { StarRatingDisplay } from 'react-native-star-rating-widget'
import 'nativewind'
import { HeartIcon, XMarkIcon, EnvelopeIcon } from 'react-native-heroicons/outline'

const CLOTHES_DATA = [
  {
    user_name: "Felipe Rocha",
    user_picture: "https://scontent-hou1-1.xx.fbcdn.net/v/t1.6435-9/83934003_3293185687434214_3892735121874223104_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=rBtlSRM6L2AAX95HFnP&_nc_ht=scontent-hou1-1.xx&oh=00_AfB_2xp3fBUcymlzsNAWENfRmajkxCK-mLEXsndnFjnP1w&oe=651B405C",
    item_picture: "https://photos.enjoei.com.br/camiseta-harley-davidson-88306995/1200xN/czM6Ly9waG90b3MuZW5qb2VpLmNvbS5ici9wcm9kdWN0cy8yNjg4NjU5OS9hYTJlNjdjYjQ4MjI5NTNmYzY0NjY0NTY5NjRkMmVjNS5qcGc",
    item_name: "Black Harley Davidson Shirt",
    item_size: "L",
    tags: ["loose fit", "never used"]
  },
  {
    user_name: "Tayo Ezekoye",
    user_picture: "https://media.licdn.com/dms/image/D4E03AQFvysMj1As7ug/profile-displayphoto-shrink_800_800/0/1643054013412?e=2147483647&v=beta&t=LHnDIrY_7W27Pw8cnD4Nt-eZtLXM98QgP5Qk_uOHDBo",
    item_picture: "https://di2ponv0v5otw.cloudfront.net/posts/2023/07/25/64c09a2a17fb4bb05b9f1fc1/s_wp_64c09a4dc1c346b42423d35c.webp",
    item_name: "Brown Slip On Sneakers",
    item_size: "8M",
    tags: ["barely used", "trendy"]
  },
  {
    user_name: "John Smith",
    user_picture: "https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg",
    item_picture: "https://di2ponv0v5otw.cloudfront.net/posts/2023/05/21/646acc1014d7a698ea71cdd2/s_wp_646acd27f644e51134be0d26.webp",
    item_name: "Gray Champion Sweatshirt",
    item_size: "M",
    tags: ["runs large"]
  },
  {
    user_name: "Stephan Jabs",
    user_picture: "https://media.licdn.com/dms/image/D5603AQFnFMRu7kyTsg/profile-displayphoto-shrink_800_800/0/1686167034494?e=2147483647&v=beta&t=dOn4Mtpx2jjTz2NGUwTqLCPXafNK4BokMzyw8lvaGsI",
    item_picture: "https://di2ponv0v5otw.cloudfront.net/posts/2023/09/04/64f69782c24a6d99a5e6c992/s_wp_64f697831645f73253947b3c.webp",
    item_name: "Pink Golden Girls Shirt",
    item_size: "M",
    tags: ["tight fit", "almost new"]
  }
]

const SwipeScreen = () => {
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
      <View className="flex-1 -mt-8">
        <Swiper
          containerStyle={{ backgroundColor: "transparent"}}
          cards = {CLOTHES_DATA}
          stackSize={3}
          cardIndex={0}
          verticalSwipe={false}
          animateCardOpacity
          renderCard={(card) => (
            <>
            <View key={card.id} className="relative bg-black h-3/4 rounded-xl">
              <Image className="absolute top-0 h-full w-full rounded-xl" source={{uri: card.item_picture}}/>
              <View className="absolute bottom-0 h-1/4 w-full rounded-b-xl bg-white">
                <Image className="absolute -top-10 h-16 w-16 rounded-full self-center" source={{uri: card.user_picture}}/>
                <Text className="text-xl font-bold mt-6 pl-3 overflow-ellipsis">{card.item_name}</Text>
                <View className="flex-row justify-between align-middle pl-3">
                  <Text className=" text-lg">Size: {card.item_size}</Text>
                  <View className="flex-row" >
                    {card.tags.map((tag, index) => (
                      <Text
                      key={index}
                      className="text-m bg-lime-200 p-1 self-center mx-1 rounded-lg"
                      >
                        {tag}
                      </Text>
                    ))}
                  </View>
                </View>
                <Text className="text-m self-center pt-3">From {card.user_name}'s closet</Text>
              </View>
            </View>
            </>
          )}       
        />
        <View className="absolute flex-row bottom-2 px-9 justify-between w-full">
          <View className="p-2 rounded-full bg-white border-gray-950 border-4 items-center align-middle aspect-square">
            <XMarkIcon color="black" strokeWidth={2} size={50}/>
          </View>
          
          <View className="p-2 rounded-full bg-gray-950 border-white border-4 items-center align-middle aspect-square">
            <HeartIcon color="white" strokeWidth={2} size={50}/>
          </View>
        </View>
      
      </View>
      <BottomBar/>
    </SafeAreaView>

    </>

  )
}

export default SwipeScreen