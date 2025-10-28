# ☕ React Native - Cafeteria App

Este repositório reúne o projeto acadêmico desenvolvido para a disciplina **Programação para Dispositivos Móveis**, do curso de **Análise e Desenvolvimento de Sistemas (Estácio)**.  
O aplicativo foi construído em **React Native (Expo)** e faz parte do meu **portfólio prático**, demonstrando a evolução do aprendizado e da aplicação dos conceitos de desenvolvimento mobile.

---

## 📚 Conteúdos Desenvolvidos

### 🏗️ Estrutura Base do Projeto
- [x] Configuração do ambiente com Expo  
- [x] Estruturação das pastas (`src`, `assets`, `components`, `screens/pages`)  
- [x] Definição de temas globais e cores (arquivo `themes.ts`)  

---

### 🔐 Tela de Login
- [x] Criação da tela base com campos de **email** e **senha**  
- [x] Implementação do componente reutilizável **Input** (com ícones e título dinâmico)  
- [x] Adição de botão **“Entrar”** com carregamento e validação simples  
- [x] Feedback visual e mensagens de alerta para campos vazios  
- [ ] Aplicar estilização final inspirada nas cores e texturas do café ☕  

---

### ⚙️ Estrutura de Componentes
- [x] `Input`: componente genérico com ícones à esquerda/direita  
- [x] Botões, tab bar e componentes utilitários (ex.: date/time picker)  
- [x] Estilização utilizando `StyleSheet` e temas globais  
- [x] Organização em pastas modulares  
- [x] Criação de componentes interativos (modal, botões e rotas)  

---

### 🔄 Navegação e Telas Interativas
- [x] Implementação da **transição entre páginas**  
- [x] Organização da **navegação principal** entre botões e telas  
- [x] Criação do **modal** com exibição de **data e hora**  
- [ ] Configurar o modal para funcionar como **carrinho de compras**  
- [ ] Implementar tela **“Minha Conta”** com informações do usuário  
- [ ] Adicionar tela **principal** com listagem de produtos da cafeteria  
- [ ] Aplicar tema visual completo (cores caramelo, marrom café e creme)  

---

## 🧭 Estrutura de Diretórios

```
src/
 ├─ assets/
 │
 ├─ components/
 │   ├─ Ball/
 │   ├─ Button/
 │   ├─ CustomDateTimePicker/
 │   ├─ CustomTabBar/
 │   └─ Input/
 │
 ├─ context/
 │   └─ authContext_list.tsx
 │
 ├─ global/
 │
 ├─ pages/
 │   ├─ list/
 │   ├─ login/
 │   └─ user/
 │
 └─ routes/

.gitignore
app.json
App.tsx
gesture-handler.js
gesture-handler.native.js
index.ts
package-lock.json
package.json
README.md
tsconfig.json
```

A pasta **`src/assets`** armazena imagens e recursos estáticos do projeto.  
A **`src/components`** contém todos os componentes reutilizáveis da aplicação (como `Ball`, `Button`, `CustomDateTimePicker`, `CustomTabBar` e `Input`).  
Em **`src/context`**, ficam os contextos globais de autenticação e controle de estado.  
A **`src/global`** concentra os temas e configurações globais.  
A pasta **`src/pages`** abriga as telas principais do app (`list`, `login` e `user`).  
E **`src/routes`** define a estrutura de navegação entre as páginas.  
Na raiz do projeto estão os arquivos principais de configuração (`app.json`, `tsconfig.json`, `package.json`, `index.ts`, `App.tsx`, etc.).

---

## 🚀 Como Executar o Projeto

```
## 🚀 Como Executar o Projeto

> ⚙️ Antes de iniciar, verifique as [dependências necessárias](./DEPENDENCIAS.md).

> Iniciar o projeto no Terminal
npx expo start
```

> Abra o aplicativo **Expo Go** no celular e escaneie o QR Code exibido no terminal.

---

## 📆 Linha do Tempo do Desenvolvimento

| Etapa | Descrição | Status |
|:------:|:----------------------------------------------:|:---------------:|
| 🧱 **v0.1.0** | Estrutura base do app | ✅ Concluída |
| 🔐 **v0.2.0** | Tela de login com componente Input | ✅ Concluída |
| 🔄 **v0.3.0** | Navegação entre telas, modal e transições | ✅ Concluída |
| 🛒 **v0.4.0** | Implementação do carrinho de compras (modal funcional) | 🚧 Em andamento |
| 🎨 **v0.5.0** | Estilização completa e telas de Minha Conta / Produtos | ⏳ A planejar |
| 📱 **v1.0.0** | Publicação final e README completo | ⏳ A planejar |

---

## 📦 Objetivo do Projeto
Este aplicativo simula uma **cafeteria mobile**, permitindo explorar conceitos de:
- Componentização e reutilização de código  
- Navegação e rotas no React Native  
- Gerenciamento de estado  
- Criação de modais e interações dinâmicas  
- Boas práticas de estilização e organização visual  

O foco principal é o **aprendizado progressivo**, com commits e versões que contam a **história de evolução do código**, desde a estrutura base até o comportamento real de um app completo de cafeteria.

---

## 👨‍💻 Autor
Desenvolvido por **Thiago B. C.**  
📚 Curso: *Análise e Desenvolvimento de Sistemas (Estácio)*  
📍 Uberlândia - MG  
🔗 [LinkedIn](https://www.linkedin.com/in/thiiagobc/) • [GitHub](https://github.com/thiiagobc)

---

> *Este repositório é parte integrante do portfólio de estudos em React Native e representa a evolução contínua das habilidades práticas no desenvolvimento mobile.*
