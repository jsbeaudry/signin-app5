import React from "react";
import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Platform,
  Dimensions,
  Text,
  View,
  Image
} from "react-native";
const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;
import { Ionicons } from "@expo/vector-icons";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        {/* icon  */}
        <Ionicons
          style={{ alignSelf: "center", marginTop: 50, marginBottom: 40 }}
          name={Platform.OS == "ios" ? "ios-images" : "md-images"}
          size={90}
          color="#a85e0a"
        />

        {/* Signin button  */}
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("Signin1")}
          style={{
            marginTop: 20,
            borderRadius: 0,
            backgroundColor: "#a85e0a",
            width: 300,
            height: 63,
            borderWidth: 1,
            marginTop: 10,
            borderColor: "#a85e0a",
            bottom: 0,
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Text style={{ color: "#fff", fontSize: 20 }}>SIGN IN</Text>
        </TouchableOpacity>

        {/* Signup button  */}
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("Signup1")}
          style={{
            backgroundColor: "#fff",
            width: 300,
            height: 63,
            borderWidth: 1,
            borderRadius: 0,
            borderColor: "#a85e0a",
            bottom: 0,
            marginTop: 10,
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Text style={{ color: "#a85e0a", fontSize: 20 }}>SIGN UP</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF"
  }
});
