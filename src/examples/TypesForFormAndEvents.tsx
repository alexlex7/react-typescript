import React, { useState } from 'react';

//===== Simply check the type of the 'event'

const defaultFormData = {
  title: '',
  body: '',
};

export default function TypesForFormAndEvents() {
  const [formData, setFormData] = useState(defaultFormData);
  const { title, body } = formData;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState) => ({ ...prevState, [e.target.id]: e.target.value }));
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);

    setFormData(defaultFormData);
  };
  return (
    <div style={{ border: '1px solid tomato', marginTop: '20px' }}>
      <h1>Form</h1>
      <p>Create post</p>
      <form onSubmit={onSubmit}>
        <label htmlFor="title">Title</label>
        <br />
        <input type="text" id="title" value={title} onChange={onChange} />
        <br />
        <br />
        <label htmlFor="body">Body</label>
        <br />
        <input type={'text'} id="body" value={body} onChange={onChange} />
        <br />
        <br />
        <button type="submit">Upload post</button>
      </form>
    </div>
  );
}
