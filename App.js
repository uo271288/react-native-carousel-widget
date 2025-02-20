import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import DetailPage from "./components/detail.component";
import { View, Text, Dimensions, StyleSheet, Image, Alert } from "react-native";
import CarouselComponent from "child-cozy-menu";

const Stack = createStackNavigator();

const { width } = Dimensions.get("window");
const ITEM_WIDTH = width * 0.25;
const ITEM_HEIGHT = 300;

const menuItems = [
  {
    title: "Animales",
    image: "https://api.arasaac.org/v1/pictograms/6901",
  },
  {
    title: "Familia",
    image: "https://api.arasaac.org/v1/pictograms/11731",
  },
  {
    title: "Estaciones",
    image: "https://api.arasaac.org/v1/pictograms/5464",
  },
  {
    title: "Juegos",
    image: "https://api.arasaac.org/v1/pictograms/36405",
  },
  /* {
    title: "Frutas",
    image: "https://api.arasaac.org/v1/pictograms/28339",
  }, */
];

const carouselData = {
  0: [
    {
      title: "Item 1A",
      // image: "https://api.arasaac.org/v1/pictograms/25187",
    },
    { title: "Item 2A" },
    { title: "Item 3A" },
    { title: "Item 4A" },
    { title: "Item 5A" },
    { title: "Item 6A" },
    { title: "Item 7A" },
    { title: "Item 8A" },
  ],
  1: [
    { title: "Item 1B" },
    { title: "Item 2B" },
    { title: "Item 3B" },
    { title: "Item 4B" },
    { title: "Item 5B" },
    { title: "Item 6B" },
  ],
  2: [
    { title: "Item 1C" },
    { title: "Item 2C" },
    { title: "Item 3C" },
    { title: "Item 4C" },
  ],
  3: [{ title: "Item 1D" }, { title: "Item 2D" }],
};

const renderCard = (item) => (
  <View style={styles.card}>
    <Text style={styles.cardText}>{item.title}</Text>
    {/* <Image
      source={{ uri: item.image }}
      style={styles.menuImage}
      resizeMode="contain"
    /> */}
  </View>
);

const renderFilters = (item) => (
  <View style={styles.menuItem}>
    <Image
      source={{ uri: item.image }}
      style={styles.menuImage}
      resizeMode="contain"
    />
    <Text style={styles.menuText}>{item.title}</Text>
  </View>
);

const handleRepresentationClick = (index) => {
  console.log("Representation clicked:", index);
};

const handleCardClick = (item, navigation) => {
  console.log("Card clicked:", item);
  //navigation.navigate("DetailPage", { item });
  Alert.alert("Alert Title", "My Alert Msg", [
    {
      text: "Cancel",
      onPress: () => console.log("Cancel Pressed"),
      style: "cancel",
    },
    { text: "OK", onPress: () => console.log("OK Pressed") },
  ]);
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home">
          {(props) => (
            <CarouselComponent
              {...props}
              menuItems={menuItems}
              carouselData={carouselData}
              renderCarouselItem={renderCard}
              renderMenuItems={renderFilters}
              onMenuItemClick={handleRepresentationClick}
              onCarouselItemClick={(item) =>
                handleCardClick(item, props.navigation)
              }
            />
          )}
        </Stack.Screen>
        <Stack.Screen name="DetailPage" component={DetailPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  card: {
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
    backgroundColor: "#8498db",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
    shadowColor: "#000",
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 5,
    elevation: 5,
  },
  cardText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  menuItem: {
    alignItems: "center",
    marginHorizontal: 10,
    marginVertical: 10,
  },
  menuImage: {
    width: 100,
    height: 100,
  },
  menuText: {
    marginTop: 5,
    fontSize: 20,
    textAlign: "center",
  },
});

export default App;
