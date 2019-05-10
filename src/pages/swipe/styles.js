import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#f2f2f2"
  },
  content: {
    flex: 5,
    alignItems: "center",
    justifyContent: "center"
  },
  card: {
    width: 320,
    height: 470,
    backgroundColor: "transparent",
    borderRadius: 5,
    shadowColor: "rgba(0,0,0,0.5)",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.5
  },
  label: {
    lineHeight: 400,
    textAlign: "center",
    fontSize: 55,
    fontFamily: "System",
    color: "#ffffff",
    backgroundColor: "transparent"
  },
  footer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonContainer: {
    width: 220,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  button: {
    shadowColor: "rgba(0,0,0,0.3)",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.5,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 0
  },
  image: { width: 320, height: 470, borderRadius: 45 },
  text: {
    fontWeight: "700",
    fontSize: 18,
    color: "gray"
  },
  orange: {
    width: 55,
    height: 55,
    borderWidth: 6,
    borderColor: "rgb(246,190,66)",
    borderWidth: 4,
    borderRadius: 55,
    marginTop: -15
  },
  green: {
    width: 75,
    height: 75,
    backgroundColor: "#fff",
    borderRadius: 75,
    borderWidth: 6,
    borderColor: "#01df8a"
  },
  red: {
    width: 75,
    height: 75,
    backgroundColor: "#fff",
    borderRadius: 75,
    borderWidth: 6,
    borderColor: "#fd267d"
  }
});
