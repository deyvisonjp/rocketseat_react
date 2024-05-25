/* eslint-disable react/prop-types */
import styles from './Post.module.css';

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://github.com/deyvisonjp.png" />
                    <div className={styles.authorInfo}>
                        <strong>Deyvison Paula</strong>
                        <span>Full Stack</span>
                    </div>
                </div>

                <time title="25/05/2024 15:18h" dateTime="2024-05-25 15:18:30">Publicado há 20min</time>
            </header>

            <div className={styles.content}>
                <p>Fala galerinha 😁</p>
                <p>Vamos que vamos, mesmo com a preguiça, seja mais forte... Ultrapasse seus limites ... Plus Ultra! </p>
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

        </article>
    )
}