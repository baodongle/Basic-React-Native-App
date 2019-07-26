import React, { Component } from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const data = require('./assets/Info.json');

export default class App extends Component {
  state = {
    loading: true,
  };

  handleLoad = () => {
    this.setState({ loading: false });
  };

  renderCard = ({ item }) => {
    const { title, image, url } = item;
    const { loading } = this.state;

    return (
      <View style={styles.cardContainer}>
        <View style={styles.cardHeader}>
          <Text style={styles.cardTitle}>{title}</Text>
        </View>
        <View style={styles.cardImageContainer}>
          {loading && <ActivityIndicator style={StyleSheet.absoluteFill} size="large" />}
          <Image source={{ uri: image }} onLoad={this.handleLoad} style={styles.cardImage} />
        </View>
        <View style={styles.cardFooter}>
          <TouchableOpacity
            style={styles.cardButton}
            onPress={() => {
              Linking.openURL(url).catch(err => console.error('An error occurred', err));
            }}
          >
            <Text style={styles.cardButtonText}>More Info</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Basic React Native App</Text>
        <ScrollView>
          <Text style={styles.title}>Top Ten Movies of IMDb</Text>
          <View style={styles.album}>
            <FlatList
              data={data}
              renderItem={this.renderCard}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: '#0097d6',
    color: '#fff',
    fontSize: 25,
    textAlign: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    marginVertical: 15,
  },
  album: {
    paddingHorizontal: 5,
  },
  cardContainer: {
    borderRadius: 2,
    borderWidth: 1,
    borderColor: '#d6d7da',
    marginVertical: 5,
    alignSelf: 'stretch',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  cardHeader: {
    borderBottomWidth: 1,
    borderColor: '#d6d7da',
  },
  cardTitle: {
    margin: 5,
    fontSize: 18,
  },
  cardImageContainer: {
    flex: 1,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    height: 400,
  },
  cardImage: {
    flex: 1,
    width: '100%',
    height: 300,
  },
  cardFooter: {
    borderTopWidth: 1,
    borderColor: '#d6d7da',
  },
  cardButton: {
    borderRadius: 4,
    borderWidth: 1,
    marginHorizontal: 15,
    marginVertical: 5,
    borderColor: '#478dff',
    padding: 10,
  },
  cardButtonText: {
    color: '#007afa',
    fontSize: 20,
    fontWeight: '600',
    alignSelf: 'center',
  },
});
