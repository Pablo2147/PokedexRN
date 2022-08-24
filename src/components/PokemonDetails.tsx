import React from 'react';
import {Text, ScrollView, StyleSheet, View} from 'react-native';
import {PokemonFull} from '../interfaces/pokemonInterfaces';
import {FadeInImage} from './FadeInImage';

interface Props {
  pokemon: PokemonFull;
}

export const PokemonDetails = ({pokemon}: Props) => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{
        ...StyleSheet.absoluteFillObject,
        marginBottom: 50,
      }}>
      <View style={{...styles.container, marginTop: 380}}>
        <Text style={{...styles.title}}>Types</Text>
        <View style={{flexDirection: 'row'}}>
          {pokemon.types.map(({type}) => (
            <Text key={type.name} style={{...styles.regularText}}>
              {type.name}
            </Text>
          ))}
        </View>

        <Text style={{...styles.title}}>Peso</Text>
        <Text style={{...styles.regularText}}>{pokemon.weight}Kg.</Text>
      </View>

      <View style={{...styles.container}}>
        <Text style={{...styles.title}}>Sprites</Text>
      </View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <FadeInImage
          uri={pokemon.sprites.front_default}
          style={{...styles.basicSprite}}
        />
        <FadeInImage
          uri={pokemon.sprites.back_default}
          style={{...styles.basicSprite}}
        />
        <FadeInImage
          uri={pokemon.sprites.front_shiny}
          style={{...styles.basicSprite}}
        />
        <FadeInImage
          uri={pokemon.sprites.back_shiny}
          style={{...styles.basicSprite}}
        />
      </ScrollView>

      <View style={{...styles.container, marginTop: -5}}>
        <Text style={{...styles.title}}>Habilidades Base</Text>
        <View style={{flexDirection: 'row'}}>
          {pokemon.abilities.map(({ability}) => (
            <Text key={ability.name} style={{...styles.regularText}}>
              {ability.name}
            </Text>
          ))}
        </View>
      </View>

      <View style={{...styles.container, marginTop: -5}}>
        <Text style={{...styles.title}}>Movimientos</Text>
        <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
          {pokemon.moves.map(({move}) => (
            <Text key={move.name} style={{...styles.regularText}}>
              {move.name}
            </Text>
          ))}
        </View>
      </View>

      <View style={{...styles.container, marginTop: -5}}>
        <Text style={{...styles.title}}>Stats</Text>
        <View>
          {pokemon.stats.map((stat, i) => (
            <View style={{flexDirection: 'row'}} key={stat.stat.name + i}>
              <Text style={{...styles.regularText, width: 150}}>
                {stat.stat.name}
              </Text>
              <Text style={{...styles.regularText, fontWeight: 'bold'}}>
                {stat.base_stat}
              </Text>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 20,
  },
  regularText: {
    fontSize: 18,
    marginRight: 10,
  },
  basicSprite: {
    height: 100,
    width: 100,
  },
});
