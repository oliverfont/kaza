import '../styles/Home.css';
import Header from './Header'
import Banner from './Banner'
import Articles from './Articles'
import Footer from './Footer'

function App() {
  return (
    <div className='body'>
      <Banner />
      <Articles />
    </div>
  );
}

export default App;