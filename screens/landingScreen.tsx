import { Dimensions, View, Text, Image } from "react-native";
import Carousel from 'react-native-reanimated-carousel';

const LandingScreen = () => {

    /**
     * get width
     */
    const width = Dimensions.get('window').width;

    const images = [
        require('../assets/img/1.jpg'),
        require('../assets/img/2.jpg'),
        require('../assets/img/3.jpg'),
        require('../assets/img/4.jpg'),
        require('../assets/img/5.jpg')
    ];

    return (
        <View className="flex-1 items-center bg-white">
            <Text className="font-bold text-2xl text-gray-600 mt-7 mb-3">Explore</Text>
            <Carousel
                loop
                width={width}
                height={width / 2}
                autoPlay={true}
                data={images}
                scrollAnimationDuration={1000}
                onSnapToItem={(index) => {}}
                renderItem={({ index, item } : any) => (
                    <Image className="rounded" source={item} style={{ width: "100%", height: "100%" }}/>
                )}
            />
            <Text className="font-bold text-2xl text-gray-600 mt-7 mb-3 text-start">Explore</Text>
        </View>
    );
};

export default LandingScreen;