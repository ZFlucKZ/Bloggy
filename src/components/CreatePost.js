import { useState } from 'react';
import { useFormInput } from '../customHooks';
import db from '../firebase';
import { collection, addDoc } from 'firebase/firestore';

function CreatePost() {
  const title = useFormInput('');
  const subTitle = useFormInput('');
  const content = useFormInput('');

  async function handleSubmit(e) {
    e.preventDefault();

    console.log('title', title);
    console.log('subTitle', subTitle);
    console.log('content', content);

    const postsColl = collection(db, 'posts');
    await addDoc(postsColl, {
      title,
      subTitle,
      content,
      createdAt: new Date(),
    });
  }

  return (
    <div className="create-post">
      <h1>Create Post</h1>

      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label>Title</label>
          <input {...title} />
        </div>

        <div className="form-field">
          <label>Sub title</label>
          <input {...subTitle} />
        </div>

        <div className="form-field">
          <label>Content</label>
          <input {...content} />
        </div>

        <button className="create-post-btn">Create Post</button>
      </form>
    </div>
  );
}

export default CreatePost;
