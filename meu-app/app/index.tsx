import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function Home() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>
        Tela da Lista de Produtos
      </Text>
      <TouchableOpacity
        style={styles.botao}
        onPress={() => router.push('/detalhe')}
      >
        <Text style={styles.TextoDoBotao}>
          Ver Detalhes do Produto
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  botao: {
    marginBottom: 10,
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#007AFF',
  },
  TextoDoBotao: {
    color: '#fff',
    fontSize: 16,
  },
});
