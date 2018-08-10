import React from 'react'
import PropTypes from 'prop-types'

const Link = ({active, onClick, children}) => {
    return (
    <button
        onClick={onClick}
        disabled={active}
        style={{marginLeft: '4px'}}
    >
        {children}
    </button>
    )

}

Link.propTypes = {
    active: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
}

export default Link