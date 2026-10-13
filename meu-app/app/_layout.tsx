import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Início' }} />
      <Stack.Screen name="detalhe" options={{ title: 'Detalhes do Item' }} />
      <Stack.Screen name="carrinho" options={{ title: 'Carrinho' }} />
    </Stack>
  );
}
