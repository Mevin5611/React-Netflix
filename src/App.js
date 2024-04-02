
import './App.css';
import Banner from './components/Banner/Banner';
import Navbar from './components/Navbar/Navbar';
import Rowpost from './components/Row_post/Row_post';
import {originals,action,comedy,horror,romance,documentry} from './urls'

function App() {
  return (
    <div>
    <Navbar/>
    <Banner/>
    <Rowpost url={originals} title='Netflix Originals'/>
    <Rowpost url={action} title='Action' isSmall/>
    <Rowpost url={horror} title='Horror' />
    <Rowpost url={comedy} title='Comedy'isSmall/>
    <Rowpost url={romance} title='Romance' />
    <Rowpost url={documentry} title='Documentaries'isSmall/>
    </div>
  );
}

export default App;
