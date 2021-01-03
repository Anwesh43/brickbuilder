import React from 'react'
import {useAnimatedScale, useDimension} from './hooks'
const brickW = 40
const brickH = 40 
const brickSyle = (w, h, i) => {
    const bw = w / brickW 
    const bh = h / brickH 
    const ix = i % brickW 
    const iy = Math.floor(i / brickH)
    const position = 'absolute'
    const width = `${iw}px`
    const height = `${ih}px`
    const left = `${ix * brickW}px`
    const top = `${iy * brickH}px`
    const border = `2px solid indigo`
    return {
        position,
        width,
        height,
        left, 
        top,
        border
    }
}

const brickFillStyle = (w, h, i, scale) => {
    const style = brickStyle(w, h, i)
    let {width, height} = style 
    width = `${parseFloat(width) * scale}px`
    height = `${parseFloat(height) * scale}px`
    const background = 'indigo'
    style.border = null  
    return {...style, width, height}
}

const Brick = ({tap, i}) => {
     const {scale, start} = useAnimatedScale()
     const {w, h} = useDimension()
     return (
        <div onClick = {() => {
            start()
            tap()
        }} style = {brickStyle(w, h, i)}>
            <div style = {brickFillStyle(w, h, i, scale)}></div>
        </div>
    )
}
export default Brick 