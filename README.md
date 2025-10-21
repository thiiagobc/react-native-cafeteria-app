# ☕ React Native - Cafeteria App

Este repositório reúne o projeto acadêmico desenvolvido para a disciplina **Programação para Dispositivos Móveis**, do curso de **Análise e Desenvolvimento de Sistemas (Estácio)**.  
O aplicativo foi construído em **React Native (Expo)** e faz parte do meu **portfólio prático**, demonstrando a evolução do aprendizado e da aplicação dos conceitos de desenvolvimento mobile.

---

## 📚 Conteúdos Desenvolvidos

### 🏗️ Estrutura Base do Projeto
- [x] Configuração do ambiente com Expo  
- [x] Estruturação das pastas (`src`, `assets`, `components`, `screens`)  
- [x] Definição de temas globais e cores (arquivo `themes.ts`)  

---

### 🔐 Tela de Login
- [x] Criação da tela base com campos de **email** e **senha**  
- [x] Implementação do componente reutilizável **Input** (com ícones e título dinâmico)  
- [x] Adição de botão **“Entrar”** com carregamento e validação simples  
- [x] Feedback visual e mensagens de alerta para campos vazios  

---

### ⚙️ Estrutura de Componentes
- [x] `Input`: componente genérico com ícones à esquerda/direita  
- [x] Estilização utilizando `StyleSheet` e temas globais  
- [x] Organização em pastas modulares  

---

### 🔄 Navegação e Telas Interativas (em andamento)
- [x] Criação inicial das rotas  
- [ ] Implementação completa da **transição entre páginas**  
- [ ] Organização da navegação principal (`BottomRoutes` / `IndexRoutes`)  
- [ ] Integração de ícones e cabeçalhos personalizados nas rotas  

---

### 🧠 Tecnologias Utilizadas
- React Native (Expo)
- TypeScript
- React Navigation
- Hooks (`useState`)
- `@expo/vector-icons`  
- StyleSheet (estilização nativa do React Native)

---

## 🧭 Estrutura de Diretórios
```
src/
 ├── components/
 │     └── input/
 │          ├── index.tsx
 │          └── styles.ts
 ├── screens/
 │     └── Login/
 │          ├── index.tsx
 │          └── styles.ts
 ├── global/
 │     └── themes.ts
assets/
 └── logo.png
```

---

## 🚀 Como Executar o Projeto
```
# 1️⃣ Instalar dependências
npm install

# 2️⃣ Iniciar o projeto no Terminal
npx expo start

```

> Abra o aplicativo **Expo Go** no celular e escaneie o QR Code exibido no terminal.

---

## 📆 Linha do Tempo do Desenvolvimento

| Etapa | Descrição | Status |
|-------|------------|--------|
| 🧱 **v0.1.0** | Estrutura base do app | ✅ Concluída |
| 🔐 **v0.2.0** | Tela de login com componente Input | ✅ Concluída |
| 🔄 **v0.3.0** | Navegação entre telas e transições | 🚧 Em andamento |
| 🗃️ **v0.4.0** | Integração de dados e carrinho | ⏳ A planejar |
| 📱 **v1.0.0** | Publicação final e README completo | ⏳ A planejar |

---

## 📦 Objetivo do Projeto
Este aplicativo simula uma **cafeteria mobile**, permitindo explorar conceitos de:
- Componentização e reutilização de código  
- Navegação e rotas no React Native  
- Gerenciamento de estado  
- Boas práticas de estilização e organização  

O foco principal é o **aprendizado progressivo**, com commits e versões que contam a **história de evolução do código**.

---

## 👨‍💻 Autor
Desenvolvido por **Thiago B. C.**  
📚 Curso: *Análise e Desenvolvimento de Sistemas (Estácio)*  
📍 Uberlândia - MG  
🔗 [LinkedIn](https://www.linkedin.com/in/thiiagobc/) | [GitHub](https://github.com/thiiagobc)

---

> *Este repositório é parte integrante do portfólio de estudos em React Native e representa a evolução contínua das habilidades práticas no desenvolvimento mobile.*
