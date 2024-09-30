import React, { useEffect, useState } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

export default function Contador() {
    const [count, setCount] = useState(0);
    const [msg, setMsg] = useState(' ');

    useEffect(() => {
        setMsg('O valor do count foi atualizado  ' + count + '  Vez(es)')
    }, [count])

    return (
        <>
            <Text style={estilos.texto}>Voçê clicou aqui: {count} </Text>
            <Text>{msg}</Text>

            <View style={estilos.buttonList}>
                <Button
                    onPress={() => {
                        setCount(count + 1)
                    }}
                    title='Aumentar' />
            </View>

            <View style={estilos.buttonList}>
                <Button
                    onPress={() => {
                        setCount(count - 1)
                    }}
                    title='Diminuir' />
            </View>
        </>
    )
}

const estilos = StyleSheet.create({
    buttonList: {
        padding: 10
    },
    texto: {
        color: "black",
        fontWeight: "bold",
        fontSize: 20,
        marginTop: 8,
        marginLeft: 20
    }
})
