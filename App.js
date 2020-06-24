import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Image } from 'react-native';

export default function App() {
  const [enterGoal, setenterGoal] = useState('')
  const [courseDetail, setcourseDetail] = useState([])
  const getinputhandler = (enteredText) => {
    setenterGoal(enteredText);

  };

  const show = () => {
    setcourseDetail(curentCourse => [...curentCourse, enterGoal])
  }
  return (
    <View style={styles.Screen}>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Cousrse Goal" style={styles.inputFormate} onChangeText={getinputhandler}
          value={enterGoal}
        />
        <Button title="add" style={{ borderWidth: 2 }} onPress={show}></Button>
      </View>
      <View>
        {courseDetail.map((Goal) => <View style={styles.textFormate}><Text>{Goal}</Text></View>)}


      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  Screen: {
    padding: 60
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  inputFormate: {
    borderColor: 'black',
    borderWidth: 2,
    width: 150
  },
  textFormate: {
    padding:10,
    backgroundColor: 'yellow',
    marginVertical: 10,
    borderWidth: 2
  }
});
