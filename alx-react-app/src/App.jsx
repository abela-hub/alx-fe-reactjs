import WelcomeMessage from './components/WelcomeMessage';
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';

function App() {
  return (
    <div>
      {/* Task 1: Show WelcomeMessage */}
      <WelcomeMessage />

      {/* Task 2: Show Header, MainContent, Footer */}
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
