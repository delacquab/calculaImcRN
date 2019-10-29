import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ImcForm from './src/imc/ImcForm';
import ImcResult from './src/imc/ImcResult';

export default class App extends Component {

  constructor(props) {
    super(props);
  }

  state = {
    showResult: false,
    imc: '',
    classificacao: '',
    grauObsidade: '',
  }

  render() {
    return (
      <View style={styles.container}>
        <ImcForm showResult={this.showResult} />

        {this.state.showResult && (
          <ImcResult classificacao={this.state.classificacao} imc={this.state.imc} grauObsidade={this.state.grauObsidade} /> // componente filho: comunicação por propriedades
        )}

      </View>
    );
  }

  showResult = result => {  // componente pai: tem que criar uma funcao que sera executado no componente filho
    this.setState({
      showResult: true,
      imc: result.imc,
      classificacao: result.classificacao,
      grauObsidade: result.grauObsidade
    });
  }

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },

  resultTitle: {
    fontSize: 20,
    fontWeight: "400",
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 10
  },

  resultDescription: {
    fontSize: 16,
    fontWeight: '400',
    textAlign: 'center',
    color: "#333333",
  },

});
