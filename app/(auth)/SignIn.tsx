import CustomButton from '@/components/CustomButton'
import CustomInput from '@/components/CustomInput'
import { signIn } from '@/lib/appwrite'
import { Link, router } from 'expo-router'
import { useState } from 'react'
import { View, Text, Alert } from 'react-native'
const SignIn = () => {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  const [form, setForm] = useState({ email: '', password: '' })
  
  const submit = async () => {
    const { email, password } = form
    if (!email || !password) return Alert.alert('Error', 'Please enter valid email address & password')

    setIsSubmitting(true)

    try {
      await signIn({ email, password })

      Alert.alert('Success', 'User signed in successfully.')
      router.replace('/')
    } catch (err: any) {
      Alert.alert('Error', err.message)
    } finally {
      setIsSubmitting(false)
    }
  } 
  return (
    <View className='gap-10 bg-white rounded-lg p-5 mt-5'>
      <CustomInput
        placeholder='Enter your email'
        value={form.email}
        onChangeText={(text) => setForm((prev) => ({ ...prev, email: text }))}
        keyboardType='email-address'
        label='Email'
      />
      
      <CustomInput
        placeholder='Enter your password'
        value={form.password}
        onChangeText={(text) => setForm((prev) => ({ ...prev, password: text }))}
        secureTextEntry={true}
        label='Password'
      />

      <CustomButton title='Sign In' isLoading={isSubmitting} onPress={submit} />

      <View className='flex justify-center mt- flex-row gap-2'>
        <Text className='base-regular text-gray-100'>Don't have an account?</Text>
        <Link href="/SignUp" className='base-bold text-primary'>Sign Up</Link>
      </View>
    </View>
  )
}
export default SignIn