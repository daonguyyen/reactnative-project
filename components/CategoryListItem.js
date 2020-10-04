import React, { Component } from 'react'
import { Image, Text, View, StyleSheet} from 'react-native'
import ssiLogo from './../assets/images/baoviet.png'

export default class CategoryListItem extends Component {
    render() {
        const {category} = this.props;
        return (
            <View style={styles.container}>
                <Text style={styles.title}> {category.name} </Text>
                <Image source={ssiLogo} />
            </View>
        )
    }
}

const styles =  StyleSheet.create({
    container: {
        alignItems: 'center',
        padding: 16,
        borderRadius: 4,
        backgroundColor: '#e0e0e0',
        marginBottom: 16,
        shadowColor: 'red',
        shadowOpacity: .3,
        shadowRadius: 10,
        shadowOffset: { width: 10, height: 10}
    },
    title : {
        textTransform : 'uppercase',
        fontWeight: '700',
        marginBottom: 8
    },
    categoryImage: {
        
    }
})


