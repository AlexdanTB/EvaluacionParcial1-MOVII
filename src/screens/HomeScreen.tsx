import React from 'react'
import { styles } from '../theme/appStyle'
import { FlatList, View } from 'react-native'
import { products } from '../../assets/data/products'
import { Text } from 'react-native-paper'

export const HomeScreen = () => {
    return (
        <View style={styles.containerHome}>
            <View style={styles.headerHome}>
                <Text variant='headlineSmall'>Lista de productos</Text>
            </View>
            <FlatList
            data={products}
            renderItem={({item})=>
                <View style={styles.cardProduct}>
                    <Text variant='labelLarge'>{item.name}</Text>
                </View>
            }/>
        </View>
    )
}
