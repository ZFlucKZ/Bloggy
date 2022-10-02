import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import db from '../firebase';
import { doc, onSnapshot } from 'firebase/firestore';

function PostDetail() {
  const [post, setPost] = useState({});
  const { postId } = useParams();

  useEffect(() => {
    const docRef = doc(db, 'posts', postId);

    onSnapshot(docRef, (snapshot) => {
      console.log('snapshot.data()', snapshot.data());
      setPost(snapshot.data());
    });
  }, []);

  return (
    <div className="post-detail">
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}

export default PostDetail;
