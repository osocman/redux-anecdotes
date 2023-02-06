import AnecdoteList from './components/AnecdoteList'
import AnecdoteForm from './components/AnecdoteForm'
import Notification from './components/Notification'

const App = () => {

  return (
    <div>
      <AnecdoteList/>
      <h2>Create new</h2>
      <AnecdoteForm/>
      <Notification/>
    </div>
  )
}

export default App