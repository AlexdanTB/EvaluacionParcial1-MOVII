import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from '../screens/LoginScreen';
import { RegisterScreen } from '../screens/RegisterScreen';
import { HomeScreen } from '../screens/HomeScreen';
import { useEffect, useState } from 'react';
import { onAuthStateChanged } from '@firebase/auth';
import { auth } from '../configs/firebaseConfig';
import { View } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import { styles } from '../theme/appStyle';

const Stack = createStackNavigator();

export const StackNavigator = () => {

    //Hook usestsate verificar si está autenticado
    const [isAuth, setisAuth] = useState<boolean>(false)

    //Controlar el estado de carga de iniciio de sesión
    const [isLoading, setisLoading] = useState<boolean>(true)


    //Hook useEffect verificar estado de autenticación
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) { //Si existe un usuario autenticado
                console.log(user)
                setisAuth(true);
            }
            setisLoading(false);
        })
    }, [])// Si está vacio, se ejecuta una sola vez

    return (
        <>
        {
            isLoading ? (
                <View style={styles.containerActivity}>
                    <ActivityIndicator size={40}/>
                </View>
            )
        :
         (<Stack.Navigator>
            {
                !isAuth ?
                    <>
                        <Stack.Screen name='Login' options={{ headerShown: false }} component={LoginScreen} />
                        <Stack.Screen name='Register' options={{ headerShown: false }} component={RegisterScreen} />
                    </>
                    :
                    <Stack.Screen name='Home' options={{ headerShown: false }} component={HomeScreen} />
            }

        </Stack.Navigator>)
        }
        </>
    );
}