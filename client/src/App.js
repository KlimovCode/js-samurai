import './common/reset.css'
import './App.css'
import Header from './common/Header'
import Nav from './common/Nav'
import ProfilePage from './pages/ProfilePage/ProfilePage'

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <div className="main">
          <Nav />
          <ProfilePage />
        </div>
      </div>
    </div>
  );
}

export default App;
