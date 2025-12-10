import React, { useState } from 'react'
import { TouchableOpacity, View } from 'react-native'
import { Button, Snackbar, Text, TextInput } from 'react-native-paper'
import { styles } from '../theme/appStyle'
import { auth } from '../configs/firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth/cordova';

interface FormLogin {
  email: string;
  password: string;
}

//interfaz para mensajes dinámicos
interface Message {
  visible: boolean;
  text: string;
  color: string;
}

export const LoginScreen = ({navigation}: any) => {

  const [formLogin, setformLogin] = useState<FormLogin>({
    email: "",
    password: ""
  })

  const handleInputChange = (key: string, value: string): void => {
    setformLogin({ ...formLogin, [key]: value });
  }

  const [showMessage, setshowMessage] = useState<Message>({
    visible: false,
    text: "",
    color: ""
  })

  //Estado de la contraseña
  const [hiddenPassword, sethiddenPassword] = useState<boolean>(true);

  const handleLogin = async () => {
    if (formLogin.email === "" || formLogin.password === "") {
      setshowMessage({ visible: true, text: "Completa todos los campos", color: "#3d7f9eff" });
      return;
    }
    try {
      console.log(formLogin);
      const response = await signInWithEmailAndPassword(auth, formLogin.email, formLogin.password)
      console.log(response);
      setshowMessage({ visible: true, text: "Ingreso Exitoso", color: "#873d9eff" });
      setformLogin({ email: "", password: "" })
    } catch (error) {
      console.log(error);
      setshowMessage({ visible: true, text: "Error en el inicio de sesión", color: "#ff0000" });
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulos}>Iniciar Sesión</Text>
      <TextInput style={styles.inputs}
        mode="outlined"
        label="Correo electrónico"
        placeholder="Ingresa tu correo"
        onChangeText={(value) => handleInputChange("email", value)}
        value={formLogin.email}
      />
      <TextInput style={styles.inputs}
        mode="outlined"
        label="Contraseña"
        placeholder="Ingresa tu contraseña"
        onChangeText={(value) => handleInputChange("password", value)}
        value={formLogin.password}
        secureTextEntry={hiddenPassword}
        right={<TextInput.Icon icon="eye" onPress={()=> sethiddenPassword(!hiddenPassword)}/>}
      />
      <Button style={styles.btns}
        mode="contained"
        onPress={handleLogin}>
        Iniciar
      </Button>
      <TouchableOpacity onPress={()=> navigation.navigate({name: 'Register'})}>
        <Text style={styles.textRedirect}>¿No tienes una cuenta? Registrate ahora</Text>
      </TouchableOpacity>
      
      <Snackbar visible={showMessage.visible} onDismiss={() => setshowMessage({ ...showMessage, visible: false })} style={{ backgroundColor: showMessage.color }}>
        {showMessage.text}
      </Snackbar>
    </View>
  )
}
