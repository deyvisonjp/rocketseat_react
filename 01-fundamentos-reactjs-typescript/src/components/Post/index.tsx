import { format, formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import { Avatar } from '../Avatar';
import { Comment } from '../Comment';
import styles from './Post.module.css';
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';

interface Author {
    name: string;
    role: string;
    avatarUrl: string;
}

interface Content {
    type: 'paragraph' | 'link';
    content: string;
}

export interface PostType {
    id: number;
    author: Author;
    content: Content[];
    publishedAt: Date;
}

interface PostProps {
    post: PostType;
}


export function Post({ post }: PostProps) {
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
    const publishedDateFormatted = format(post.publishedAt, "dd 'de' LLLL 'às' H:mm'h'", {
        locale: ptBR
    });

    const publishedDateRelativeToNow = formatDistanceToNow(post.publishedAt, {
        locale: ptBR,
        addSuffix: true,
    });

    function handleCreateNewComment(event: FormEvent) {
        event.preventDefault();

        setComments([...comments, newCommentText]);
        setNewCommentText('');
    }

    function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('');
        setNewCommentText(event.target.value);
    }

    function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('Esse campo é obrigatório!');
    }

    function onDeleteComment(commentToDelete: string) {
        // Pela imutabilidade, não vamos alterar a informação, mas reescrever/criando a lista/estado
        const listaComentariosAposDelete = comments.filter(comment => {
            return comment !== commentToDelete;
        })
        setComments(listaComentariosAposDelete);
    }

    const isNewCommentEmpty = newCommentText.length === 0;

    return (
        <article className={styles.post}>
            <header>
                
                <div className={styles.author}>
                    <Avatar
                        srcAvatar={post.author.avatarUrl}
                    />
                    <div className={styles.authorInfo}>
                        <strong>{post.author.name}</strong>
                        <span>{post.author.role}</span>
                    </div>
                </div>

                <time title={publishedDateFormatted} dateTime={post.publishedAt.toISOString()}>{publishedDateRelativeToNow}</time>
            </header>

            <div className={styles.content}>
                {post.content.map(line => {
                    if (line.type === 'paragraph') {
                        return <p key={line.content}> {line.content} </p>;
                    } else if (line.type === 'link') {
                        return  <p key={line.content}> <a href="#"> {line.content} </a> </p>;
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

                    onInvalid={handleNewCommentInvalid}
                    required
                />

                <footer>
                    <div className={styles.btnPublish} >
                        <button type='submit' disabled={isNewCommentEmpty}>
                            Publicar
                        </button>
                    </div>
                </footer>
                
            </form>

            <div className={styles.commmentList}>
                {comments.map(comment => {
                    return (
                        <Comment 
                            key={comment} 
                            content={comment} 
                            onDeleteComment={onDeleteComment}
                        />
                    )
                })}
            </div>

        </article>
    )
}