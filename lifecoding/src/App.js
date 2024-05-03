import './App.css';
import {useState} from 'react';

function Nav(props) {
  const list = [];
  for (let i = 0; i < props.topics.length; i++) {
    let t = props.topics[i];
    list.push(
      <li key={t.id}>
        <a href={'/read/' + t.id} onClick={(event)=> {
          event.preventDefault();
        }}>
          {t.title}
        </a>
      </li>);
  }
  return <nav>
    <ol>
      {list}
    </ol>
  </nav>;
}

function Article(props) {
  return <article>
    <h2>{props.title}</h2>
    {props.body}
  </article>;
}

function Header(props) {
  return <header>
    <h1>
      <a href="/" onClick={function (event) {
          event.preventDefault(); // 이벤트 방지하기
      }}>
        {props.title}React
      </a>
    </h1>
  </header>;
}

function App() {
  console.log(_mode);
  const _mode = useState('WELCOME');
  const topics = [
    {
      id: 1,
      title: 'html',
      body: 'html is ...',
    },
    {
      id: 2,
      title: 'css',
      body: 'css is ...',
    },
    {
      id: 3,
      title: 'js',
      body: 'js is ...',
    },
    {
      id: 4,
      title: 'react',
      body: 'react is ...',
    }
  ];
  let content = null;

  if(mode === 'WELCOME') {
    content = <Article title="Welcome" body="Hello, WEB"></Article>
  } else if(mode === 'READ') {
    <Article title="Read" body="Hello, Read"></Article>
  }
  return (
    <div className="App">
      <Header title="WEB" onChangeMode={()=> {
        mode = 'WELCOME';
      }}>
      </Header>
      <Nav topics={topics} onchangeMode={(id)=>{
        mode = 'READ';
      }}></Nav>
      {content}
    </div>
  );
}

export default App;
