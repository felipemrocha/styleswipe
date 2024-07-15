import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'

const LocalSwaps = () => {
  return (
    <TouchableOpacity className="bg-gray-300 h-[300px] w-[200px] rounded-md m-1">
                    <Text className="pt-3 text-center text-lg font-extrabold">Austin Swappin'</Text>
                    <Text className="text-center text-sm">July 30th - 11AM to 4PM</Text>
                    <Text className="text-center text-sm">$10 entry</Text>

                    <Text className="text-center text-s p-2 h-[195px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque volutpat sapien arcu, non tincidunt felis rutrum eu. Suspendisse potenti. Aenean vel blandit est. Pellentesque non lacus eros. Proin congue convallis auctor. Cras ac elit eget est tempor auctor. Aliquam sit amet risus ligula. Morbi luctus arcu urna, in mattis eros euismod et.</Text>
                    <Text className="text-center font-bold text-xs pb-2">1234 Guadalupe Street</Text>
    </TouchableOpacity>
  )
}

export default LocalSwaps