import React, { useState } from "react";
import { View, StyleSheet, TextInput, Button } from "react-native";

const CommentTextInput = () => {
  const [comment] = useState();
  const [commentCards, setCommentCards] = useState([]);

  const addComment = () => {
    setCommentCards([...commentCards, comment]);
  };

  return (
    <View style={styles.normal}>
      <TextInput style={styles.input} />

      <Button
        style={styles.input}
        onPress={() => addComment()}
        title="Comment"
        color="#000000"
      />

      {commentCards.map(() => {
        return <TextInput style={styles.input} />;
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    flex: 1,
    borderWidth: 1
  },
  button: {
    padding: 5
  },
  normal: {
    flexDirection: "column"
  }
});

export default CommentTextInput;
