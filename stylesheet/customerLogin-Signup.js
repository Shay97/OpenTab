import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E5E5E5",
    alignContent: "space-between",
  },

  header: {
    fontWeight: "bold",
    fontSize: 24,
    marginTop: 50,
    paddingTop: 100,
    paddingLeft: 50,
  },

  emailHeader: {
    fontWeight: "bold",
    paddingLeft: 50,
    marginTop: 70,
    fontSize: 12,
  },

  emailInput: {
    width: 300,
    height: 50,
    paddingLeft: 5,
    marginLeft: 50,
    justifyContent: "center",
    backgroundColor: "#F1F1F1",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
  },

  passwordHeader: {
    fontWeight: "bold",
    paddingLeft: 50,
    marginTop: 20,
    fontSize: 12,
  },

  passwordInput: {
    width: 300,
    height: 50,
    paddingLeft: 5,
    marginLeft: 50,
    justifyContent: "center",
    backgroundColor: "#F1F1F1",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
  },

  forgotpasswordHeader: {
    color: "#FF9466",
    paddingTop: 10,
    paddingLeft: 50,
    fontSize: 12,
  },

  button: {
    marginTop: 45,
    marginLeft: 140,
    height: 35,
    width: 122,
  },
});

export { styles };
