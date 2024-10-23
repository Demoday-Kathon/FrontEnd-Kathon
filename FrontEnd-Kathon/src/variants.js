export const fadein = (direction, delay) => {
    return{
        hidden: {
            y: direction === 'up' ? 100 : direction === 'down' ? -50 : 0,
            x: direction === 'left' ? 100 : direction === 'right' ? -100 : 0,
            opacity: 0
        },
        show: {
            y: 0,
            x: 0,
            opacity: 1,
            transition: {
                type: 'tween',
                duration: 1.2,
                delay: 0.1,
                ease: [0.25, 0.25, 0.25, 0.75],
            }
        }
    }
}