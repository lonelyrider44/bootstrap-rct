import logo from './logo.svg';
import './App.css';
import Alert from './Bootstrap/Alert';

function App() {
  return (
    <div>
      <Alert color={"primary"}>Test <b>test</b></Alert>
      <Alert color={"secondary"}/>
      <Alert color={"sucess"}/>
      <Alert color={"warning"}/>
      <Alert color={"danger"}/>
      <Alert />

    </div>

  );
}

export default App;
