import React from 'react';
import Note from './Note';
import Editable from './Editable';
export default ({ notes, onDelete, onEdit, onNoteClick, onEditFinish }) => (
    <ul>{notes.map(note =>
        <li key={note.id}>
            <Note >
                <Editable
                    onEdit={onEdit}
                    value={note.task}
                    editing={note.editing}
                    onNoteClick={onNoteClick.bind(null, note.id)}
                    onEditFinish = {onEditFinish.bind(null, note.id)}
                />
                <button onClick={onDelete.bind(null, note.id)}>X</button>
            </Note>
        </li>)
    }</ul>)

