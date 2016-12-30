
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image
} from 'react-native';

class helloReactNative extends Component {
  render() {
    return (
        <View>
          <ScrollView
            ref={(scrollView) => { _scrollView = scrollView; }}
            automaticallyAdjustContentInsets={false}
            onScroll={() => { console.log('onScroll!'); }}
            scrollEventThrottle={200}
            style={styles.scrollView}>
            {THUMBS.map(createThumbRow)}
          </ScrollView>
          <TouchableOpacity
            style={styles.button}
            onPress={() => { _scrollView.scrollTo({y: 0}); }}>
            <Text>Scroll to top</Text>
          </TouchableOpacity>
        </View>
    );
  }
}

var Thumb = React.createClass({
  shouldComponentUpdate: function(nextProps, nextState) {
    return false;
  },
  render: function() {
    return (
      <View style={styles.button}>
        <Image style={styles.img} source={{uri:this.props.uri}} />
      </View>
    );
  }
});

var THUMBS = [
'http://loremflickr.com/320/240?random='+Math.round(Math.random()*10000) + 1,
'http://loremflickr.com/320/240?random='+Math.round(Math.random()*10000) + 1,
'http://loremflickr.com/320/240?random='+Math.round(Math.random()*10000) + 1,
'http://loremflickr.com/320/240?random='+Math.round(Math.random()*10000) + 1,
'http://loremflickr.com/320/240?random='+Math.round(Math.random()*10000) + 1
];

THUMBS = THUMBS.concat(THUMBS); // double length of THUMBS
var createThumbRow = (uri, i) => <Thumb key={i} uri={uri} />;

var styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#6A85B1',
    height: 600,
  },
  horizontalScrollView: {
    height: 120,
  },
  containerPage: {
    height: 50,
    width: 50,
    backgroundColor: '#527FE4',
    padding: 5,
  },
  text: {
    fontSize: 20,
    color: '#888888',
    left: 80,
    top: 20,
    height: 40,
  },
  button: {
    margin: 7,
    padding: 5,
    alignItems: 'center',
    backgroundColor: '#eaeaea',
    borderRadius: 3,
  },
  buttonContents: {
    flexDirection: 'row',
    width: 64,
    height: 64,
  },
  img: {
    width: 321,
    height: 200,
  }
});

AppRegistry.registerComponent('helloReactNative', () => helloReactNative);