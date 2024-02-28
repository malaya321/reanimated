import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CustomTextInput from '../../../Components/FormInputField';
import AuthButton from '../../../Components/AuthButton';
import { styles } from './Stylesheet';

const SignUp: React.FC = () => {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleSignup = async () => {
        try {
            const body = {
                email: email,
                password: password,
                name: name
            }
            console.log(body);
            const response = await fetch('http://192.168.10.223:3000/api/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body)

            });


            console.log(response);


            if (response.ok) {
                const data = await response.json();
                // Handle successful login, such as storing tokens, navigating, etc.
                console.log('Signup successful:', data);
            } else {
                // Handle error response
                console.error('Signup failed');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Sign Up</Text>
            <View style={styles.formContainer}>
                <CustomTextInput
                    placeholder="Enter Your Name"
                    onChangeText={(text) => setName(text)}
                    value={name}
                    containerStyle={styles.input}
                />
                <CustomTextInput
                    placeholder="Enter Your Email"
                    onChangeText={(text) => setEmail(text)}
                    value={email}
                    containerStyle={styles.input}
                />
                <CustomTextInput
                    placeholder="Enter Your Password"
                    onChangeText={(text) => setPassword(text)}
                    value={password}
                    secureTextEntry
                    containerStyle={styles.input}
                />
                <AuthButton title="Sign Up" onPress={handleSignup} style={styles.button} />
            </View>
        </View>
    );
};



export default SignUp;
