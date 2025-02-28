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

OBS: No campo de Select, será possível escolher o tipo de conta: Admin, Usuário, Vendedor, e outros. Cada tipo de conta terá suas próprias permissões.
Por exemplo, uma conta do tipo Usuário não poderá adicionar novos usuários.
