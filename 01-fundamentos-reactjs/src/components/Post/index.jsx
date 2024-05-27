/* eslint-disable react/prop-types */
import { Avatar } from '../Avatar';
import { Comment } from '../Comment';
import styles from './Post.module.css';

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                
                <div className={styles.author}>
                    <Avatar
                        srcAvatar="https://avatars.githubusercontent.com/u/38982851?v=4" 
                    />
                    <div className={styles.authorInfo}>
                        <strong>Deyvison Paula</strong>
                        <span>Full Stack</span>
                    </div>
                </div>

                <time title="25/05/2024 15:18h" dateTime="2024-05-25 15:18:30">Publicado há 20min</time>
            </header>

            <div className={styles.content}>
                <p>Fala galerinha 💢</p>
                <p>Vamos que vamos, Ultrapasse seus limites ... Plus Ultra! </p>
                <p>Componentes servem para não repetir código e componentes podem ser utilizados em partes menores com códigos reutilizaveis</p>
                <p>💥{' '}<a href="">deyvison.full/whiteForce </a></p>
                <p>
                    <a href="">#AceleraSenior </a>{' '}
                    <a href="">#Rocketseat </a>{' '}
                </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea 
                    placeholder='Deixe um comentário'
                />

                <div className={styles.btnPublish} >
                    <button type='sumbit'>Publicar</button>
                </div>
                
            </form>

            <div className={styles.commmentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>

        </article>
    )
}