import React, {useEffect} from 'react';
import { SafeAreaView, FlatList, StatusBar, Text} from 'react-native';
import { connect } from 'react-redux';
import {requestMovieList} from '../redux/action'
import {
  Spinner,
  VStack,
} from "native-base"
import MovieCard from '../component'

const MovieList = props => {
  const { user, movies, requestMovieList, navigation} = props
    useEffect(() => {
      !movies?.length && requestMovieList()
    }, [])
    
    const renderItem = ({ item }) => (
      <MovieCard {...item} key={item.id}/>
    );

    return (
      <SafeAreaView style={{
        display:'flex',
        padding: 10,
        backgroundColor: 'white'
      }}>
        {!movies?.length && 
          <VStack space={4} alignItems="center" justifyContent='center'>
              <Spinner size="lg" />
          </VStack>
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
      {requestMovieList}
    )(MovieList)
    