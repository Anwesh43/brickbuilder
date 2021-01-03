import {useState, useAnimatedEffect} from 'react'
const scGap = 0.02
const delay = 20 

export const useAnimatedScale = () => {
    const [animated, setAnimated] = useState(false)
    const [scale, setScale] = useState(0)
    return {
        scale, 
        start() {
            if (!animated) {
                setAnimated(true)
                let currScale = scale 
                const interval = setInterval(() => {
                    currScale += scGap 
                    setScale(currScale)
                    if (currScale > 1) {
                        setScale(1)
                        clearInterval(interval)
                    }
                })
            }
        }
    }
}
