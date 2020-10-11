import React, { useState, useEffect } from 'react'

function HookMouse() {
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)

  const logMousePosition = e => {
    console.log('mouse event')
    setX(e.clientX)
    setY(e.clientY)
  }

  // Replace lifecyle, the empty array is for componentDidMount() and adding state to the array is for componentDidUpdate()
  useEffect(() => {
    console.log('useEffect called')
    window.addEventListener('mousemove', logMousePosition)

    // ComponentWillUnmount
    return () => {
      console.log('component unmounting code')
      window.removeEventListener('mousemove', logMousePosition)
    }
  }, [])

  return (
    <div>
      Hook X - {x}, Hook Y - {y}
    </div>
  )
}

export default HookMouse
