import React, { useState } from 'react'
import clear from '../1.png'
import night from '../2.png'
// import rain from '../3.png'


export default function BgFunction() {

  const [disabled, setDisabled] = useState(false);

  const changeBg = (image) => {
    setDisabled(true)
    document.body.style.background = `url(${image})`
    // document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundSize = 'cover';
    setTimeout(() => {
      setDisabled(false)
    }, 2000);
  }
  return (
    <div>
      <button disabled={disabled} onClick={() => changeBg(clear)}>Press Me</button>
      <button disabled={disabled} onClick={() => changeBg(night)}>Press Me</button>
      <button disabled={disabled} onClick={() => changeBg(auto)}>Press Me</button>
    </div>
  )
}

