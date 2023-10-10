import { Text, StyleSheet } from "react-native";

const Title = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    padding: 12,
    fontFamily: "open-sans-bold",
    fontSize: 18,
    textAlign: "center",
    color: "white",
    borderWidth: 2,
    borderColor: "white",
  },
});
