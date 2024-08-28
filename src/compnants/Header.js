import React from 'react'

export default function Header(props) {
  return (
    <h2 style={{color:"red",fontFamily:"serif",fontWeight:"bold"}} className='col'>{props.title}</h2>
  )
}
