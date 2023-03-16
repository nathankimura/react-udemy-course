import './App.css'
import { Component } from 'react'

class App extends Component {
  state = {
      counter: 0,
      posts:[
        {
          id: 1,
          title: 'titulo 1',
          body: 'o corpo 1'
        },
        {
          id: 2,
          title: 'titulo 2',
          body: 'o corpo 2'
        },
        {
          id: 3,
          title: 'titulo 3',
          body: 'o corpo 3'
        },
      ]
    };

    componentDidMount() {
      this.handleTimeout();
    }
    
    handleTimeout = () => {
      const {posts, counter} = this.state
      posts[0].title = 'o titulo mudou'
      
      setTimeout(() => {
        this.setState({posts, counter: counter + 1})
      }, 5000);
    }

  render() {

    const {posts, counter} = this.state

    return (
    <div className="App">
      <p>{counter}</p>
      {posts.map((post) => (
        <div key={post.id}>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
    )
  }
}

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <div className="App">
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src="/vite.svg" className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://reactjs.org" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </div>
//   )
// }

export default App