import Dashboard from './components/Dashboard';
import Result from './components/Result';
import Container from './components/ui/Container';
import Header from './components/ui/Header';
import HolidayProvider from './context/HolidayContext';

function App() {
  return (
    <>
      <HolidayProvider>
        <Container containerClassName="bg-gray-100 min-h-screen flex items-center justify-center p-4">
          <Container containerClassName="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
            <Header />
            <Container containerClassName="space-y-4">
              <Dashboard />
            </Container>
            <Result />
          </Container>
        </Container>
      </HolidayProvider>
    </>
  );
}

export default App;
