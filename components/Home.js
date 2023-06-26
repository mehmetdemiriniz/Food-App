import React from "react";
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    Image,
    FlatList,
    ScrollView,
    TouchableOpacity
} from "react-native";

import Feather from 'react-native-vector-icons/Feather'
import colors from "../assets/colors";
import categoryData from "../assets/data/categoryData";
import popularData from "../assets/data/popularData";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

Feather.loadFont();
MaterialCommunityIcons.loadFont();

const RenderCategoryItem = ({item}) => {
    return (
        <View
            style={[
            styles.categoryItemWrapper, {
                backgroundColor: item.selected
                    ? colors.primary
                    : colors.white
            }
        ]}>
            <Image source={item.image} style={styles.categoryItemImage}/>
            <Text style={styles.categoryItemText}>{item.title}</Text>
            <View
                style={[
                styles.categoryItemChevronWrapper, {
                    backgroundColor: item.selected
                        ? colors.white
                        : colors.secondary
                }
            ]}>
                <Feather
                    name="chevron-right"
                    color={item.selected
                    ? colors.black
                    : colors.white}
                    size={16}/>
            </View>
        </View>
    );
}

const Home = ({navigation}) => {
    return (
        <View style={{
            flex: 1
        }}>

            <ScrollView
                showsVerticalScrollIndicator={false}
                automaticallyAdjustContentInsets={true}>

                <SafeAreaView>

                    <View style={styles.header}>
                        <Image
                            source={require('../assets/images/profile.png')}
                            style={styles.headerImage}/>
                        <Feather name="menu" size={24} color={colors.textBlack}/>
                    </View>

                    <View style={styles.titlesWrapper}>
                        <Text style={styles.subTitle}>Food</Text>
                        <Text style={styles.mainTitle}>Delivery</Text>
                    </View>

                    <View style={styles.searchWrapper}>
                        <Feather name="search" size={16} color={colors.textBlack}/>
                        <View style={styles.search}>
                            <Text style={styles.searchText}>Search...</Text>
                        </View>
                    </View>

                    <View style={styles.categoriesWrapper}>
                        <Text style={styles.categoriesTitle}>
                            Categories
                        </Text>
                        <View style={styles.categoriesDataWrapper}>
                            <FlatList
                                data={categoryData}
                                renderItem={RenderCategoryItem}
                                keyExtractor={item => item.id}
                                horizontal={true}/>
                        </View>
                    </View>

                    <View style={styles.popularWrapper}>
                        <Text style={styles.popularTitle}>Popular</Text>
                        {popularData.map((item) => (
                            <TouchableOpacity
                                key={item.id}
                                onPress={() => navigation.navigate('Details', {item: item})}>
                                <View
                                    style={[
                                    styles.popularCardWrapper, {
                                        marginTop: item.id == 1
                                            ? 10
                                            : 20
                                    }
                                ]}>

                                    <View style={styles.popularCardTopHeader}>
                                        <MaterialCommunityIcons size={12} name="crown" color={colors.primary}/>
                                        <Text style={styles.popularCardTopTitle}>top of the week</Text>
                                    </View>

                                    <View style={styles.popularCardTitles}>
                                        <Text style={styles.popularCardTitlesTitle}>{item.title}</Text>
                                        <Text style={styles.popularCardTitlesWeight}>Weight {item.weight}</Text>
                                    </View>

                                    <View style={styles.popularCardBottomWrapper}>

                                        <View style={styles.popularCardBottomPlusWrapper}>
                                            <Feather name="plus" size={10}/>
                                        </View>

                                        <View style={styles.popularCardBottomRatingWrapper}>
                                            <Feather name="star" size={10}/>
                                            <Text style={styles.popularCardBottomRatingText}>5.0</Text>
                                        </View>

                                    </View>

                                    <View style={styles.popularCardBottomImageWrapper}>
                                        <Image source={item.image} style={styles.popularCardBottomImage}/>
                                    </View>

                                </View>
                            </TouchableOpacity>
                        ))}
                    </View>

                </SafeAreaView>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#F9F9FB'
    },
    header: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        paddingTop: 20,
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    headerImage: {
        width: 40,
        height: 40,
        borderRadius: 40
    },

    titlesWrapper: {
        marginTop: 20,
        paddingHorizontal: 20
    },

    subTitle: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 16,
        fontWeight: '400',
        color: colors.textBlack
    },

    mainTitle: {
        fontSize: 32,
        marginTop: 5,
        fontFamily: 'Montserrat-Bold',
        fontWeight: '700',
        color: colors.textBlack
    },

    searchWrapper: {
        marginTop: 20,
        flexDirection: 'row',
        paddingHorizontal: 20,
        alignItems: 'center'
    },

    search: {
        flex: 1,
        marginLeft: 10,
        borderBottomColor: colors.textGrey,
        borderBottomWidth: 2
    },

    searchText: {
        color: colors.textGrey,
        fontFamily: 'Montserrat-Bold',
        fontWeight: '600',
        paddingBottom: 5
    },

    categoriesWrapper: {
        marginTop: 20,
        paddingHorizontal: 20
    },

    categoriesTitle: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 16,
        fontWeight: '700'
    },

    categoriesDataWrapper: {
        paddingTop: 15,
        paddingBottom: 20,
        shadowColor: colors.black,
        shadowOpacity: 0.5,
        shadowOffset: {
            width: 0,
            height: 2
        }
    },

    categoryItemWrapper: {
        width: 105,
        height: 177,
        borderRadius: 20,
        marginRight: 20,
        alignItems: 'center'
    },

    categoryItemImage: {
        marginTop: 15,
        alignSelf: 'center',
        width: 60,
        height: 60
    },

    categoryItemText: {
        marginTop: 10,
        fontFamily: 'Montserrat-Bold',
        fontSize: 14,
        fontWeight: '600',
        color: colors.textBlack,
        textAlign: 'center'
    },

    categoryItemChevronWrapper: {
        width: 26,
        height: 26,
        borderRadius: 26,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    },

    popularWrapper: {
        paddingHorizontal: 20
    },

    popularTitle: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 16,
        fontWeight: '700'
    },

    popularCardWrapper: {
        backgroundColor: colors.white,
        borderRadius: 25,
        marginTop: 10,
        overflow: "hidden"
    },

    popularCardTopHeader: {
        paddingHorizontal: 20,
        paddingTop: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },

    popularCardTopTitle: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 14,
        fontWeight: '600',
        marginLeft: 10
    },

    popularCardTitles: {
        paddingHorizontal: 20
    },

    popularCardTitlesTitle: {
        marginTop: 10,
        color: colors.textBlack,
        fontFamily: 'Montserrat-Bold',
        fontWeight: '600',
        fontSize: 14
    },

    popularCardTitlesWeight: {
        marginTop: 5,
        color: colors.grey,
        fontWeight: '500',
        fontFamily: 'Montserrat-Regular'
    },

    popularCardBottomWrapper: {
        flexDirection: 'row',
        marginTop: 5
    },

    popularCardBottomPlusWrapper: {
        width: 90,
        height: 53,
        borderTopRightRadius: 25,
        borderBottomLeftRadius: 25,
        backgroundColor: colors.primary,
        alignItems: 'center',
        justifyContent: 'center'
    },

    popularCardBottomRatingWrapper: {
        flexDirection: 'row',
        marginLeft: 20,
        alignItems: 'center'
    },

    popularCardBottomRatingText: {
        marginLeft: 5,
        fontFamily: 'Montserrat-Bold',
        color: colors.textBlack,
        fontSize: 12
    },

    popularCardBottomImageWrapper: {
        marginLeft: 40
    },

    popularCardBottomImage: {
        width: 210,
        height: 125,
        resizeMode: 'contain',
        marginTop: -130,
        marginLeft: 120
    }
});

export default Home;
