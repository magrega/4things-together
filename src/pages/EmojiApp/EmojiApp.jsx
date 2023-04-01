import { useState } from 'react';
import EmojiLimit from './Emoji/EmojiLimit/EmojiLimit';
import EmojiContainer from './Emoji/EmojiContainer/EmojiContainer';
import EmojiRow from './Emoji/EmojiRow/EmojiRow';
import Form from './Emoji/Form/Form';
import './EmojiApp.css';

function EmojiApp() {
  const [formValue, setFormValue] = useState('');
  const [limit, setLimit] = useState('15');

  const onFormChange = (e) => {
    const search = e.target.value;
    setFormValue(search);
  }

  const getSelectedDropdownValue = (e) => {
    setLimit(e.target.value)
  }

  return (
    <div className="emoji-app">
      <EmojiLimit getSelectedValue={getSelectedDropdownValue} />
      <Form formValue={formValue} onFormChange={onFormChange} />
      <EmojiContainer search={formValue} limit={limit}>
        <EmojiRow />
      </EmojiContainer>
    </div>
  );
}

export default EmojiApp;
