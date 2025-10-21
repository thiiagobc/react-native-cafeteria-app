import { StyleSheet } from "react-native";
import { themas } from "../../global/themes";


export const style = StyleSheet.create({
    boxInput:{
            width:'100%',
            height:40,
            borderWidth:1,
            borderRadius: 40,
            borderColor:themas.colors.ligthGray,
            backgroundColor:themas.colors.bgScreen,
            marginTop:10,
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'space-around',
            paddingHorizontal:20
        },
        input:{
        height:'100%',
        width:'100%',
        borderRadius: 40,
        backgroundColor:themas.colors.bgScreen,
    },
    titleInput:{
        marginLeft: 5,
        color:themas.colors.gray,
        marginTop:20
    }, 
    Icon:{
        width:'100%',
    },
    Button:{
        width: '10%',
    }
})