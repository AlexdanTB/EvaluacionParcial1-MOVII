import React, { useState } from 'react'
import { TouchableOpacity, View } from 'react-native'
import { Button, Snackbar, Text, TextInput } from 'react-native-paper'
import { styles } from '../theme/appStyle'
import { auth } from '../configs/firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { CommonActions, useNavigation } from '@react-navigation/native';

//Interfaz formulario
interface FormRegister {
  email: string;
  password: string;
}

//interfaz para mensajes dinámicos
interface Message{
  visible: boolean;
  text: string;
  color: string;
}

export const RegisterScreen = () => {

  const navigation = useNavigation();

  const [showMessage, setshowMessage] = useState<Message>({
    visible: false,
    text: "",
    color:""
  })

  const [formRegister, setformRegister] = useState<FormRegister>({
    email: "",
    password: ""
  })
  //metodo de captura de datos

  const handleInputChange = (key: string, value: string): void => {
    setformRegister({ ...formRegister, [key]: value });

  }
  //funcion para registrar usuarios
  const handleRegister = async ()=> {

    //Validar datos del formulario
    if (formRegister.email === "" || formRegister.password === "") {
      setshowMessage({visible: true, text: "Completa todos los campos", color:"#3d7f9eff"});
      return;
    }

    try {
      console.log(formRegister);
      const response = await createUserWithEmailAndPassword(auth, formRegister.email, formRegister.password)
      console.log(response);
      setshowMessage({visible: true, text: "Registro Exitoso", color:"#873d9eff"});
      
      setformRegister({email: "", password:""})
      
    } catch (error) {
      console.log(error);
    }

  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulos}>Registrate</Text>
      <TextInput style={styles.inputs}
        mode="outlined"
        label="Correo electrónico"
        placeholder="Ingresa tu correo"
        onChangeText={(value) => handleInputChange("email", value)}
        value={formRegister.email}

      />
      <TextInput style={styles.inputs}
        mode="outlined"
        label="Contraseña"
        placeholder="Ingresa tu contraseña"
        onChangeText={(value) => handleInputChange("password", value)}
        value={formRegister.password}
        secureTextEntry
      />
      <Button style={styles.btns}
        mode="contained"
        onPress={handleRegister}>
        Iniciar
      </Button>
      <TouchableOpacity onPress={()=> navigation.dispatch(CommonActions.navigate({name: 'Login'}))}>
        <Text style={styles.textRedirect}>¿Ya tienes una cuenta? Inicia sesión</Text>
      </TouchableOpacity>
      
      <Snackbar visible={showMessage.visible} onDismiss={() => setshowMessage({...showMessage, visible: false})} style={{ backgroundColor: showMessage.color }}>
        {showMessage.text}
      </Snackbar>
    </View>

  )
}