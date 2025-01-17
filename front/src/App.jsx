import './styles/main.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Acceuil from './pages/Acceuil/Acceuil.jsx'
import Header from './components/Header/Header.jsx'
import LateralNav from './components/Lateral_nav/Lateral_nav.jsx';

function App() {
  return (
    <Router>
        <Header/>
      <main>
      <Routes>
          <Route path="/user/:id" element={<Acceuil />} />
          <Route path="*" element={<h1>404 - Page Not Found</h1>} />
        </Routes>
        <LateralNav/>
      </main>
      </Router>
  )
}
export default App


