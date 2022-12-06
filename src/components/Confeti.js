import React from 'react'
import Confetti from 'react-confetti';
import useWindowDimensions from './Windowsize';

const Confeti = (props) => {

    const {width,height} = useWindowDimensions()
  return (
    <div>
      <Confetti style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} />
    
    </div>
  )
}

export default Confeti