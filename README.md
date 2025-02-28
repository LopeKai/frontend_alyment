<h1> 
    TESTE ALYMENT FRONT END + DESIGN SYSTEM
</h1

<p> Status: Finalizado!</p>

### Arquitetura: Monorepo
Para organizar o projeto, utilizei a estratégia de monorepo, um conceito  introduzido no javascript. Monorepo é a prática de mais de um  projeto dentro do mesmo repositório. No caso deste projeto, tanto o front-end quanto o design system estão na mesma base de código, porque eles tem dependência entre si.

<h2> Tecnologias / Bibliotecas: </h2>

###  Front-end

+ NEXT.JS
+ Typescript
+ Tailwindcss
+ MUI
+ React-query
+ Formik
+ Axios
+ yup

 ### Design-system

 + Storybook
 + Stitches


##  Instalação

```
git clone https://github.com/LopeKai/test_frontend_alyment.git
```

 ##  Instalar as dependências

no seu terminal e no diretório <strong>test_frontend_alyment</strong> execute o comando: 

```
npm install
```

##  Execução do front end

depois da instalaçao das dependência, navegue até a pasta frontEnd

```
cd packages/frontEnd
```

em seguida execute esse comando no seu terminal:

```
npm run dev
```

vai rodar um servidor local na rota:

```
http://localhost:3000
```

##  LOGIN
tela de início, onde é possível acessar com qualquer credencial.

![Image](https://github.com/user-attachments/assets/8e497cf1-2610-467f-ad43-2c0f7523cf70)

OBS: 
No campo de Select, será possível escolher o tipo de conta: Admin, Usuário, Vendedor, entre outros. Cada tipo de conta terá suas próprias permissões.

Por exemplo, uma conta do tipo Usuário não poderá adicionar novos usuários.
Caso o usuário selecione a opção "Outros", ele não terá acesso a plataforma e será redirecionado para uma página 404, informando que ele não tem permissão.

##  HOME

![Image](https://github.com/user-attachments/assets/71e2b066-f1f7-4caf-bb92-e7df08d6bf0f)

<strong>Caso você faça login com uma conta do tipo "Usuário", não será possível adicionar um novo usuário.</strong>

![Image](https://github.com/user-attachments/assets/3d17e976-982a-42c5-a5a3-421df8666a9c)

<strong>Caso o login seja feito com uma conta do tipo "Vendedor", você não terá acesso ao painel de informações nem poderá adicionar um usuário.</strong>

![Image](https://github.com/user-attachments/assets/7701bc5c-e5cf-46b3-b3b5-2786230a1b23)

##  ADICIONAR UM NOVO USUÁRIO

![Image](https://github.com/user-attachments/assets/9b91fa26-b941-453a-941f-43964ed31c50)

##  EDITAR UM USUÁRIO

![Image](https://github.com/user-attachments/assets/be6feb76-c3f8-42d4-85c4-cfb239539346)

##  EXCLUIR UM USUÁRIO

![Image](https://github.com/user-attachments/assets/eeb5b6d5-0c6f-4b0a-80dc-ba61f1011d97)

##  PESQUISAR UM USUÁRIO ID

![Image](https://github.com/user-attachments/assets/fd91180b-11a6-4683-91a5-070cb2ff5c91)

##  Execução do design system

Navegue até a pasta designSystem

```
 cd packages/designSystem
```

vai rodar um servidor local na rota:

```
 http://localhost:6006
```

##  Documentação Storybook do design system

![Image](https://github.com/user-attachments/assets/8bfc414b-20b0-41e7-83e4-7e4cb08bad31)

Este Storybook serve como documentação do Design System, apresentando os principais componentes utilizados no front-end.


