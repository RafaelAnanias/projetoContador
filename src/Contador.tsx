import { useState } from 'react'
import { Text, Button, StyleSheet, View } from 'react-native'
const Contador = ({ inicial = 0, passo = 1 }) => {
    const [numero, setNumero] = useState(inicial)
    let inc = () => setNumero(numero + passo)
    let dec = () => setNumero(numero - passo)
    return (
        <View>
            <Text style={styles.txt}>{numero}</Text>
            <View>
                <Button color="rgb(192, 88, 24)" title=" + " onPress={inc} />
                <Button color="rgb(5, 20, 224)" title=" - " onPress={dec} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection: "row",
        alignItems: "center"

    },
    txt: {
        fontSize: 20,
        marginHorizontal: 20,
        

    }
})
export default Contador



