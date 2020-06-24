import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const ImageItem = props => {
  return (
    <TouchableOpacity onPress={props.onClick}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={{uri: props.image}}
            style={styles.image}
            resizeMode="cover"
          />
        </View>
        <View style={styles.textArea}>
          <Text>{props.title}</Text>
          <Text>Author: {props.author}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ImageItem;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginBottom: 20,
    justifyContent: 'space-between',
    flexDirection: 'row',
    height: 200,
    backgroundColor: 'white',
    shadowOffset: {height: 10},
    shadowOpacity: 0.3,
    borderRadius: 20,
    marginHorizontal: 10,
  },
  imageContainer: {
    width: '50%',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
  },
  textArea: {
    width: '47%',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
});
