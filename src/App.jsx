import './App.css'
import { Provider } from 'react-redux'
import Addtodo from './comp/Addtodo';
import Todolist from './comp/Todolist'
import { store } from './store/store';

function App() {


  return (
    <Provider store={store}>
      <Addtodo />
      <Todolist />
    </Provider>
  )
}

export default App
