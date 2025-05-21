import { StyleSheet, Text, View, TouchableOpacity, TouchableHighlight } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import React from 'react'

export default function ItemList({ item, markItem, unmarkItem, removeItem }) {
  return (
    <View style={styles.ItemList}>
      <Text style={item?.bought ? styles.itemBought : styles.itemToBuy}>{item?.name}</Text>
      <TouchableOpacity style={styles.actionIcon}>
        <Ionicons name='bag-check-outline' size={24} color=''/>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.actionIcon, { backgroundColor: "darkred"}]}>
        <Ionicons name='trash-bin-outline' size={24} color=''/>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  itemList: {
    backgroundColor: '#000000c0',
    padding: 15,
    borderRadius: 7,
    borderWidth: 2,
    borderColor: 'black',
    marginVertical: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  itemToBuy: {
    flex: 1,
    color: 'black',
    fontSize: 24,
    textDecorationLine: 'none'
  },
  actionIcon: {
    height: 35,
    width: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    backgroundColor: 'darkgreen'
  }
})
