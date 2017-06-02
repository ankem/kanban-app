import React from 'react';
import Edit from './Edit';



export default class Editiable extends React.Component {
    render() {
        const { editing, value, onEdit, onNoteClick, onEditFinish } = this.props;
        return editing ?
            (
                <Edit onEdit={onEdit} value={value} onEditFinish={onEditFinish} />
            ) :
            (
                <span onClick={onNoteClick}>{value}</span>
            );
    }



}
