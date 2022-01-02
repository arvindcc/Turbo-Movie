import React from 'react';
import { Image, View, Text } from 'react-native';
import halfStar from '../assets/img/half-star.png' 
import star from '../assets/img/star.png' 

const MovieCard = ({
    id,
    title,
    background_image,
    rating,
    genres,
    small_cover_image
}) => {
    const getGeneres = generes => {
        if(generes.length = 1)
            return generes[0]
        else
            return generes.reduce((list, genre) => list != '' ? (list + ' | '+genre) : genre + ' | ', '')
    }
    return (
        <View style={{
          display:'flex',
          flexDirection: 'row',
          backgroundColor:'white',
          margin: 12,
          borderRadius: 5,
          borderWidth: 1,
          borderRadius: 5,
          borderColor: '#ddd',
          borderBottomWidth: 0,
          shadowColor: '#000000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.9,
          shadowRadius: 3,
          elevation: 3,
        }}>
          <Image style={{
            flex:2,
            height: 150,
            width: 80
          }} 
          source={{uri: small_cover_image}}
          key={id}
          />
          <View style={{
            flex:3, 
            display:'flex',
            flexDirection: 'column',
            padding:10,
            justifyContent: 'space-between'
          }}>
            <Text style={{
              fontSize: 18,
              color: 'black',
              fontWeight: 'bold'
            }}>{title}</Text>
            <View style={{
              display:'flex',
              flexDirection: 'row',
            }}>
              {
                [1,2,3,4,5,6,7,8,9,10].map(rate => {
                   switch(true){
                    case rate < rating:
                      return <Image source={star} style={{ height: 20, width: 20}}/>
                      break
                    case rate > rating && rating > rate-1:
                      return <Image source={halfStar} style={{ height: 20, width: 20}}/>
                      break
                  }
                })
              }
            </View>
            <Text style={{
              fontSize: 14,
              color: 'green',
            }}
            >{getGeneres(genres)}</Text>
          </View>
        </View>
    )
    }
    
export default MovieCard