![github-small](https://miro.medium.com/max/1000/1*RHQ7lpGDV_M3yWRa9DiR2g.png)

<p align="center">
  <b>Introdução ao GraphQL (PARTE 01)</b><br><br>
  <b>Uma breve e rápido aprendizado em uma tecnologia incrível</b>
</p>

## O que é o GraphQL

GraphQL é uma linguagem de consulta criada pelo Facebook em 2012 e lançada publicamente em 2015. É considerada uma alternativa para arquiteturas REST, além de oferecer um serviço runtime para rodar comandos e consumir uma API. 

Diferentemente do SQL padrão que nós conhecemos, você não o utilizará para fazer consultas com um (select * from) diretamente no banco de dados, mas poderemos manipular através de queries e mutations (get/post) fortemente tipadas quaisquer dados que quisermos de nossa API de uma maneira mais rápida e eficiente.

## Como o GraphQL se divide?

Basicamente, de forma mais simplista, podemos dizer que o GraphQL se divide em Resolvers e Schema. 

O **Schema** é o padrão de todos os dados que manipularemos. É a foto que comprova a verdade e qualquer coisa que não esteja ali, não faz parte do padrão que será utilizado. Se quisermos adicionar ou retirar qualquer dado, ele deverá ser feito através do schema.

## Schema
Dentro do schema, utilizamos as seguintes partes:
- Types
- Fields
- Scalars
- Query
- Mutation

## Resolvers
São funções que são responsáveis por retornar e tratar os Types em nosso schema. É muito importante salientar que as mesmas queries e mutations (nomes) no schema precisam estar no resolver. 

## Chega de delongas. Mãos à massa!
O propósito deste repositório é através de quatro desafios, aprendermos um pouco sobre como criar um schema, resolvers, tratarmos as informações, criarmos mutations, queries e mais algumas coisas.

O ideal é que cada desafio seja de uma semana para que dê tempo de você pesquisar o conteúdo com calma e assimilar bem. Faça no seu tempo sem pressa. 

Há um banco de dados em JSON para facilitar o aprendizado com menos instalações. Há dois models, um de User e um de Movie. A idéia que é cada cada movie possui um usuário ou um ator, como você preferir. Não mexa nos arquivos pois eles já fazem o que precisam fazer. Foque em executar os desafios e aumentar seu conhecimento no graphQL. Bora?

![github-small](https://i.makeagif.com/media/6-23-2017/3kMCNc.gif)

### Desafio 1

+ Configure o arquivo server.js
+ Crie types/querys/resolvers para buscar dados de 1 usuário e de todos os usuários. 
+ Crie a mutation/resolvers para criar o usuário utilizando INPUT TYPE com todos os campos obrigatórios.
+ Crie um type/query/resolver para buscar os dados de 1 filme e de todos os filmes sem o campo user.

### Desafio 2

+ Transforme esse type em uma interface para pesquisar tipos diferentes de filmes. Um deve conter um valor de custo **money** e outro **language**. Essas informações devem ser ou uma ou outra para que possamos fazer a pesquisa por filmes que contenham money e outros que contenham language.
+ Apenas o filme cadastrado possui um numero de oscar. Para todos os outros, trate essa informação nos resolvers para que seja sempre nOscar: 0.
+ No resolver, trate essa separação (money/language) através dos resolvers.

### Desafio 3

+ Crie a mutation/resolver de criação de filme usando o ENUM para genero do filme e outro ENUM para o tipo que está sendo cadastrado (Money/Language) passando o campo user com apenas o nome.
+ Agora vamos adicionar um relacionamento entre user e movie. Adicione o user na busca dos filmes e através do resolver, trate o retorno do user. Todo filme deve retornar obrigatoriamente o seu usuário.

### Desafio 4
+ Mude o retorno dos filmes que sejam do tipo language para language: "Português" através dos resolvers
+ Mude o retorno dos filmes que sejam do tipo money para money: 9999

## DONE!

![github-small](https://www.publicitarioscriativos.com/wp-content/uploads/2019/04/ezgif.com-optimize-59.gif)

## PARABÉNS. VOCÊ CONCLUIU ESSE BOOTC.. OPS, ZUERA!
Se quiser saber mais sobre o graphQL, dá uma olhada <a href="https://graphql.org">AQUI</a>

Fique atento pois logo postarei a parte 02 que será como o graphQL se relaciona com o ReactJS.

***É nóis!***

## Para rodar este projeto em sua máquina local

Faça um clone do repositório e dentro da pasta em sua IDE ou no terminal, rode **yarn** para instalar os pacotes
Execute **yarn start** para executar o projeto
