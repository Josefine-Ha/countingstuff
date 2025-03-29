import { StyleSheet } from "react-native";

export const CommonStyles = StyleSheet.create({
  textItem: {
    fontSize: 30,
    fontWeight: "bold",
    flex: 1,
    marginRight: 'auto',
  },
  textItemSmall: {
    fontSize: 20,
    fontWeight: "bold",
  },
  row: {
    borderWidth: 3,
    borderColor: "lightblue",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
    padding: 5,
    paddingEnd: 20,
    paddingStart: 20,
  },
  input: {
    flex: 1,                     // Gör textfältet flexibelt och låter det ta upp maxutrymme
    height: 50,                  // Höjd på textfältet
    paddingHorizontal: 10,       // Utrymme inuti fältet
    marginRight: 10,             // Liten avstånd till knappen 
    fontSize: 20,              // Textstorlek
  },
});
