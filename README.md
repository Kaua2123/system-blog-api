# System Blog Api - Social Blog


## 📝 Descrição

API REST desenvolvida com o intuito de treinar e adquirir experiência no desenvolvimento back-end com Typescript.

A API conta com diversas rotas e funcionalidades que simulam uma aplicação de blog:

- Usuários podem postar, visualizar, editar e deletar postagens.
- Podem realizar comentários em postagens
- Podem avaliar postagens
- Podem filtrar postagens por tags

## 💻 Guia

### Inicializando o Banco de Dados MySQL

- Abra o MySQL Workbench e crie um schema local chamado "blog_app" 

### Inicializando a API REST

- Clone o repositório da API REST
- Navegue até a pasta da API no terminal: `cd system-blog-api`
- Instale as dependências: `npm install`
- Aplique as migrações após a criação do schema "blog_app": `npx sequelize db:migrate`
- Execute o servidor: `npm run dev`
