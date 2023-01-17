import { useState } from 'react'
import { StyleSheet, View, Button, FlatList } from 'react-native'
import { StatusBar } from 'expo-status-bar'

import GoalInput from './components/GoalInput'
import GoalItem from './components/GoalItem'

export default function App() {
  const [modalOpen, setModalOpen] = useState(false)
  const [goals, setGoals] = useState([])

  function addGoalHandler(text) {
    setGoals(goals => [...goals, {text, id: goals.length}])
    setModalOpen(false)
  }

  function deleteGoalHandler(id) {
    setGoals(goals => goals.filter(item => item.id !== id).map((item, index) => ({
      text: item.text,
      id: index
    })))
  }

  return (
    <>
      <StatusBar style='light' />
      <View style={styles.appContainer}>
        <Button title='Add new goal' color='#b180f0' onPress={() => setModalOpen(true)} />
        <GoalInput
          open={modalOpen}
          onAddGoal={addGoalHandler}
          onPressCancel={() => setModalOpen(false)}
        />
        <View style={styles.goalsContainer}>
          <FlatList
            data={goals}
            renderItem={(itemData) =>
              <GoalItem
                {...itemData.item}
                onPressItem={deleteGoalHandler}
              />
            }
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    marginTop: 16,
    flex: 5
  },
});
