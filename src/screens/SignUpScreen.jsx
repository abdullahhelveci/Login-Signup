import { useNavigation } from '@react-navigation/native'
import { Image, KeyboardAvoidingView, StatusBar, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Animated, {FadeInUp,FadeInDown} from 'react-native-reanimated'



const LoginScreen = () => {

    const navigation = useNavigation()

  return (
    <View 
    className='bg-white h-full w-full'>
        <StatusBar barStyle={'light-content'} />
       <Image  className='h-full w-full absolute' source={require('../assets/background.png')} /> 

    {/* lambalar */}

    <View className='absolute flex-row justify-around w-full'>
        <Animated.Image entering={FadeInUp.duration(1000)} source={require('./../assets/light.png')} />
        <Animated.Image entering={FadeInUp.duration(1000)} className='h-[160] w-[65]' source={require('./../assets/light.png')} />
    </View>

    {/* başlık ve form */}

    <View className='flex justify-end w-full h-full pt-40 pb-10'>
    <View className='flex items-center mb-10'>
        <Animated.Text entering={FadeInDown.duration(1000)} className='text-black font-bold tracking-wider text-5xl'>SignUp</Animated.Text>
    </View>

        {/* form */}

        <Animated.View 
        entering={FadeInDown.duration(1000)}
        className='flex items-center  mx-2 space-y-5'>
            <View className='w-full p-3 bg-black/5 rounded-2xl'>
                <TextInput placeholder='E-mail' placeholderTextColor={'gray'}/>
            </View>
            <View className='w-full p-3 bg-black/5 rounded-2xl'>
                <TextInput placeholder='Username' placeholderTextColor={'gray'}/>
            </View>
            <View className='w-full p-3 bg-black/5 rounded-2xl'>
                <TextInput placeholder='Password' placeholderTextColor={'gray'} secureTextEntry/>
            </View>
            <View className='w-full'>
                <TouchableOpacity className='w-full p-3 bg-sky-400 rounded-2xl mb-3'>
                    <Text className='text-2xl font-bold text-center text-white'>SignUp</Text>
                </TouchableOpacity>
            </View>
            <View className='flex-row justify-center'>
                <Text>Already have an account? </Text>
                <TouchableOpacity onPress={() => navigation.push('Login')}>
                    <Text className='text-sky-600'>Login</Text>
                </TouchableOpacity>
            </View>
        </Animated.View>
    </View>


    </View>
  )
}


export default LoginScreen