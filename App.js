import React, { Component } from 'react';
import { ScrollView, StyleSheet, FlatList } from 'react-native';
import CategoryListItem from './components/CategoryListItem';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      categories: [
        { id : 1, name: 'BaoViet Fund'},
        { id : 2, name: 'SSI Fund'},
        { id : 3, name: 'VFM Fund'},
        { id : 4, name: 'VCB Fund'}
      ]
    }
  }

  render() {
    const { categories } = this.state;
    return (
          <FlatList 
            data={categories}
            renderItem={({ item }) => <CategoryListItem category={item} />}
            keyExtractor={item => `${item.id}`} 
            contentContainerStyle={{paddingLeft: 16, paddingRight: 16}}
            />
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex : 1,
    alignItems: 'stretch',
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingLeft: 16,
    paddingRight: 16
  }
})