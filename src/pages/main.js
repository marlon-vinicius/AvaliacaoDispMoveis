import React, {Component} from 'react';
import {Keyboard, Text, View, TouchableOpacity, TextInput, StyleSheet,} from 'react-native';

export default class Main extends Component {
  state = {
    newTitulo: '',
    newAutor: '',
    newAnoPublicacao: '',
    newGenero: '',
    newDescricao: '',
    livros: [],
  };

 handleAddLivro = () => {
    const {livros, newTitulo, newAutor, newAnoPublicacao, newGenero, newDescricao} = this.state;

    const newLivro = {
      titulo: newTitulo,
      autor: newAutor,
      ano: newAnoPublicacao,
      genero: newGenero,
      descricao: newDescricao
    };

    this.setState({
      livros: [...livros, newLivro],
      newAutor: '',
      newAnoPublicacao: '',
      newGenero: '',
      newDescricao: ''
    });

    Keyboard.dismiss();
  };

  render() {
    const {livros, newTitulo, newAutor, newAnoPublicacao, newGenero, newDescricao} = this.state;

    return (
      <View>
  
          <TextInput
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Nome do livro"
            value={newTitulo}
            onChangeText={(text) => this.setState({ newTitulo: text })}
          />        
          
          <TouchableOpacity style={styles.button} onPress={handleAddLivro}>
            <Text style={styles.buttonText}>Add Livro</Text>
         </TouchableOpacity>       
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#fff',
    },
    input: {
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
      padding: 10,
      marginVertical: 10,
      width: '80%',
    },
    button: {
      backgroundColor: '#3498db',
      borderRadius: 5,
      padding: 10,
      width: '80%',
      alignItems: 'center',
      marginBottom: 10,
    },
    buttonText: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 18,
    },
  });
