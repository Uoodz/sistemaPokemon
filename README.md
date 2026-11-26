# Pokédex

Aplicativo mobile de Pokédex desenvolvido em React Native como projeto de faculdade. Ele exibe a imagem, o nome, o ID e a tipagem de cada Pokémon, permite montar um time que fica salvo no dispositivo e simula batalhas entre Pokémon com base nos status deles.

## Funcionalidades

- **Pokédex:** lista de Pokémon com imagem, nome, ID e tipagem.
- **Time:** montagem de um time de Pokémon, salvo localmente no aparelho com `AsyncStorage`, então os dados continuam ali mesmo depois de fechar o app.
- **Elementos:** tela com os elementos (tipos) dos Pokémon.
- **Batalha:** o usuário escolhe 6 Pokémon para enfrentar outros 6 sorteados aleatoriamente. Os duelos acontecem em duplas e, em cada um, vence o Pokémon com a maior soma de status.

## Navegação

O app usa roteamento baseado em arquivos (file-based routing) e combina dois tipos de navegação:

**Drawer (menu lateral)**

- Início
- Pokédex
- Sobre

**Tabs (abas)**

- Pokédex
- Time
- Elementos

## Tecnologias

- React Native
- Expo
- Expo Router (navegação baseada em arquivos, com Drawer e Tab Navigator)
- AsyncStorage (`@react-native-async-storage/async-storage`) para persistência local

## Pré-requisitos

- npm
- Aplicativo **Expo Go** no celular, ou um emulador Android/iOS configurado

## Instalação

git clone https://github.com/Uoodz/sistemaPokemon
cd seu-projeto
npm install

## Como executar

npx expo start

Depois, escaneie o QR Code com o Expo Go no celular ou pressione `a` (Android) ou `i` (iOS) no terminal para abrir no emulador.

## Como funciona a batalha

1. O usuário escolhe 6 Pokémon para o seu time de batalha.
2. O sistema sorteia aleatoriamente outros 6 Pokémon como adversários.
3. As batalhas acontecem em duplas (um Pokémon do usuário contra um adversário), uma de cada vez.
4. Em cada duelo, o app soma os status de cada Pokémon e vence quem tiver a maior soma de pontos.
5. Cada Pokémon luta apenas uma vez: mesmo que vença, ele não participa da próxima batalha.
6. O sistema chama a próxima dupla, e o processo se repete até que as 6 duplas tenham lutado.

## Estrutura do projeto

app/
├── (drawer)/
│ └── (tabs)/
components/

## Uso de Inteligência Artificial

Ferramentas de IA foram utilizadas como apoio no desenvolvimento deste projeto, nos seguintes pontos:

- **Geração de imagens:** a partir de esboços feitos à mão no Paint, a IA gerou as imagens utilizadas no projeto.
- **Geração de texto:** a IA foi usada para auxiliar na criação de textos do projeto.
- **Descoberta de endpoints da API:** a IA foi usada para encontrar os endpoints da API consumida pelo projeto.
- **Resolução de dúvidas:** a IA foi consultada para esclarecer dúvidas durante o desenvolvimento.
- **Elaboracao do README** readme montado com informacoes e instrucoes fornecidas pelos usuarios.

## Autor

Marcos Guilarducci
Matheus Almada dos Santos
Projeto desenvolvido para fins acadêmicos na UniAcademia.
