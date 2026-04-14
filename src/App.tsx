import { StyleSheet, Text, View } from 'react-native';
import Contador from './Contador';

export default function App() {
  return (
    <View style={styles.container}>
     <Contador inicial={10}
                passo={2}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
