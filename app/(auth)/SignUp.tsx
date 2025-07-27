import CustomButton from '@/components/CustomButton'
import CustomInput from '@/components/CustomInput'
import { Link, router } from 'expo-router'
import { useState } from 'react'
import { View, Text, Button, Alert } from 'react-native'
const SignUp = () => {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  const [form, setForm] = useState({ name: '', email: '', password: '' })
  
  const submit = async () => {
    if (!form.name || !form.email || !form.password) return Alert.alert('Error', 'Please enter valid email address & password')

    setIsSubmitting(true)

    try {
      // call appwrite sign up function

      Alert.alert('Success', 'User signed up successfully.')
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
        placeholder='Enter your full name'
        value={form.name}
        onChangeText={(text) => setForm((prev) => ({ ...prev, name: text }))}
        label='Full name'
      />

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

      <CustomButton title='Sign Up' isLoading={isSubmitting} onPress={submit} />

      <View className='flex justify-center mt- flex-row gap-2'>
        <Text className='base-regular text-gray-100'>Already have an account?</Text>
        <Link href="/SignIn" className='base-bold text-primary'>Sign In</Link>
      </View>
    </View>
  )
}
export default SignUp