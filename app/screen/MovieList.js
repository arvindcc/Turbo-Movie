import React, {useEffect, useState} from 'react';
import { SafeAreaView, ScrollView, FlatList, Text } from 'react-native';
import { connect } from 'react-redux';
import {requestMovieList, setLoding, unsetLoding} from '../redux/action'
import {
  Spinner,
  VStack,
} from "native-base"
import MovieCard from '../component'

const MovieList = props => {
  const { movies, requestMovieList, setLoding, unsetLoding} = props
    useEffect(() => {
      setLoding()
      requestMovieList()
      unsetLoding()
      console.log(props)
    }, [])
    
    const renderItem = ({ item }) => (
      <MovieCard {...item} key={item.id}/>
    );

    return (
      <SafeAreaView>
        {!movies?.length && 
          <VStack space={4} alignItems="center"><Spinner size="lg" /></VStack>
        }
          <FlatList
            data={movies}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />        
      </SafeAreaView>
    )
    }
    
    export default connect(
      (store) => (store.movieReducer), 
      {requestMovieList, setLoding, unsetLoding}
    )(MovieList)
    