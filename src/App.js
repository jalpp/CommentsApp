import React, { useState } from "react";
import Comment from "./components/comment";
import { Button, StyleSheet, Text, View } from "react-native";

function App() {
  const [entercomment] = useState();
  const [entercommentCards, enterSetCommentCards] = useState([]);

  const addEnterComment = () => {
    enterSetCommentCards([...entercommentCards, entercomment]);
  };

  return (
    <View style={styles.header}>
      <Text style={styles.title}>Comments </Text>
      {
        <Button
          style={styles.button}
          onPress={() => addEnterComment()}
          title="Enter"
          color="#000000"
        />
      }
      {entercommentCards.map(() => {
        return <Comment />;
      })}

      <Comment />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    padding: 20,
    fontSize: 10
  },
  title: {
    fontWeight: "bold",
    fontSize: "2.0rem",
    marginVertical: "1em",
    textAlign: "center"
  },
  text: {
    lineHeight: "1.5em",
    fontSize: 30,
    marginVertical: "1em",
    textAlign: "center"
  }
});

export default App;
