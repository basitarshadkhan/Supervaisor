import React from "react";
import { SafeAreaView, Text, FlatList } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import WebView from "react-native-webview";

export default class VideoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videosList: [
        {
          duration: "1:01",
          uri: "https://www.youtube.com/watch?v=B9_rwIyhQSc",
        },
        {
          duration: "1:01",
          uri: "https://www.youtube.com/watch?v=uTCNcP5UVoU",
        },
        {
          duration: "1:01",
          uri: "https://www.youtube.com/watch?v=U6n2NcJ7rLc",
        },
        {
          duration: "1:01",
          uri: "https://www.youtube.com/watch?v=0K21EwDWgjM",
        },
      ],
    };
  }

  renderVideoContent = ({ item, index }) => {
    return (
      <WebView
        style={{
          width: wp("90%"),
          minHeight: hp("25%"),
          height: hp("25%"),
          marginLeft: wp("5%"),
          marginVertical: 15,
          opacity: 0.99,
          borderWidth: 1,
        }}
        javaScriptEnabled
        allowsFullscreenVideo
        source={{ uri: item.uri }}
        // androidHardwareAccelerationDisabled
      />
    );
  };
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <Text
          style={{
            fontSize: 28,
            fontWeight: "bold",
            marginTop: 50,
            marginLeft: 20,
          }}
        >
          Videos List
        </Text>
        <FlatList
          data={this.state.videosList}
          renderItem={this.renderVideoContent}
          onEndReachedThreshold={0.5}
          onEndReached={() => {
            var temp = this.state.videosList;
            temp.push(...this.state.videosList);
            this.setState({ videosList: temp });
          }}
        />
      </SafeAreaView>
    );
  }
}
