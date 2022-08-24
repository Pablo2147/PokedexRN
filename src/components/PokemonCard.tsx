import React, {useState, useRef, useEffect} from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {SimplePokemon} from '../interfaces/pokemonInterfaces';
import {FadeInImage} from './FadeInImage';
import {getImageColors} from '../helpers/getColors';

interface Props {
  pokemon: SimplePokemon;
}

const windowWidth = Dimensions.get('window').width;

export const PokemonCard = ({pokemon}: Props) => {
  const {navigate} = useNavigation();
  const [bgColor, setBgColor] = useState('grey');

  useEffect(() => {
    getBGImageColors(pokemon.picture);
  }, []);

  const getBGImageColors = async (uri: string) => {
    const {primary = 'grey'} = await getImageColors(uri);
    setBgColor(primary);
  };

  return (
    <TouchableOpacity
      onPress={() => navigate('PokemonScreen', {pokemon, color: bgColor})}
      activeOpacity={0.8}>
      <View
        style={{
          ...styles.cardContainer,
          width: windowWidth * 0.4,
          backgroundColor: bgColor,
        }}>
        <View>
          <Text style={{...styles.name}}>
            {pokemon.name}
            {'\n#' + pokemon.id}
          </Text>
        </View>
        <View style={{...styles.pokebolaContainer}}>
          <Image
            source={require('./../assets/pokebola-blanca.png')}
            style={{...styles.pokebola}}
          />
        </View>
        <FadeInImage uri={pokemon.picture} style={{...styles.pokemonImage}} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    marginHorizontal: 10,
    height: 120,
    marginBottom: 25,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  name: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    top: 20,
    left: 10,
  },
  pokebolaContainer: {
    width: 100,
    height: 100,
    position: 'absolute',
    bottom: 0,
    right: 0,
    overflow: 'hidden',
  },
  pokebola: {
    height: 100,
    width: 100,
    position: 'absolute',
    bottom: -25,
    right: -25,
    opacity: 0.5,
  },
  pokemonImage: {
    width: 120,
    height: 120,
    position: 'absolute',
    right: -8,
    bottom: -5,
  },
});
