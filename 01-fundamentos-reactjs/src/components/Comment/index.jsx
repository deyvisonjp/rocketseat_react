import { useState } from 'react';
import { ThumbsUp, Trash } from '@phosphor-icons/react';
import styles from './Comment.module.css';
import { Avatar } from '../Avatar';

export function Comment({ content, deleteComment }) {

    const [likeCount, setLikeCount] = useState(0);

    function handleDeleteComment() {
        deleteComment(content)
    }

    function handleLikeComment() {
        setLikeCount(likeCount + 1);
    }

    return (
        <div className={styles.comment}>
            <Avatar 
                hasBorder={false}
                srcAvatar="http://github.com/diego3g.png"
            />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Diego Fernandes</strong>
                            <time title="25/05/2024 15:18h" dateTime="2024-05-25 15:18:30">
                                Cerca de 1h atrás
                            </time>
                        </div>

                        <button onClick={handleDeleteComment} title='Deletar comentário'>
                            <Trash size={24}/>
                        </button>

                    </header>

                    <p>{content}</p>

                </div>

                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>

            </div>
        </div>
    )
}