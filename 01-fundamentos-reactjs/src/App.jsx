import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";
import { Header } from "./components/Header";

import styles from './App.module.css';

import './global.css'


function App() {

  return (
    <div>
      <Header />
         
      <div className={styles.wrapper}>
        
        <aside>
          <Sidebar />
        </aside>

        <main>
          <Post 
            author="Deyvison Paula"
            content="Acelera Senior - Front End - RocketSeat"
          />
          <Post 
            author="Deyvison Paula"
            content="Acelera Senior - Back End - Desenvolvedor IO"
          />
        </main>

      </div>
    
    </div>
  )
}

export default App
