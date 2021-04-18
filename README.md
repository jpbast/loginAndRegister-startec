# Sistema de login e cadastro - Startec

Sistema feito em React que possui páginas de login e cadastro para o processo de seleção da empresa Startec.

Link para aplicação: https://jpbast-startec.herokuapp.com/register
## Funcionamento

A utilização da aplicação é simples e segue o que foi pedido no projeto. Na rota raiz do projeto, encontra-se a tela de Login com as suas respectivas seções. Para navegar entre as seções basta apertar no botão vermelho. Por se tratar de um projeto apenas frontend, a aplicação não conta com recursos de verificação de usuário, senha, etc. Assim, caso o usuário esteja na seção 1 e aperte em “Avançar”, será direcionado para a seção 2. Caso o usuário digite “admin” no campo de e-mail da seção 1 e aperte em avançar, será direcionado para a seção 3. 

Já as telas de Registro, é possível acessá-las de duas maneiras. Do primeiro jeito, basta acrescentar no endereço da aplicação a rota /register. A segunda maneira, é através da seção 3 da página de Login, após o usuário apertar em “Entrar”. O sistema de rotas foi feito através do React Router. 

A aplicação está totalmente responsiva e possui uma série de elementos dinâmicos. Quase todos os campos do tipo input apresentam verificação de erro enquanto o usuário escreve.

## Campos de Localidade e Cidade

Os dois campos mencionados no título vão ser destacados pois possuem um funcionamento um pouco diferente. Quando o usuário seleciona o campo de Localidade na página de Registro, carregam todos os estados do Brasil que foram obtidos através de uma API do IBGE. Sempre que um estado é selecionado, uma nova requisição é feita para a API, retornando apenas as cidades que fazem parte do estado selecionado.

API do IBGE: https://servicodados.ibge.gov.br/api/docs/localidades
## Tecnologias utilizadas

- HTML
- CSS
- JavaScript
- Axios
- React.js
- React Router
- Styled Components
