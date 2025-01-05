export const FadeDown = (delay) => {
    return {
        hidden: {
            opacity: 0,
            y: -100
        },
        vissible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                delay: delay
            }
        }
    }
}

export const FadeLeft = (delay) => {
    return {
        hidden: {
            opacity: 0,
            x: 100
        },
        vissible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 1,
                delay: delay
            }
        }
    }
}


export const FadeRight = (delay) => {
    return {
        hidden: {
            opacity: 0,
            x: -100
        },
        vissible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 1,
                delay: delay
            }
        }
    }
}