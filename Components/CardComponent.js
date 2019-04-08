import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native';
import { Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon } from 'native-base';

class CardComponent extends Component {
  render() {
    const images = {
      '1': require('../assets/hongkong.jpg'),
      '2': require('../assets/hongkong.jpg'),
      '3': require('../assets/hongkong.jpg')
    }
    return (
      <Card>
        <CardItem>
          <Left>
            <Thumbnail source={require('../assets/boni.png')} />
            <Body>
              <Text>Test</Text>
              <Text note>Jan 15, 2018</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem cardBody>
          <Image source={images[this.props.imageSource]} style={{ height: 200, width: null, flex: 1 }} />
        </CardItem>
        <CardItem>
          <Left>
            <Button transparent>
              <Icon name='heart' style={{ color: '#d1cece' }} />
            </Button>
            <Button transparent>
              <Icon name='chatbubbles' style={{ color: '#d1cece' }} />
            </Button>
            <Button transparent>
              <Icon name='send' style={{ color: '#d1cece' }} />
            </Button>
          </Left>
        </CardItem>
        <CardItem style={{ height: 20 }}>
          <Text>{this.props.likes}</Text>
        </CardItem>
        <CardItem>
          <Body>
            <Text>
              <Text style={{ fontWeight: '900' }}>Test</Text>
              This is onlye test, without functionality
            </Text>
          </Body>
        </CardItem>
      </Card>
    )
  }
}

export default CardComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});