
import { useState } from 'react'
import { StyleSheet, View, TextInput, Button, Modal, Image } from 'react-native'

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState('')

  function goalInputHandler(text) { 
    setEnteredGoalText(text)
  }

  function addGoalHandler() {
    props.onAddGoal(enteredGoalText)
    setEnteredGoalText('')
  }

  return (
    <Modal
      visible={props.open}
      animationType='slide'
    >
      <View style={styles.inputContainer}>
          <Image
            style={styles.image}
            source={require('../assets/images/goal.png')}
          />
        <TextInput
          style={styles.textInput}
          placeholder='Your course goal!'
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View key='cancel' style={styles.button}>
            <Button title='Cancel' color='#f31282' onPress={props.onPressCancel} />
          </View>
          <View key='add' style={styles.button}>
            <Button title='Add goal' color='#b180f0' onPress={addGoalHandler} />
          </View>
        </View>
      </View>
    </Modal>
  )
}

export default GoalInput

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#311b6b',
    padding: 16,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  textInput: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#e4d0ff',
    backgroundColor: '#e4d0ff',
    color: '#120438',
    width: '80%',
    padding: 16,
    marginBottom: 8,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
  },
  button: {
    width: '40%',
    marginHorizontal: 8,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#ccc',
  }
})