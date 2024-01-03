# TinderBot

Este é um bot simples para automatizar a interação com o Tinder. O script foi desenvolvido para clicar aleatoriamente nos botões "Curti" e "Não Curti" da interface do usuário.

## Instruções de Uso

Certifique-se de estar na página correta do Tinder antes de executar o script. Os botões necessários devem estar presentes na página.

### Pré-requisitos

- Navegador da web com suporte ao JavaScript.
- Página do Tinder carregada.

### Como Usar

1. Abra o console do desenvolvedor no seu navegador. (Geralmente, você pode pressionar F12 para abrir as Ferramentas do Desenvolvedor e acessar a guia "Console".)
2. Cole o código do script no console.
3. Execute o script.

Certifique-se de verificar a existência dos botões "Curti" e "Não Curti" na página antes de executar o script. Caso contrário, uma mensagem de erro será exibida no console.

## Funções

### `getRandomBoolean()`

Esta função retorna um valor booleano aleatório (`true` ou `false`) com uma probabilidade de 50%.

### `clickRandomButton()`

Esta função localiza os botões "Curti" e "Não Curti" na página e clica aleatoriamente em um deles com base no resultado da função `getRandomBoolean()`.

### `executeWithRandomInterval()`

Esta função executa `clickRandomButton()` e, em seguida, define um intervalo de tempo aleatório entre 500 e 1500 milissegundos antes de chamar a si mesma novamente por meio da função `setTimeout`. Isso cria um ciclo contínuo de interação aleatória.

### Execução Automática

Ao final do código, a função `executeWithRandomInterval()` é chamada para iniciar a execução automática do bot.

## Aviso

Este script é fornecido apenas para fins educacionais. O uso de bots para interagir com plataformas online pode violar os termos de serviço dessas plataformas. Use por sua conta e risco.

## Nota

Certifique-se de revisar e entender os Termos de Serviço do Tinder antes de usar este script. O desenvolvedor não assume qualquer responsabilidade por consequências decorrentes do uso deste script.
