// import { Header } from "./components/Header";
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
          {/* <Post />
          <Post /> */}
        </main>

      </div>
    
    </div>
  )
}

export default App
