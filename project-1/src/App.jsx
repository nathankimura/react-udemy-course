import { Component } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

class App extends Component {
  state = {
      name: 'Nathan Kimura',
      counter: 0
    }

  handlePClick = () => {
    this.setState({name : 'batatinha'})
  }

  handleAClick = (event) => {
    event.preventDefault();
    const { counter } = this.state
    this.setState({counter : counter + 1})
  }

  render() {

    const {name, counter} = this.state

    return (
    <div className="App">
       <div>
         <a
          onClick={this.handleAClick}
          href="https://vitejs.dev"
          target="_blank"
        >
           <img src="/vite.svg" className="logo" alt="Vite logo" />
         </a>
         <a href="https://reactjs.org" target="_blank">
           <img src={reactLogo} className="logo react" alt="React logo" />
         </a>
       </div>
       <h1>Vite + React</h1>
       <div className="card">
        <p>{counter}</p>
        <p onClick={this.handlePClick}>
          {name}
        </p>
         <p>
           Edit <code>src/App.jsx</code> and save to test HMR
         </p>
       </div>
       <p className="read-the-docs">
         Click on the Vite and React logos to learn more
       </p>
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