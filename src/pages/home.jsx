import Nav from './Nabvar.jsx';
import Title from './title.jsx'
import Product from './products.jsx';
import NewsLetter from './newsletter.jsx';

import './home.css'

function Home() {
  return (
    <div className="home">
      <Nav />
      <Title />
      <Product />
      <NewsLetter />
    </div>
  );
}

export default Home;
