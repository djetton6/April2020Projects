import React, { useContext } from 'react'
import playerContext from '../../context/playerContext'

function Header() {
  const { currentSong, songs } = useContext(playerContext);

  return (
    <header class='banner'>
      <div class="highlight">
        <h2> 🌷 🌷 Happy Valentines Day Beautiful Maestra 🌷 🌷</h2>
      </div>
      <h3 class='song-title-headline'>Now Playing: {songs[currentSong][0]}</h3>
    </header>
  )
}

export default Header
