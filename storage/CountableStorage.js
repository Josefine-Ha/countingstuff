import AsyncStorage from "@react-native-async-storage/async-storage";

const COUNTABLES_KEY = "countables";

export const saveCountables = async (countables) => {
  await AsyncStorage.setItem(COUNTABLES_KEY, JSON.stringify(countables));
};

export const loadCountables = async () => {
  const result = await AsyncStorage.getItem("countables");
  return result ? JSON.parse(result) : [];
};

export const addCountable = async (newCountable)=> { 
  const countables = await loadCountables();

  const nameExists = countables.some(
    (item) => item.name.toLowerCase() === newCountable.name.toLowerCase()
  );
  if (nameExists) {
    throw new Error("Name already exists");
  }
  const updatedCountables = [...countables, newCountable];
  await saveCountables(updatedCountables);
  return updatedCountables;
}
