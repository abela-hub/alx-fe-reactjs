// src/App.jsx
import WelcomeMessage from './components/WelcomeMessage';
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';
import UserProfile from './components/UserProfile';

function App() {
  return (
    <div>
      <WelcomeMessage />

      <Header />
      <MainContent />
      <Footer />

      {/* Example UserProfile usage */}
      <UserProfile name="Alice" age={25} bio="Loves hiking and photography" />
      {/* You can add more profiles */}
      <UserProfile name="John" age={30} bio="Enjoys coding and football" />
    </div>
  );
}

export default App;
