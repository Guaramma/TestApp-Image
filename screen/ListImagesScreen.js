import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import axios from '../axios/axios';
import {FlatList} from 'react-native-gesture-handler';
import ImageItem from '../components/ImageItem';

const ListImagesScreen = props => {
  const [loadedData, setLoadedData] = useState([]);
  useEffect(() => {
    const request = async () => {
      try {
        const response = await axios.get('/photos');
        setLoadedData(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    request();
  }, []);

  const ImageDetailHandler = id => {
    props.navigation.navigate('ImageScreen', {id: id});
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={loadedData}
        renderItem={({item}) => (
          <ImageItem
            title={item.description}
            author={item.user.username}
            image={item.urls.small}
            onClick={() => ImageDetailHandler(item.id)}
          />
        )}
      />
    </View>
  );
};

export const ScreenOptions = () => {
  return {
    headerTitle: 'Image App',
  };
};

export default ListImagesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
