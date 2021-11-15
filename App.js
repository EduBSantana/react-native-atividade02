import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import styled from 'styled-components/native'

//Criando View Galeria

const Galeria = styled.View`
  
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin: 2px;

`;

//Criando View de Imagens

const Imagem = styled.View`
  
  background-color: #AAA;
  width: 130px;
  height: 130px;
  justify-content: center;
  align-items: center;

  `;

//Criando View de Imagens Externas

const ImagemExterna = styled.SafeAreaView`
  
  background-color: #747474;
  width: 260px;
  height: 130px;
  justify-content: center;
  align-items: center;

`;

//Estilos

const estilo = StyleSheet.create({

  container: {
    flex: 1
  },

  title: {
    textAlign: 'center',
    marginTop: 40,
    fontSize: 30
  },

  nome: {
    textAlign: 'center',
    fontSize: 20
  },

  categoria: {
    textAlign: 'center',
    margin: 20,
    fontSize: 30
  },

  imagem: {

    width: 110,
    height: 110
    
  },

  externa: {

    width: 240,
    height: 110

  }

});

//Exportando App

export default function  App () {

  return (
   <View style={estilo.container}>
        
        <Text style={estilo.title}> Galeria de Imagens do</Text>
        <Text style={estilo.nome}> Eduardo Barros Santana </Text>

        <Text style={estilo.categoria}> Carros </Text>

        <Galeria>
          
          <Imagem>
            <Image source={ require('./src/images/1.jpg')} style={estilo.imagem} resizeMode='cover' />
          </Imagem>

          <Imagem>
            <Image source={ require('./src/images/2.jpg')} style={estilo.imagem} resizeMode='cover' />
          </Imagem>

          <Imagem>
            <Image source={ require('./src/images/3.jpg')} style={estilo.imagem} resizeMode='cover' />
          </Imagem>

          <Imagem>
            <Image source={ require('./src/images/4.jpg')} style={estilo.imagem} resizeMode='cover' />
          </Imagem>

        </Galeria>

        <Galeria>
          
          <ImagemExterna>
            <Image  source={ {uri: 'https://mcdn.wallpapersafari.com/medium/75/75/e2nwVB.jpg'} } style={estilo.externa} resizeMode='cover'  />
          </ImagemExterna>

        </Galeria>
        
      </View>
  );

}