import React, {useState} from "react";
import { Text, TextInput, View, Button } from "react-native";
import ResultImc from "./ResultImc/index";

export default function Form(){

const [height, setHeight]         = useState(null);
const [weight, setWeight]         = useState(null);
const [messageImc, setMessegeImc] = useState("Preencha o peso e a altura");
const [imc, setImc]               = useState(null);
const [textButton, setTextButton] = useState("Calcular");

function imcCalculator(){
    return setImc((weight/(height*height)).toFixed(2));
}

function validationImc(){
    if(weight != null && height != null){
        imcCalculator()
        setHeight(null)
        setWeight(null)
        setMessegeImc("Seu IMC é: ")
        setTextButton("Calcular novamente")
        return
    }
    setImc(null)
    setTextButton("Calcular")
    setMessegeImc("Preencha os campos!")
}

    return(
        <View>
            <View>
                <Text>Altura:</Text>
                <TextInput
                onChangeText={setHeight}
                value={height}
                placeholder="Ex: 1,71"
                keyboardType="numeric"
                />

                <Text>Peso:</Text>
                <TextInput
                onChangeText={setWeight}
                value={weight}
                placeholder="Ex: 75,345"
                keyboardType="numeric"
                />

                <Button 
                onPress={() => validationImc()}
                title={textButton}/>
            </View>
            <ResultImc messageResultImc={messageImc} 
                       resultImc={imc}/>
        </View>
    );
}