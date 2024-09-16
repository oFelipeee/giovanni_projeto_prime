import React, { useEffect, useState } from 'react'
import { StyleSheet, Text } from 'react-native'

export default function Texto() {
    const [texto, setTexto] = useState('Texto do novo componente');

    useEffect(() => {
        setTexto("Texto alterado")
    }, []); 

    return (
        <Text style={estilos.texto}>{texto}</Text>
    )
}

const estilos = StyleSheet.create({
    texto: {
        color: "#CD3333",
        fontWeight: "bold",
        fontSize: 26,
        marginTop: 8,
        marginLeft: 20
    }
});