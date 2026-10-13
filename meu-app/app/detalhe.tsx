import { View, Text, Button } from 'react-native';
import { useRouter } from 'expo-router';

export default function Detalhe() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Página de Detalhes</Text>
      <Button 
        title="Ver o Carrinho de Compras" 
        onPress={() => router.push('/carrinho')} 
      />
      <Text>(O botão voltar aparece no topo automaticamente)</Text>
    </View>
  );
}
