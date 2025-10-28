import React, { createContext, useContext, useEffect, useRef, useState } from "react";
import { Alert, Dimensions, Text, View, StyleSheet, TouchableOpacity, KeyboardAvoidingView, Platform } from "react-native";
import {Modalize} from 'react-native-modalize';
import { MaterialIcons, AntDesign } from "@expo/vector-icons";
import { Input } from "../components/Input";
import CustomDateTimerPicker from "../components/CustomDateTimePicker";

export const AuthContextList:any = createContext({});


export const AuthProviderList = (props:any):any =>{
    const modalizeRef = useRef<Modalize>(null);
    const [title,setTitle] = useState('');
    const [description,setDescription] = useState('');
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedTime, setSelectedTime] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [showTimePicker, setShowTimePicker] = useState(false);

    const onOpen = ()=>{
        modalizeRef?.current.open()
    };

    const onClose = ()=> {
        modalizeRef?.current?.close();
    }

    useEffect(()=>{
        onOpen()
    },[])

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const handleTimeChange = (date) => {
        setSelectedTime(date)
    };

    const _container = () =>{
        return (
            <KeyboardAvoidingView
                style={styles.container}
                behavior={Platform.OS === 'ios'?'padding':'height'}
            >
            
                    <View style={styles.header}>
                        <TouchableOpacity onPress={()=>onClose()}>
                            <MaterialIcons
                                name="close"
                                size={30}
                            />
                        </TouchableOpacity>
                        <Text style={styles.title}>Criar tarefa</Text>
                        <TouchableOpacity>
                            <AntDesign
                                name="check"
                                size={30}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.content}>
                        <Input 
                            title="Título:"
                            labelStyle={styles.label}
                            value={title}
                            onChangeText={setTitle}
                        />
                        <Input 
                            title="Descrição:"
                            labelStyle={styles.label}
                            value={description}
                            onChangeText={setDescription}
                        />

                        <View style={{width:'40%'}}>
                            <View style={{flexDirection:'row',gap:10,width:'100%'}}>
                                <TouchableOpacity onPress={()=>setShowDatePicker(true)} style={{width:200}}>
                                <Input 
                                    title="Data Limite"
                                    labelStyle={styles.label}
                                    editable={false}
                                    value={selectedDate.toLocaleDateString()}
                                    onPress={()=>setShowDatePicker(true)}
                                /> 
                                </TouchableOpacity>
                                <TouchableOpacity style={{width:100}}onPress={()=>setShowTimePicker(true)}>
                                <Input 
                                    title="Hora Limite"
                                    labelStyle={styles.label}
                                    editable={false}
                                    value={selectedTime.toLocaleTimeString()}
                                    onPress={()=>setShowTimePicker(true)}
                                /> 
                                </TouchableOpacity>
                            </View>
                        <CustomDateTimerPicker 
                            onDateChange={handleDateChange}
                            setShow={setShowDatePicker}
                            show={showDatePicker}
                            type={'date'}
                        
                        />
                        <CustomDateTimerPicker 
                            onDateChange={handleTimeChange}
                            setShow={setShowTimePicker}
                            show={showTimePicker}
                            type={'time'}
                        
                        />
                        </View>
                        {/* <View style={styles.containerFlag}>
                            <Text style={styles.label}>Flags:</Text>
                            <View style={styles.Rowflags}>
                                
                            </View>
                        </View> */}
                    </View>
                
            </KeyboardAvoidingView>
        )
    }

    return (
        <AuthContextList.Provider value={{onOpen}}>
            {props.children}
            <Modalize
                ref={modalizeRef}
                childrenStyle={{ height: Dimensions.get('window').height/1.7}}  // TAMANHO DA CAIXA DO MODAL!
                adjustToContentHeight={true}
            >
                {_container()}
            </Modalize>
        </AuthContextList.Provider>
    )
}
export const useAuth = ()=> useContext(AuthContextList);

export const styles = StyleSheet.create({
    container:{
        width:'100%'
    },
    header:{
        width:'100%',
        height:40,
        paddingHorizontal:40,
        flexDirection:'row',
        marginTop:20,
        justifyContent:'space-between',
        alignItems:'center'
    },
    title:{
        fontSize:20,
        fontWeight:'bold'
    },
    content:{
        width:'100%',
        paddingHorizontal:20,
    },
    containerFlag:{
        width:'100%',
        padding:10
    },
    label:{
        fontWeight:'bold',
        color:'#000'
    },
    // Rowflags:{
    //     flexDirection:'row',
    //     gap:10,
    //     marginTop:10
    // }
})