import { Header } from "./components/Header"
import { Post } from "./Post"

import './global.css'

function App() {

  return (
    <div>
      <Header />

      <Post
        author="Deivid Sabino"
        content="Primeiro Post"
      />
    </div>
  )
}

export default App
