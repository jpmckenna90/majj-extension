import React from 'react';
import './App.css';
import MajjNavbar from './Components/Navbar/Navbar';
import ModalProvider from './Contexts/ModalProvider';
import 'bootstrap/dist/css/bootstrap.min.css';

/**
 * @return {null}
 */
function App() {
  return (
    <ModalProvider>
      <MajjNavbar />
    </ModalProvider>
  );
}

export default App;
