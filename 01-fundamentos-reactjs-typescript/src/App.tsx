import { Post, PostType } from "./components/Post";
import { Sidebar } from "./components/Sidebar";
import { Header } from "./components/Header";

import styles from './App.module.css';

import './global.css'

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/38982851?v=4',
      name: 'Deyvison J. Paula',
      role: 'Desenvolvedor Full Stack | .NET + React'
    },
    content: [
      { type: 'paragraph', content: 'Fala galerinha 💢'},
      { type: 'paragraph', content: 'Componentes servem para não repetir código e componentes podem ser utilizados em partes menores com códigos reutilizaveis'},
      { type: 'link', content: 'deyvison.full/whiteForce' }
    ],
    publishedAt: new Date('2024-05-28 20:00:00'),
  },
  {
  id: 2,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO @Rocketseat'
    },
    content: [
      { type: 'paragraph', content: 'Fala galerinha 💢'},
      { type: 'paragraph', content: 'Componentes servem para não repetir código e componentes podem ser utilizados em partes menores com códigos reutilizaveis'},
      { type: 'link', content: 'deyvison.full/whiteForce' }
    ],
    publishedAt: new Date('2024-05-30 07:55:00'),
  }
];

function App() {

  return (
    <div>
      <Header />
         
      <div className={styles.wrapper}>
        
        <Sidebar />

        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                post={post}
              />
            )
          })}
        </main>

      </div>
    
    </div>
  )
}

export default App
