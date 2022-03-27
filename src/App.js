import './style.css'
import {FiSearch} from 'react-icons/fi';
import {BsHeart} from 'react-icons/bs';
function App() {
  return (
    <body>
    <header>
      <div className="align-items">
        <div className="header-flex">
        <h3>Codelândia</h3>
        <h3>blog</h3>
       </div>
       <div className="containerInput">
       <FiSearch size={25} color='#FFF'/>
       <input type="search" placeholder="Pesquisar no blog"/>
       </div>
      </div>
    </header>
    <main>
      <div className="card">
        <article>
          <div className="align-date-and-icon">
            <h4>02 de jul, 2021</h4>
            <BsHeart size={20} color={'#574AE8'}/>
          </div>
          <div className="align-text">
            <h2>Agora é oficial: o Windows 11 está vindo</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis.</p>
          </div>
            
        </article>
      </div>
      <div className="card">
        <article>
          <div className="align-date-and-icon">
            <h4>02 de jul, 2021</h4>
            <BsHeart size={20} color={'#574AE8'}/>
          </div>
            <div className="align-text">
            <h2>Tim Bernes-Lee vai leiloar código-fonte da web</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis. Praesent et auctor justo. Vestibulum nisl orci, lacinia venenatis leo sit amet, pulvinar tincidunt risus. Phasellus nisl dui, cursus a lectus et, interdum ullamcorper libero.</p>
            </div>
        </article>
      </div>
        <div className="card">
          <article>
          <div className="align-date-and-icon">
          <h4>02 de jul, 2021</h4>
          <BsHeart size={20} color={'#574AE8'}/>
        </div>
            <div className="align-text">
            <h2>Tem Firefox novo no pedaço e você vai querer migrar</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est.</p>
            </div>
        </article>
        </div>
        <div className="card">
        <article>
        <div className="align-date-and-icon">
          <h4>02 de jul, 2021</h4>
          <BsHeart size={20} color={'#574AE8'}/>
        </div>
            <div className="align-text">
            <h2>John McAfee, criador do antivírus McAfee, morre</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est.Nam vitae finibus ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis. Praesent et auctor justo. Vestibulum nisl orci, lacinia venenatis leo sit amet, pulvinar tincidunt risus. Phasellus nisl dui, cursus a lectus et, interdum ullamcorper libero.</p>
            </div>
        </article>
        </div>
    </main>
</body>
  );
}

export default App;
