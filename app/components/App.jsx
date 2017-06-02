import React from 'react';
import Notes from './Notes';
import uuid from 'uuid';
const InitialNotes = [
    {
        id: uuid.v4(),
        task: 'Learn React'
    },
    {
        id: uuid.v4(),
        task: 'Do Laundry'
    }
];

/*export default () => (
    <div>
        <button onClick={() => console.log('add Note')}>+</button>
        <Notes notes={notes}/>
    </div>
)*/

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            notes: InitialNotes
        }
    }

    addNote = () => {
        this.setState({
            notes: [...this.state.notes, { id: uuid.v4(), task: 'new task' }]
        });
    }

    deleteNote = (id, event) => {
        event.stopPropagation();
        this.setState({
            notes: this.state.notes.filter(note => note.id != id)
        });
    }

    onNoteClick = (id, event) => {
        event.stopPropagation();
        this.setState({
            notes: this.state.notes.map(note => ({ ...note, editing: note.id === id }))
        })
    }

    onEditFinish = (id, event) => {
        console.log('on Blurr');
        // event.stopPropagation();
        this.setState({
            notes: this.state.notes.map(note => ({
                ...note,
                editing: note.id === id ? false : note.editing,
                task: note.id === id ? event.target.value : note.task
            }))
        })
    }

    render() {
        const { notes } = this.state;
        return (
            <div>
                <button onClick={this.addNote}>+</button>
                <Notes notes={notes} onDelete={this.deleteNote} onNoteClick={this.onNoteClick} onEditFinish={this.onEditFinish}/>
            </div>
        );
    }
}