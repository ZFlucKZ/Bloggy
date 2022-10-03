import { useFormInput } from '../customHooks';
import db from '../firebase';
import { collection, addDoc } from 'firebase/firestore';

import styled, { css } from 'styled-components';

const StyledButton = styled.button`
  height: 33px;
  background: ${(props) => (props.primary ? '#4caf50' : 'blue')};
  border: 0;
  color: #fff;
  padding: 8px;
  font-size: 15px;
  border-radius: 3px;
  cursor: pointer;
  ${(props) =>
    !props.primary &&
    css`
      border: 4px solid red;
    `}
`;

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
      title: title.value,
      content: content.value,
      subTitle: subTitle.value,
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

        <StyledButton primary>Create Post</StyledButton>
      </form>
    </div>
  );
}

export default CreatePost;
