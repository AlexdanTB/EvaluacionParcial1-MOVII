import React from 'react'
import { styles } from '../theme/appStyle'
import { FlatList, View } from 'react-native'
import { products } from '../../assets/data/products'
import { Text } from 'react-native-paper'

export const HomeScreen = () => {
    return (
        <View style={styles.containerHome}>
                <Text variant='headlineSmall' style={{textAlign:"center", margin:8}}>Lista de productos</Text>
            <FlatList
            data={products}
            renderItem={({item})=>
                <View style={styles.cardProduct}>
                    <Text variant='titleMedium'>{item.name}</Text>
                    <Text variant='titleMedium' style={{color:"#666565ff"}}>${item.price}</Text>
                </View>
            }/>
            <View>
                <Text variant='titleLarge' style={{textAlign:"center", margin:12}}>Total = $</Text>                
            </View>
        </View>
    )
}
