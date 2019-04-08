import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView
} from 'react-native';
import { Container, Content, Icon, Thumbnail } from 'native-base';

import CardComponent from '../CardComponent'

class HomeTab extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name='home' style={{ color: tintColor }} />
    )
  }

  render() {
    return (
      <Container style={styles.container}>
        <Content>
          <View style={{ height: 100 }}>
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 7 }}>
              <Text style={{ fontWeight: 'bold' }}>Stories</Text>
              <View style={{ flexDirection: 'row', 'alignItems': 'center' }}>
                <Icon name='md-play' style={{ fontSize: 14 }} />
                <Text style={{ fontWeight: 'bold' }}> Watch All</Text>
              </View>
            </View>
            <View style={{ flex: 3 }}>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                  alignItems: 'center',
                  paddingStart: 5,
                  paddingEndL: 5
                }}
              >
                <Thumbnail style={{ marginHorizontal: 5, borderColor: 'pink', borderWidth: 2 }} source={require('../../assets/boni.png')} />
                <Thumbnail style={{ marginHorizontal: 5, borderColor: 'pink', borderWidth: 2 }} source={require('../../assets/boni.png')} />
                <Thumbnail style={{ marginHorizontal: 5, borderColor: 'pink', borderWidth: 2 }} source={require('../../assets/boni.png')} />
                <Thumbnail style={{ marginHorizontal: 5, borderColor: 'pink', borderWidth: 2 }} source={require('../../assets/boni.png')} />
              </ScrollView>
            </View>
          </View>
          <CardComponent imageSource='1' likes='101 likes' />
          <CardComponent imageSource='2' likes='201 likes' />
          <CardComponent imageSource='3' likes='301 likes' />
        </Content>
      </Container>
    )
  }
}

export default HomeTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  }
});