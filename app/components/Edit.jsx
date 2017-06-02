import React from 'react';

export default class Edit extends React.Component {
    onKeyPress = (event) => {
        if (event.key === 'Enter') {
            this.props.onEditFinish(event);
        }
    }
    render() {
        const { onEdit, value, onEditFinish } = this.props;
        return (
            <div onClick={onEdit} >
                <input type="text" defaultValue={value} onBlur={onEditFinish} autoFocus={true} onKeyPress={this.onKeyPress}></input>
            </div >
        );
    }
}