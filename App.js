import React from "react";
import { Image, Pressable, StyleSheet, Text, View, SafeAreaView } from "react-native";
import Card from "./components/Card/Card";
import {Platform} from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import {ScrollView} from "react-native";
import {Dimensions} from "react-native";
import {SimpleLineIcons, AntDesign, MaterialCommunityIcons} from "@expo/vector-icons";

function App() {
  const { width } = Dimensions.get('window');
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
    <View style={[styles.app, {width: width}]}>
      <View style={styles.header}>
        <Text style={styles.label}>New bank program</Text>
        <Text style={styles.title}>Issuing New cards</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
          exercitationem solut
        </Text>
        <View style={styles.cardType}>
          <SimpleLineIcons name="screen-smartphone" size={24} color="black" />
         <Text style={styles.subTitle}>Virtual Cards</Text>
        </View>
        <>
          <Card isActive statusText="Active" cardName="Card Holder Name" cardNumber="**** 8156"/>
        </>
        <View style={styles.textContainer}>
          <AntDesign name="check" size={24} color="black" />
          <Text style={styles.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            exercitationem
          </Text>
        </View>
        <View style={styles.cardType}>
          <AntDesign name="creditcard" size={24} color="black" />
          <Text style={styles.subTitle}>Physical Cards</Text>
        </View>
        <>
          <Card
            isActive
            statusText="Inactive"
            cardName="Card Holder Name"
            cardNumber="**** 8156"/>
        </>
        <View style={styles.textContainer}>
          <AntDesign name="check" size={24} color="black" />
          <Text style={styles.description}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non vel
            repellat neque quisquam accusantium. Vero ipsum atque reiciendis
            soluta commodi
          </Text>
        </View>
        <View style={styles.textContainer}>
          <AntDesign name="check" size={24} color="black" />
          <Text style={styles.description}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non vel
            repellat neque quisquam accusantium. Vero ipsum
          </Text>
        </View>
        <View style={styles.textContainer}>
          <AntDesign name="check" size={24} color="black" />
          <Text style={styles.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            exercitationem
          </Text>
        </View>
        <View style={styles.cardType}>
          <MaterialCommunityIcons name="credit-card-clock-outline" size={24} color="black" />
          <Text style={styles.subTitle}>Old Cards</Text>
        </View>

        <Card isOld cardName="**4675" cardNumber="Visa debit business | Virtual Card"/>
        <Card isOld cardName="**1123" cardNumber="Visa debit business | Physical Card"/>
        <View style={styles.textContainer}>
          <AntDesign name="check" size={24} color="black" />
          <Text style={styles.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            exercitationem
          </Text>
        </View>
        <View style={styles.textContainer}>
          <AntDesign name="check" size={24} color="black" />
          <Text style={styles.description}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non vel
            repellat neque quisquam accusantium. Vero ipsum atque reiciendis
            soluta commodi
          </Text>
        </View>
      </View>
      <Pressable onPress={() => {}} style={buttonStyles.button}>
        <Text style={buttonStyles.text}>Continue</Text>
      </Pressable>
      <Text style={styles.backBtn}>Back</Text>
    </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingTop: Platform.OS === 'android' ? 25 : 0,
  },
  app: {
    paddingLeft: 15,
    paddingRight: 15,
    marginHorizontal: "auto",
    fontFamily: "system",
    marginTop: 20,
  },
  logo: {
    height: 80,
  },
  label: {
    fontWeight: "bold",
    color: "#b1b2b5",
  },
  title: {
    fontWeight: "bold",
    fontSize: 25,
    marginVertical: 15,
  },
  description: {
    width: "90%",
    fontWeight: "400",
    marginBottom: 20,
    lineHeight: 18,
    marginLeft: 5,
  },
  cardType: {
    display: "flex",
    flexDirection: "row",
  },
  subTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
    marginLeft: 5,
  },
  textContainer: {
    display: "flex",
    flexDirection: "row",
  },
  text: {
    fontWeight: "400",
  },
  backBtn: {
    display: "flex",
    textAlign: "center",
    fontSize: 15,
    marginTop: 10,
    fontWeight: "500",
  },
});

const buttonStyles = StyleSheet.create({
  button: {
    backgroundColor: "black",
    borderRadius: 5,
    width: 320,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: 'center',
    marginTop: 20,
  },
  text: {
    color: "#fff",
    fontWeight: "500",
    textAlign: "center",
    fontSize: 15
  },
});

export default App;
