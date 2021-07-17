import './App.css';

function App() {
  const title = 'Welcome to CyberRhett.com'
  const likes = 50;
  const link = 'https://www.google.com';


  return (
    <div className="App">
     `<div className="content">
        <h1>{ title }</h1>
        <p>Liked { likes } times</p>
        <p> {10} </p>
        <p> { Math.random() } </p>
        <a href={link}> Google Link</a>

     </div>

    </div>
  );
}

export default App;
