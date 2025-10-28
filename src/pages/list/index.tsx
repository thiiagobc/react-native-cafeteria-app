import React from "react";

import {Text, TouchableOpacity, View} from 'react-native'
import { style } from "./styles";
import { Input } from "../../components/Input";
import { MaterialIcons } from "@expo/vector-icons";
import { FlatList } from "react-native-gesture-handler";
import { Ball } from "../../components/Ball";

type PropCard = {
    item:number,
    title:string,
    description:string,
    flag:'urgente'|'opcional'
}

const data:Array<PropCard> = 
[
        {
            item:0,
            title: 'Café simples!',
            description: '',
            flag:'urgente'
        },
        {
            item:1,
            title:'Café expresso!',
            description:'',
            flag:'urgente'
            },
        {
            item:2,
            title:'Cappucino!',
            description:'',
            flag:'urgente'
        }

    ]

export default function List (){

    
    const _renderCard = (item:PropCard)=>{
        return(
            <TouchableOpacity style={style.card}>
                <View style={style.rowCard}>
                    <View style={style.rowCardLeft}>
                    <Ball color="red"/>                
                    <View>
                        <Text>{item.title}</Text>
                        <Text>{item.description}</Text>
                    </View>

                    </View>
                    {/* <Flag /> */}
                </View>
            </TouchableOpacity>
        )
    }

    return(
        <View style={style.container}>
            <View style={style.header}>
                <Text style={style.greeting}>Bom dia, <Text style={{fontWeight:'bold'}}>Thiago</Text></Text><Text style={style.greeting}>Qual será o pedido de hoje?</Text>
                <View style={style.boxInput}>
                <Input 
                    IconLeft={MaterialIcons}
                    iconLeftName="search"
                />
                </View>
            </View>
            <View style={style.boxList}>
                <FlatList
                    data={data}
                    style={{marginTop:40,paddingHorizontal:30}}
                    keyExtractor={(item,index)=>item.item.toString()}
                    renderItem={({item,index})=>{return (_renderCard(item))}}
                />
            </View>
        </View>
    )
}


