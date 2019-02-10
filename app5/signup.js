import React from "react";
import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  Dimensions,
  ScrollView,
  Text,
  View,
  Image
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;
export default class Intro1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Username: "",
      Email: "",
      Password: ""
    };
  }
  render() {
    return (
      <ScrollView style={{ flex: 1, backgroundColor: "#fff" }}>
        <View
          style={{
            height: 100,
            flexDirection: "row",
            backgroundColor: "#ffffff",
            marginBottom: 10,

            shadowColor: "#050135",
            shadowOpacity: 0.16,
            shadowRadius: 2,
            shadowOffset: {
              height: 1,
              width: 0
            }
          }}
        >
          <View
            style={{
              flex: 15,
              backgroundColor: "transparent",
              justifyContent: "center",
              alignItems: "flex-start"
            }}
          >
            <TouchableOpacity
              onPress={() => this.props.navigation.goBack()}
              style={{ marginTop: 35, marginLeft: 26 }}
            >
              <Ionicons
                name="ios-arrow-back"
                type="ionicon"
                color={"#050135"}
                size={26}
                iconStyle={{}}
              />
            </TouchableOpacity>
          </View>
          <Text
            style={{
              flex: 50,
              marginTop: 58,
              color: "#fff",
              justifyContent: "center",
              textAlign: "center",
              color: "#050135",
              fontFamily: "Helvetica",
              fontSize: 16,
              fontWeight: "600"
            }}
          >
            {""}
          </Text>
          <View
            style={{
              flex: 10,
              backgroundColor: "transparent",
              justifyContent: "center",
              alignItems: "flex-end"
            }}
          />
          <View
            style={{
              flex: 10,
              backgroundColor: "transparent",
              justifyContent: "center",
              alignItems: "center"
            }}
          />
        </View>
        <KeyboardAvoidingView style={{ flex: 1 }} behavior="position">
          <View style={styles.container}>
            <Ionicons
              style={{ alignSelf: "center", marginTop: 50, marginBottom: 40 }}
              name={Platform.OS == "ios" ? "ios-images" : "md-images"}
              size={90}
              color="#a85e0a"
            />

            <Text style={{ color: "red", textAlign: "center" }} />
            <View
              style={{
                flex: 1,
                flexDirection: "column",
                alignItems: "center"
              }}
            >
              <View
                style={{
                  borderRadius: 5,
                  backgroundColor: "#f4f4f4",
                  marginTop: 10
                }}
              >
                <TextInput
                  placeholder={"Fullname"}
                  returnKeyType="done"
                  style={{
                    height: 60,
                    width: screenWidth - 70,
                    padding: 20,
                    borderColor: "#e8eaed",
                    borderWidth: 0
                  }}
                  onChangeText={this.EmailChangeHandler}
                  value={this.state.Email}
                />
              </View>
              <View
                style={{
                  borderRadius: 5,
                  backgroundColor: "#f4f4f4",
                  marginTop: 10
                }}
              >
                <TextInput
                  placeholder={"Email or Username"}
                  keyboardType={"email-address"}
                  returnKeyType="done"
                  style={{
                    height: 60,
                    width: screenWidth - 70,
                    padding: 20,
                    borderColor: "#e8eaed",
                    borderWidth: 0
                  }}
                  onChangeText={this.EmailChangeHandler}
                  value={this.state.Email}
                />
              </View>
              <View
                style={{
                  borderRadius: 5,
                  backgroundColor: "#f4f4f4",
                  marginTop: 10
                }}
              >
                <TextInput
                  placeholder={"Password"}
                  secureTextEntry={true}
                  returnKeyType="done"
                  style={{
                    height: 60,
                    width: screenWidth - 70,
                    padding: 20,
                    borderColor: "#e8eaed",
                    borderWidth: 0
                  }}
                  onChangeText={this.PassChangeHandler}
                  value={this.state.Password}
                />
              </View>

              <TouchableOpacity
                onPress={() => {}}
                style={{
                  marginTop: 20,
                  borderRadius: 0,
                  backgroundColor: "#a85e0a",
                  width: 300,
                  height: 63,
                  borderWidth: 1,

                  borderColor: "#a85e0a",
                  bottom: 0,
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <Text style={{ color: "#fff", fontSize: 20 }}>SIGN IN</Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("Signin1")}
          style={{
            height: 40,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Text
            style={{
              color: "#919191",
              fontFamily: "Helvetica",
              fontSize: 14,
              fontWeight: "300"
            }}
          >
            Have account?{" "}
          </Text>
          <Text
            style={{
              color: "#a85e0a",
              fontFamily: "Helvetica",
              fontSize: 14,
              fontWeight: "600"
            }}
          >
            SIGN IN
          </Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    fontWeight: "900"
    //  marginTop:moderateScale(-60, resizeFactor)
  }
});
