# Projeto Cápsula do Tempo

Este é o repositório oficial do projeto Cápsula do Tempo desenvolvido durante a Next Level Week SpaceTime (NLW) promovida pela Rocketseat. Trata-se de uma aplicação web e mobile, juntamente com uma API, que permite aos usuários criar e compartilhar mensagens, fotos e vídeos para serem armazenados e visualizados no futuro.

## :rocket: Tecnologias Utilizadas

- ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
- ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
- ![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)
- ![Fastify](https://img.shields.io/badge/fastify-%23000000.svg?style=for-the-badge&logo=fastify&logoColor=white)
- ![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
- ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
- ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
- ![SQLite](https://img.shields.io/badge/sqlite-%2307405e.svg?style=for-the-badge&logo=sqlite&logoColor=white)
- ![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)

## :wrench: Funcionalidades

- Autenticação de usuários
- Criação de postagens
- Upload de imagens
- Armazenamento de dados no banco de dados
- Visualização de postagens existentes
- Definição de uma data futura para visualização das postagens

## :scroll: Pré-requisitos

Antes de executar o projeto localmente, certifique-se de ter as seguintes dependências instaladas:

- Node.js (versão 18 ou superior)
- Gerenciador de pacotes npm ou yarn

## :paperclip: Instalação

1. :clipboard: Clone este repositório para o seu ambiente de desenvolvimento local:

```powershell
git clone https://github.com/GersonRocha9/nlw-spacetime.git
```

2. :open_file_folder: Navegue para o diretório raiz do projeto:

```powershell
cd nlw_spacetime
```

3. :clipboard: Instale as dependências necessárias executando o comando:

```powershell
npm install
```

ou

```powershell
yarn install
```

4. :hammer: Configuração do Banco de Dados:

- Execute as migrações do banco de dados com o seguinte comando:

  ```powershell
  npx prisma migrate dev
  ```

- (Opcional) Execute as seeds para criar dados iniciais no banco de dados:

  ```powershell
  npx prisma db seed --preview-feature
  ```

5. Inicie o servidor de desenvolvimento:

```powershell
npm run dev
```

6. Navegue para `http://localhost:3000` para visualizar a aplicação no seu navegador.

## :speech_balloon: Contribuição

Contribuições são bem-vindas! Se você quiser colaborar com o projeto, siga as etapas abaixo:

1. Faça um fork deste repositório.
2. Crie uma branch para suas alterações:

```powershell
git checkout -b minha-feature
```

3. Faça as alterações desejadas e faça commits com mensagens descritivas:

```powershell
git commit -m "Minha nova feature"
```

4. Envie suas alterações para o repositório remoto:

```powershell
git push origin minha-feature
```

5. Abra um Pull Request neste repositório, descrevendo suas alterações e aguarde revisão.

## :newspaper: Licença

Este projeto está licenciado sob a [MIT License](https://opensource.org/licenses/MIT).
