export default function homeSlide({ }) {
    const modifySlide = (index, button) =>
        numberSlide === index ? (button.checked = true) : (button.checked = false)

    const restartSlideCount = (expresion, value) =>
        expresion ? (numberSlide = value) : numberSlide

    const manipulateSlide = (countRestart, initialValue) => {
        navButtons.forEach((navButton, index) => {
            restartSlideCount(countRestart, initialValue)
            modifySlide(index, navButton)
        })
    }

    const nextSlide = () => {
        numberSlide++
        const countSlideNextRestart = numberSlide > navButtons.length - 1
        const initialValue = 0
        manipulateSlide(countSlideNextRestart, initialValue)
    }

    const prevSlide = () => {
        numberSlide--
        const countSlidePrevRestart = numberSlide < navButtons.length - navButtons.length
        const initialValue = navButtons.length - 1
        manipulateSlide(countSlidePrevRestart, initialValue)
    }

    return {
        nextSlide,
        prevSlide
    }

}