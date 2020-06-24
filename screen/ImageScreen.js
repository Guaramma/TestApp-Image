import React, {useEffect, useState} from 'react';
import {StyleSheet, Image, View, ActivityIndicator} from 'react-native';
import axios from '../axios/axios';
import {HeaderTitle} from '@react-navigation/stack';

const ImageScreen = props => {
  const [loadedData, setLoadedData] = useState('');
  const id = props.route.params.id;

  useEffect(() => {
    const request = async () => {
      try {
        const response = await axios.get(`/photos/${id}`);
        setLoadedData(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    request();
  }, [id]);

  if (!loadedData) {
    return (
      <View style={styles.imageContainer}>
        <ActivityIndicator size="large" color="green" />
      </View>
    );
  }

  if (loadedData) {
    return (
      <View style={styles.imageContainer}>
        <Image
          source={{uri: loadedData.urls.full}}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
    );
  }
};

export const ScreenOptions = () => {
  return {
    headerTitle: 'Image Screen',
  };
};

export default ImageScreen;

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: 500,
  },
});
