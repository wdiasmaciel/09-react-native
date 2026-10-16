# 09-react-native

![Telas do exemplo](telas.png)

## Exercícios: Navegação por Stack

Os exercícios usam como ponto de partida o fluxo de produtos já presente nesta prática: Início, Detalhes e Carrinho. Implemente e teste as mudanças em `meu-app/app/`.

### 1. Abrir os detalhes de um produto

Na tela inicial, transforme o botão atual em uma lista com pelo menos três produtos. Ao tocar em um produto, navegue para a tela de detalhes usando `router.push` e envie o identificador do produto como parâmetro.

Na tela de detalhes, leia o parâmetro com `useLocalSearchParams` e mostre o nome e o preço correspondentes ao produto selecionado.

**Critério:** cada item da lista abre seus próprios dados, e a tela de detalhes continua permitindo voltar para a lista.

### 2. Explorar a pilha de navegação

Na tela de detalhes, adicione um botão para abrir o carrinho com `router.push`. No carrinho, inclua uma ação para voltar à tela anterior com `router.back`.

Teste também o botão de voltar do cabeçalho e o botão voltar do dispositivo ou navegador. Observe como cada ação percorre o histórico do stack.

**Critério:** ao abrir o carrinho a partir dos detalhes, voltar retorna aos detalhes; voltar novamente retorna à lista.

### 3. Substituir a tela atual

Crie uma tela de confirmação de pedido. Depois da ação de finalizar compra no carrinho, use `router.replace` para exibir a confirmação sem manter o carrinho como a tela anterior.

**Critério:** depois da confirmação, voltar não deve reabrir o carrinho. Compare esse comportamento com `router.push` e explique a diferença entre empilhar e substituir uma rota.

### 4. Configurar as telas do Stack

No arquivo `_layout.tsx`, configure opções individuais para as telas usando `Stack.Screen`: defina títulos mais descritivos para Início, Detalhes e Carrinho e oculte o cabeçalho apenas na tela de confirmação.

**Critério:** cada tela apresenta as opções esperadas no cabeçalho, e a confirmação não exibe cabeçalho. Confira se a navegação de retorno continua funcionando nas demais telas.

### 5. Fluxo de Login (Navegação Linear Básica)

**Objetivo**: compreender a pilha padrão (navigate), substituição de telas (replace) e a remoção do botão de retorno nativo.

• Cenário: um fluxo simples de autenticação em que o usuário não pode retornar à tela de login após entrar no app.

• Requisitos:

	1. Crie duas telas: Login e Home.

	2. Na tela Login, insira um botão "Entrar". Ao clicar, use navigation.replace('Home') em vez de navigate.

	3. Na tela Home, verifique se o botão físico/virtual de "Voltar" (no topo ou no sistema operacional) desapareceu, impedindo o usuário de retornar ao Login deslogado.

	4. Adicione um botão "Sair" na Home que faz o caminho inverso, usando replace('Login').
