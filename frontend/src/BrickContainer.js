import React from 'react'
import Brick from './Brick'
const brickW = 40
const brickH = 40 

const bricks = () => {
    const brs = []
    for (var j = 0; j < brickH * brickW; j++) {
        brs.push(<Brick key = {`brick_${j}`} tap = {() => {}}/>)
    }
    return brs 
}
const BrickContainer = (hooks) => {
    return (<div>
        {bricks()}
    </div>)
}

export default BrickContainer