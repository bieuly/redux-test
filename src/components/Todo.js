import React from 'react'
import PropTypes from 'prop-types'

const Todo = ({text, completed, onClick}) => {
    return (
        <li onClick={onClick}
            style={{
                textDecoration: completed ? 'line-through' : 'none'
            }}>{text}</li>
    );
}

Todo.propTypes = {
    text: PropTypes.string,
    completed: PropTypes.bool,
    onClick: PropTypes.func
}

export default Todo;