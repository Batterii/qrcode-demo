import { QRCode } from 'react-qrcode-logo';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <QRCode
            value="https://vurvey.co"
            logoImage="https://avatars.githubusercontent.com/u/603677?v=4"
            size="200"
            logoWidth="50"
            quietZone="10"
        />
      </header>
    </div>
  );
}

export default App;
