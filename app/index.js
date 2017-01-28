
import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';

import Cats from './cats';
import Bars from './bars';

class App extends Component {
  render() {
    return (
    	<View>
    		<Cats></Cats>
	        <Bars></Bars>
    	</View>
    );
  }
}

export default App;