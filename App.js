import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import CarouselComponent from "./components/carousel.component";
import DetailPage from "./components/detail.component";
import { View, Text, Dimensions, StyleSheet } from "react-native";

const Stack = createStackNavigator();

const { width } = Dimensions.get("window");
const ITEM_WIDTH = width * 0.25;
const ITEM_HEIGHT = 150;

const menuItems = [
  { title: "Representation 1", image: "https://picsum.photos/id/237/200" },
  { title: "Representation 2", image: "https://picsum.photos/id/42/200" },
  { title: "Representation 3", image: "https://picsum.photos/id/325/200" },
  { title: "Representation 4", image: "https://picsum.photos/id/3/200" },
];

const carouselData = {
  0: [
    { title: "Item 1A" },
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
  </View>
);

const handleRepresentationClick = (index) => {
  console.log("Representation clicked:", index);
};

const handleCardClick = (item, navigation) => {
  console.log("Card clicked:", item);
  navigation.navigate("DetailPage", { item });
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
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 5,
    elevation: 5,
  },
  cardText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default App;
