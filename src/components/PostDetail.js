import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import db from '../firebase';
import { doc, onSnapshot } from 'firebase/firestore';

import Radium from 'radium';

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
      <h1 style={styles.heading}>{post.title}</h1>
      <p style={styles.PostDetail}>{post.content}</p>
    </div>
  );
}

export default Radium(PostDetail);

const styles = {
  heading: {
    textAlign: 'center',
    margin: 0,
    ':hover': {
      backgroundColor: 'red',
    },
  },
  PostDetail: {
    border: '1px solid #e1e1e1',
    padding: 5,
    paddingTop: 10,
    borderRadius: 5,

    '@media(max-width: 720px)': {
      color: 'pink',
    },
  },
};
