import { StyleSheet, Dimensions} from "react-native";
import { themas } from "../../global/themes";


export const style = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
    },
    header:{
        width: '100%',
        height:Dimensions.get('window').height/4,
        backgroundColor:themas.colors.primary,      //COR DA SEGUNDA PÁGINA (TOPO)
        justifyContent:'center',
        paddingHorizontal:20,
        // alignItems:'center',
        

    },
    greeting:{
        fontSize:18,
        color:'#FFF',
        marginTop:10            //CONFIGURAR A DISTÂNCIA DO BOM DIA COM A BOX
    },
    boxInput:{
        width:'80%',
        
    },
    boxList:{
        flex:1,
        width:'100%',
    },
    card:{
        width:'100%',
        height:60,
        backgroundColor:'#FFF',
        marginTop:6,
        borderRadius:10,
        justifyContent:'center',
        padding:10,
        borderWidth:1,
        borderColor:themas.colors.ligthGray,
    },
    rowCard:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
    },
    rowCardLeft:{
        width:'70%',
        flexDirection:'row',
        alignItems:'center',
        gap:10,
    }
    
})
