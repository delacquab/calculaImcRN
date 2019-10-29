import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class ImcResult extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        //debugger;
        return (
            <View>
                <Text style={styles.title}>IMC: {this.props.imc}</Text>
                <Text style={styles.description}>
                    Classificação: {this.props.classificacao}
                </Text>
                <Text style={styles.description}>
                    Grau de Obesidade: {this.props.grauObsidade}
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: "400",
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 10
    },

    description: {
        fontSize: 16,
        fontWeight: '400',
        textAlign: 'center',
        color: "#333333",
    },

});
