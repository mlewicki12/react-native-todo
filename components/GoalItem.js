
import { StyleSheet, View, Text, Pressable } from 'react-native'

function GoalItem(props) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{color: '#210644'}}
        onPress={props.onPressItem.bind(this, props.id)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  )
}

export default GoalItem

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 8,
    backgroundColor: '#5e08cc',
  },
  goalText: {
    padding: 16,
    color: 'white'
  },
  pressedItem: {
    opacity: 0.5,
  }
})