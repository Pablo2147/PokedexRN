import React from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {
  ActivityIndicator,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {RootStackParams} from '../navigation/Tab1Navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {FadeInImage} from '../components/FadeInImage';
import {usePokemon} from '../hooks/usePokemon';
import {PokemonDetails} from '../components/PokemonDetails';

interface Props extends StackScreenProps<RootStackParams, 'PokemonScreen'> {}

export const PokemonScreen = ({route: {params}, navigation}: Props) => {
  const {pokemon, color} = params;
  const {id, name, picture} = pokemon;
  const {top} = useSafeAreaInsets();

  const {pokemon: pokemonFull, isLoading} = usePokemon(id);

  return (
    <View style={{flex: 1}}>
      <View style={{...styles.headerContainer, backgroundColor: color}}>
        <TouchableOpacity
          onPress={navigation.goBack}
          style={{...styles.backButton, top}}
          activeOpacity={0.8}>
          <Icon name="arrow-back-outline" color="white" size={30} />
        </TouchableOpacity>

        <Text style={{...styles.pokemonName, top: top + 30}}>
          {name + '\n'}#{id}
        </Text>

        <Image
          style={{...styles.pokeball}}
          source={require('./../assets/pokebola-blanca.png')}
        />

        <FadeInImage uri={picture} style={{...styles.pokemonImage}} />
      </View>

      {isLoading ? (
        <View style={{...styles.loadindIndicator}}>
          <ActivityIndicator color={color} size={70} />
        </View>
      ) : (
        <PokemonDetails pokemon={pokemonFull} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    height: 370,
    zIndex: 999,
    alignItems: 'center',
    borderBottomLeftRadius: 750,
    borderBottomRightRadius: 750,
  },
  backButton: {
    position: 'absolute',
    left: 20,
  },
  pokemonName: {
    color: 'white',
    fontSize: 40,
    alignSelf: 'flex-start',
    left: 20,
  },
  pokeball: {
    height: 250,
    width: 250,
    bottom: -10,
    opacity: 0.2,
  },
  pokemonImage: {
    width: 300,
    height: 300,
    position: 'absolute',
    bottom: -20,
  },
  loadindIndicator: {
    flex: 1,
    justifyContent: 'center',
  },
});
