import './App.css';


function Header() {
  return <h1><a href="/">React</a></h1>;
}

function Nav() {
  return <nav>
    <ol>
      <li><a href="/read/1">html</a></li>
      <li><a href="/read/2">css</a></li>
      <li><a href="/read/3">js</a></li>
    </ol>
  </nav>
}

function Article() {
  return <article>
    <h2>Welcome</h2>
    Hello, React?
  </article>;
}

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Nav></Nav>
      <Article></Article>
    </div>
  );
}

export default App;
