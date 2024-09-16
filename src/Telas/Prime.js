import React from 'react'
import { StyleSheet, Text, View } from 'react-native';


export default function Prime() {
    return (
        <>
            <View style={estilos.topo}>
                <Text style={estilos.titleTopo}>Detalhes do Sistema</Text>
            </View>

            <View style={estilos.listaDescricao}>
                <Text style={estilos.nomeLista}>Lista de compra</Text>
            </View>

            <View>
                <Text style={estilos.title}>Maçã</Text>
                <Text style={estilos.descricao}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </Text>
                <Text style={estilos.preco}>
                    R$ 40,00
                </Text>
            </View>

            <View>
                <Text style={estilos.title}>Celular Samsung</Text>
                <Text style={estilos.descricao}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </Text>
                <Text style={estilos.preco}>
                    R$ 450,00
                </Text>
            </View>

            <View>
                <Text style={estilos.title}>Camisa</Text>
                <Text style={estilos.descricao}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </Text>
                <Text style={estilos.preco}>
                    R$ 20,00
                </Text>
            </View>
        </>
    )
}


const estilos = StyleSheet.create({
    topo: {
        width: "100%",
        height: 150,
        backgroundColor: "#8470FF"
    },
    titleTopo: {
        width: "100%",
        textAlign: "center",
        paddingTop: 60,
        fontSize: 27,
        color: "white",
        fontWeight: "bold"
    },
    listaDescricao: {
        paddingTop: 20,
        fontSize: 15,
        marginLeft: 20
    },
    nomeLista: {
        fontWeight: "bold",
        fontSize: 24
    },
    descricao: {
        paddingTop: 20,
        color: "#483D8B",
        marginLeft: 20,
        fontSize: 16,
        lineHeight: 26
    },
    preco: {
        color: "#228B22",
        fontWeight: "bold",
        fontSize: 20,
        marginTop: 8,
        marginLeft: 20
    },
    title: {
        fontSize: 22,
        paddingTop: 20,
        fontWeight: "bold",
        marginLeft: 20
    }
})