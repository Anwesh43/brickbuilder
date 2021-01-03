import React from 'react'
import Brick from './Brick'
import {brickW, brickH} from './constant' 

const bricks = () => {
    const brs = []
    for (var j = 0; j < brickH * brickW; j++) {
        brs.push(<Brick key = {`brick_${j}`} i = {j} tap = {() => {}}/>)
    }
    return brs 
}
const BrickContainer = (hooks) => {
    return (<div>
        {bricks()}
    </div>)
}

export default BrickContainer