import { Dimensions, View, Text } from "react-native";
import Carousel from 'react-native-reanimated-carousel';

const LandingScreen = () => {

    /**
     * get width
     */
    const width = Dimensions.get('window').width;

    return (
        <View className="flex-1 items-center bg-white">
            <Text className="font-bold text-2xl text-gray-600 mt-7">Explore</Text>
            <Carousel
                loop
                width={width}
                height={width / 3}
                autoPlay={true}
                data={[...new Array(6).keys()]}
                scrollAnimationDuration={1000}
                onSnapToItem={(index) => console.log('current index:', index)}
                renderItem={({ index }) => (
                    <View
                        style={{
                            flex: 1,
                            borderWidth: 1,
                            justifyContent: 'center',
                        }}
                    >
                        <Text style={{ textAlign: 'center', fontSize: 30 }}>
                            {index}
                        </Text>
                    </View>
                )}
            />
        </View>
    );
};

export default LandingScreen;