import './styles/main.scss';
import Acceuil from './pages/Acceuil/Acceuil.jsx'
import Header from './components/Header/Header.jsx'
import LateralNav from './components/Lateral_nav/Lateral_nav.jsx';

function App() {
  return (
    <div> 
        <Header/>
      <main>
        <Acceuil/>
        <LateralNav/>
      </main>
    </div>
  )
}
export default App
