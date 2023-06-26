import React from "react";
import {
    FlatList,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from "react-native";

import Feather from 'react-native-vector-icons/Feather'

import colors from "../assets/colors";

const renderIngredientsItem = ({item}) => {
    return (
        <View
            style={[
            styles.renderItemWrapper, {
                marginLeft: item.id == 1
                    ? 0
                    : 15
            }
        ]}>
            <Image source={item.image}></Image>
        </View>
    )
}

const Details = ({route, navigation}) => {

    const {item} = route.params;

    return (
        <View style={styles.container}>

            {/* Header */}
            <View style={styles.headerWrapper}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <View style={styles.headerLeft}>
                        <Feather name="chevron-left" size={16}/>
                    </View>
                </TouchableOpacity>

                <View style={styles.headerRight}>
                    <Feather
                        name="star"
                        size={16}
                        style={{
                        color: 'white'
                    }}/>
                </View>
            </View>

            {/* Titles */}
            <View style={styles.titlesWrapper}>
                <Text style={styles.titlesName}>{item.title}</Text>
                <Text style={styles.titlesPrice}>${item.price}</Text>
            </View>

            {/* Detail */}
            <View style={styles.detailWrapper}>
                <View style={styles.detailLeft}>
                    <View style={styles.detailLeftItemInfoWrapper}>
                        <Text style={styles.ItemInfoTitle}>Size</Text>
                        <Text style={styles.ItemInfoText}>{item.sizeName} {item.sizeNumber}"</Text>
                    </View>

                    <View style={styles.detailLeftItemInfoWrapper}>
                        <Text style={styles.ItemInfoTitle}>Crust</Text>
                        <Text style={styles.ItemInfoText}>{item.crust}</Text>
                    </View>

                    <View style={styles.detailLeftItemInfoWrapper}>
                        <Text style={styles.ItemInfoTitle}>Delivery in</Text>
                        <Text style={styles.ItemInfoText}>{item.deliveryTime}
                            min</Text>
                    </View>
                </View>
                <View style={styles.detailRight}>
                    <Image source={item.image}/>
                </View>
            </View>

            {/* Ingredients */}
            <View style={styles.ingredientsWrapper}>
                <View>
                    <Text style={styles.ingredientTitle}>Ingredients</Text>
                </View>

                <View style={styles.ingredientItemWrapper}>
                    <FlatList
                        data={item.ingredients}
                        renderItem={renderIngredientsItem}
                        keyExtractor={item => item.id}
                        horizontal={true}/>
                </View>
            </View>

            {/* Order Button */}
            <View style={styles.orderButtonMainWrapper}>
                <TouchableOpacity onPress={() => alert('Ürün sepete eklendi.')} >
                    <View style={styles.orderButtonWrapper}>
                        <Text style={styles.orderButtonTitle}>Place an order</Text>
                        <Feather name="chevron-right"/>
                    </View>
                </TouchableOpacity>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    headerWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 40,
        paddingHorizontal: 20
    },
    headerLeft: {
        width: 40,
        height: 40,
        borderColor: colors.textGrey,
        borderWidth: 2,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },

    headerRight: {
        backgroundColor: colors.primary,
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },

    titlesWrapper: {
        paddingHorizontal: 20,
        marginTop: 30
    },

    titlesName: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 32,
        fontWeight: '700',
        color: colors.textBlack,
        width: 172
    },

    titlesPrice: {
        marginTop: 20,
        color: colors.price,
        fontFamily: 'Montserrat-Bold',
        fontSize: 32,
        fontWeight: '600'
    },

    detailWrapper: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        overflow: "hidden",
        alignItems: 'center'
    },

    detailLeftItemInfoWrapper: {
        marginTop: 20
    },

    ItemInfoTitle: {
        fontWeight: 500,
        fontSize: 14,
        color: colors.textGrey,
        fontFamily: 'Montserrat-Regular'
    },

    ItemInfoText: {
        marginTop: 5,
        fontFamily: 'Montserrat-Bold',
        fontWeight: '600',
        fontSize: 16
    },

    detailRight: {
        marginLeft: 25
    },

    ingredientsWrapper: {
        paddingHorizontal: 20,
        marginTop: 30
    },

    ingredientTitle: {
        fontFamily: 'Montserrat-Bold',
        fontWeight: '700',
        fontSize: 16
    },

    ingredientItemWrapper: {
        flexDirection: 'row',
        marginTop: 20
    },

    renderItemWrapper: {
        backgroundColor: colors.white,
        width: 100,
        height: 80,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center'
    },

    orderButtonMainWrapper: {
        marginTop: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    orderButtonWrapper: {
        width: 335,
        height: 62,
        backgroundColor: colors.primary,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50
    },
    orderButtonTitle: {
        fontFamily: 'Montserrat-Bold',
        fontWeight: '700',
        fontSize: 14
    }

})

export default Details;
