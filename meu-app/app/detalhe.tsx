import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function Detalhe() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>
        Tela de Detalhes
      </Text>
      <TouchableOpacity
        style={styles.botao}
        onPress={() => router.push('/carrinho')}
      >
        <Text style={styles.TextoDoBotao}>
          Ver o Carrinho de Compras
        </Text>
      </TouchableOpacity>
      <Text>(O botão voltar aparece no topo automaticamente)</Text>
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
    fontSize: 24,
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
