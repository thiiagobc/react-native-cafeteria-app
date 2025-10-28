# ⚙️ Dependências do Projeto — React Native Cafeteria App

Este documento lista todas as dependências e bibliotecas utilizadas no projeto, bem como as instruções necessárias para configurar o ambiente em **qualquer máquina nova**.

---

## 🧱 1️⃣ Requisitos Globais

Antes de rodar o projeto, certifique-se de ter instalado:

- [Node.js (LTS)](https://nodejs.org/)  
- [npm](https://www.npmjs.com/) (vem junto com o Node)  
- [Expo CLI](https://docs.expo.dev/get-started/installation/)  
  ```bash
  npm install -g expo-cli
  ```
- [VS Code](https://code.visualstudio.com/) (recomendado)  
- [Expo Go](https://expo.dev/client) instalado no celular (para testar o app)

---

## 📦 2️⃣ Dependências do Projeto

Após clonar o repositório e abrir a pasta do projeto, execute:

```bash
npm install
```

Esse comando instala todas as dependências listadas no `package.json`.

---

## 📚 3️⃣ Principais Bibliotecas Utilizadas

Abaixo estão as dependências que podem precisar de instalação manual, caso o `npm install` falhe ou se o projeto for movido para outra máquina.

### 📱 Expo e React Native
```bash
npm install expo react-native
```

### ⚙️ Navegação
```bash
npm install @react-navigation/native
npm install @react-navigation/native-stack
npm install @react-navigation/bottom-tabs
npm install react-native-screens react-native-safe-area-context
```

### 🎨 Ícones e Estilos
```bash
npm install @expo/vector-icons
npm install react-native-gesture-handler react-native-reanimated
```

> ⚠️ Após instalar `react-native-reanimated`, adicione a seguinte linha **no topo do arquivo** `babel.config.js`:
> ```js
> plugins: ['react-native-reanimated/plugin'],
> ```

### 🧠 Tipagem (caso use TypeScript)
```bash
npm install --save-dev typescript @types/react @types/react-native
```

### 🧭 Outras Dependências (presentes no projeto)
```bash
npm install react-native-modal-datetime-picker
npm install @react-native-community/datetimepicker
```

---

## 🧰 4️⃣ Dependências de Desenvolvimento (opcionais)
Essas bibliotecas ajudam na formatação e produtividade:

```bash
npm install --save-dev prettier eslint
```

---

## 🚀 5️⃣ Executando o Projeto
Depois de instalar tudo, inicie o servidor Expo:

```bash
npx expo start
```

Abra o aplicativo **Expo Go** no celular e escaneie o QR Code exibido no terminal.

---

## 🧩 6️⃣ Solução de Problemas Comuns

- **Erro “Cannot determine project’s Expo SDK version”**  
  → Execute novamente `npm install expo`  
- **Erro com `react-native-reanimated`**  
  → Confirme a presença da linha `plugins: ['react-native-reanimated/plugin']` no `babel.config.js`
- **Erro “scripts desabilitados no sistema” (Windows PowerShell)**  
  → Rode como administrador:
  ```bash
  Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned -Force
  ```

---

> 📄 **Observação:**  
> Todas as dependências listadas aqui refletem o ambiente de desenvolvimento em uso no projeto original.  
> Caso atualize versões ou adicione novas libs, lembre-se de atualizar também este arquivo.
