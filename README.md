# Criptografia
Seu desafio será implementar a criptografia em um serviço de forma transparente para a API e para as camadas de serviço de sua aplicação. O objetivo é garantir que os campos sensíveis dos objetos de entidade não sejam visíveis diretamente, realizando a criptografia em tempo de execução durante a conversão da entidade para a coluna correspondente no banco de dados, e vice-versa.

# Exemplo
Considere os campos userDocument e creditCardToken como campos sensíveis que devem ser criptografados. A tabela de exemplo seria a seguinte:

id	userDocument	creditCardToken	value
1	MzYxNDA3ODE4MzM=	YWJjMTIz	5999
2	MzI5NDU0MTA1ODM=	eHl6NDU2	1000
3	NzYwNzc0NTIzODY=	Nzg5eHB0bw==	1500

## A estrutura da entidade correspondente seria a seguinte:

Campo	Tipo
id	Long
userDocument	String
creditCardToken	String
value	Long

# Requisitos
- Implemente um CRUD simples considerando os campos mencionados acima como sensíveis.
- Utilize o algoritmo de criptografia de sua preferência. Sugestões: SHA-512 ou PBKDF2.


# Solução :
- Apos ler os requisitos do desafio aqui esta uma descrição como resolvi este desafio.

## API  :
- Utilizando node.js como api para mostrar a rota do CRUD no caso so a rota POST;
- Crypto.js dependencia para cripotgrafar os dados sensiveis do usuario;
- Swagger.json para a documentação da API.
