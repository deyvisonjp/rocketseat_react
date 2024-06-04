/* eslint-disable react/prop-types */
import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR'

import { Avatar } from '../Avatar';
import { Comment } from '../Comment';
import styles from './Post.module.css';
import { useState } from 'react';

export function Post({ author, content, publishedAt  }) {
    const [comments, setComments] = useState([
        'Muito bom Deyvison, parabéns!! 🙌🙌'
    ]);

    const [newCommentText, setNewCommentText] = useState('');

    // const publishedDateFormatted = new Intl.DateTimeFormat('pt-BR', {
    //     day: '2-digit',
    //     month: 'long',
    //     hour: '2-digit',
    //     minute: '2-digit'
    // }).format(publishedAt);
    const publishedDateFormatted = format(publishedAt, "dd 'de' LLLL 'às' H:mm'h'", {
        locale: ptBR
    });

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true,
    });

    function handleCreateNewComment() {
        event.preventDefault();

        setComments([...comments, newCommentText]);
        setNewCommentText('');
    }

    function handleNewCommentChange() {
        setNewCommentText(event.target.value);
    }

    return (
        <article className={styles.post}>
            <header>
                
                <div className={styles.author}>
                    <Avatar
                        srcAvatar={author.avatarUrl}
                    />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>{publishedDateRelativeToNow}</time>
            </header>

            <div className={styles.content}>
                {content.map(line => {
                    if (line.type === 'paragraph') {
                        return <p>{line.content}</p>;
                    } else if (line.type === 'link') {
                        return <p><a href="#">{line.content}</a></p>
                    }
                })}    
                
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                
                <textarea
                    name='comment'
                    placeholder='Deixe um comentário'
                    value={newCommentText}
                    onChange={handleNewCommentChange}
                />

                <div className={styles.btnPublish} >
                    <button type='sumbit'>Publicar</button>
                </div>
                
            </form>

            <div className={styles.commmentList}>
                {comments.map(comment => {
                    return <Comment content={comment} />
                })}
            </div>

        </article>
    )
}