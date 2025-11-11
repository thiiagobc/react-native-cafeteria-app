import { Dimensions, Platform, StyleSheet } from "react-native";
import { themas } from "../../global/themes";
const { width } = Dimensions.get("window");


export const style = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#F1E6D9',
        // paddingHorizontal:20, tamanho do campo de e-mail/senha
        paddingTop: Platform.OS === 'ios' ? 10 : 30,
        alignItems:'center',
        justifyContent:'space-between',
        paddingBottom: 20,
    
    },
    boxTop:{
        minHeight: Dimensions.get('window').height * 0.25,
        width:'100%',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    boxMid:{
        height: Dimensions.get('window').height/4,
        width:'100%',
        //backgroundColor: 'green',
        paddingHorizontal: 37,
    },
    boxBottom:{
        height: Dimensions.get('window').height/3,
        width:'100%',
        alignItems:'center',
        justifyContent:'flex-start'
    },
    
    logo:{
        width:width * 0.55,
        height: width * 0.55,
        marginTop:6,
        resizeMode: "contain",
        
    },
    text:{
        marginTop:35,
        fontSize:18,
        fontWeight:'bold'
    },
    
    
    button:{
        width:250,
        height:50,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:themas.colors.primary,
        borderRadius:40,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,

        elevation: 7,
    },
    textButton:{
        fontSize:16,
        color:'#FFFF',
        fontWeight:'bold'
    },
    textBottom:{
        fontSize:16,
        color:themas.colors.gray
    },
})