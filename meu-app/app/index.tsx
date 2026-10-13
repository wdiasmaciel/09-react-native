import { View, Text, Button } from 'react-native';
import { useRouter } from 'expo-router';

export default function Home() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Lista de Produtos</Text>
      <Button 
        title="Ver Detalhes do Produto" 
        onPress={() => router.push('/detalhe')} 
      />
    </View>
  );
}
