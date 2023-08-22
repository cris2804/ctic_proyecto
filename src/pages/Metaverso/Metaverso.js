import React from 'react'
const style_container = {
    width:'100%',
    height: '100vh',
    position: 'absolute',
    top: '0',
    left: '0',
    zIndex: '20',
}
export default function Metaverso() {
  return (
    <iframe style={style_container} 
    src="https://www.spatial.io/s/roams-Immersive-Space-64b9d64eb96368ef9ae52778?share=8145885502253992499"
    sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
    
    >

    </iframe>
  )
}
