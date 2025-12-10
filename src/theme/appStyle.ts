import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems:"center",
        paddingVertical: 10,
        gap: 10
    },
    inputs: {
        width:"90%",
    },
    titulos: {
        fontSize:20,
        fontWeight:"bold"
    },
    btns: {
        width:"90%"
    },
    textRedirect:{
        marginTop:20,
        fontSize:12,
        textAlign:"center",
        fontWeight:"bold"
    },
    containerActivity:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    containerHome:{
        flex:1,
        marginVertical:50,
        marginHorizontal:20
    },
    headerHome:{
        flexDirection:"row",
        alignItems:"center",
        gap:10
    },
    icon:{
        flex:1,
        alignItems:'flex-end'
    },
    modalProfile:{
        padding:20,
        backgroundColor:"white",
        marginHorizontal:20,
        borderRadius:5,
        gap:10
    },
    cardProduct:{
        padding:10,
        margin:5,
        backgroundColor:"white",
        borderRadius:5
    }
})