import React from 'react'

function Footer() {
  const today = new Date()
  
  return (
    <footer className="p-2 flex items-end justify-end">
     &copy; {today.getFullYear()} Fanny Catusse
    </footer>
  )
}

export default Footer