import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import {FontAwesome} from "@expo/vector-icons";

function Card({
                isActive,
                statusText,
                cardName,
                cardNumber,
                isOld,
              }) {
  return (
    <View style={isOld ? styles.Oldcard : styles.card  }>
      {isActive && (
        <View style={styles.cardStatus}>
          <View style={statusText==="Active" ? styles.cardStatusTextContainer : styles.cardStatusTextInactive}>
            <Text style={styles.cardStatusText}>{statusText}</Text>
          </View>
        </View>
      )}
      <View style={styles.cardInfo}>
        <View style={styles.visa}>
          <FontAwesome name="cc-visa" size={50} color={isOld ? "gainsboro" : "#0a47e3"} />
        </View>
        <View style={styles.cardNumber}>
          <Text style={styles.cardNumberHolderText}>{cardName}</Text>
          <Text style={isOld ? styles.oldCardNumberText : styles.cardNumberText}>{cardNumber}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    height: 110,
    backgroundColor: "#f4f5f7",
    borderRadius: 7,
    marginVertical: 20,
    padding: 10,
    paddingRight: 20,
  },
  Oldcard: {
    height: 60,
    width: "75%",
    borderRadius: 7,
    marginVertical: 10,
    padding: 10,
  },
  cardStatus: {
    display: "flex",
    alignItems: "flex-end",
  },

  cardStatusTextContainer: {
    display: "flex",
    width: 70,
    height: 27,
    backgroundColor: "#0ed970",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6,
  },
  cardStatusText: {
    color: 'white',
    fontSize: 15,
    fontWeight: "500",
  },
  cardStatusTextInactive: {
    display: "flex",
    width: 80,
    height: 27,
    backgroundColor: "#abb1ba",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6,
    color: "white",
  },
  cardInfo: {
    display: "flex",
    flexDirection: "row",
    marginLeft: 10,
  },
  cardNumber: {
    marginLeft: 15,
  },
  cardNumberHolderText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  cardNumberText: {
    color: "#747d8b",
    marginTop: 9,
    fontSize: 16,
  },
  oldCardNumberText: {
    color: "#747d8b",
    marginTop: 9,
    fontSize: 14,
  }
});

export default Card;
