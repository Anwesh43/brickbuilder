import React from 'react'
import {useAnimatedScale, useDimension} from './hooks'
import {brickW, brickH} from './constant'
const brickStyle = (w, h, i) => {
    const bw = w / brickW 
    const bh = h / brickH 
    const ix = i % brickW 
    const iy = Math.floor(i / brickH)
    const position = 'absolute'
    const width = `${bw}px`
    const height = `${bh}px`
    const left = `${ix * bw}px`
    const top = `${iy * bh}px`
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
    style.top = `${parseFloat(width) / 2 - parseFloat(width) * 0.5 * scale}px`
    style.left = `${parseFloat(height) / 2 - parseFloat(height) * 0.5 * scale}px`
    console.log(style)
    return {...style, width, height, style, background}
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