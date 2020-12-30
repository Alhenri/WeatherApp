# Weather App Web

Este projeto foi criado utilizando o ReactJS como framework e trata-se de uma página web que busca informações
sobre o clima de regiões selecionadas.

### `Funcionalidades`

1. A principal funcionalidade é a de verificar o tempo/clima de regiões do mundo todo. Você pode adicionar locais favoritos
a sua pagina inicial e sempre que desejar ter informações sobre o tempo basta clicar.

2. Há duas formas de selecionar um local, a primeira utiliza sua localização atual e salva nos favoritos com o nome\
que você escoher. Já a segunda utiliza de uma seleção pelo mapa, onde você escolhe qualquer lugar do mundo!

3. A lista de locais favoritos é salva no armazenamento local do seu navegador (local storage). Guardando as informações
adicionadas numa lista do mais recente para o mais antigo.

4. É possivel também alterar o nome com que a informação foi salva ou excluir de seus favoritos.

### `Construção`

1. Aplicação construida utilizando o framework [ReactJS](https://pt-br.reactjs.org) também conta com a biblioteca
styled-components para a criação dos estilos e a react-map-gl na manipulação dos mapas

2. A aplicação trata-se de uma página [SPA](https://en.wikipedia.org/wiki/Single-page_application) pois a navegação entre
suas páginas não necessita do recarregamento completo da página.

### `Navegação`

1. Página inicial:
  A página inicial conta com uma lista de locais favoritos (inicialmente vazia) e um local onde é possivel visualizar
  informações e adicionar locais.
  * Para adicionar um local favorito clique no botão "Adicionar novo local".
  * Para editar o nome ou excluir um local favorito clique no ícone de configurações.
  * Para visualizar informações de um local favorito selecione-o clicando sobre ele.

2. Página de novo local:
  Há duas possibilidades de adcionar um novo local, pela sua localização ou pelo mapa.\
  * Pela sua localização: Basta digitar um nome que quer dá a sua localização e clicar em "salvar".
  * Pelo mapa: Clique em "Selecionar local no mapa", navegue pelo mapa clicando e arrastando e selecione o local desejado.
  Após isso, escolha um nome e clique em "Salvar".
  
  ### `Mais informações`
  
  * Deployment: A página está disponivel para ser acessada na [heroku](https://weather-app-web1.herokuapp.com) e na [vercel](https://weather-app-lqjafdib5.vercel.app).
