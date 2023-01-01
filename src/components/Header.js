import React from 'react'
import Button from './Button'
// import PropTypes from 'prop-types'
const Header = ({title, onAdd, showAdd}) => {
    const onClick=(e)=>{
        console.log(e)
    }
  return (
    <header className='header'>
    <h1>{title}</h1>
    <Button color={showAdd ? 'red': 'green'} text={showAdd ? 'close': 'Add'} onClick={onAdd}/>
    </header>
  )
}
Header.defaultProps={
    title:'Task Tracker'
}
// css
// const headingstyle={
//     color:'red', 
//     backgroundColor:'black'
// }

// Header.PropTypes={
//     title:PropTypes.string
// }

export default Header