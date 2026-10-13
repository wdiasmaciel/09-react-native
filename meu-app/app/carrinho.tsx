import { View, Text, StyleSheet } from 'react-native';

export default function Carrinho() {  
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>
        Tela do Carrinho de Compras
      </Text>
      <Text>
        (O botão voltar aparece no topo automaticamente)
      </Text>
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
  }
});
