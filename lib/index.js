import './style.css'

function next() {
    const activeIndicator = document.querySelector('.indicator .item.active')
    activeIndicator.classList.add('played')
    activeIndicator.classList.remove('active')
    activeIndicator.nextElementSibling.classList.add('active')

    const activeStory = document.querySelector('.story.active')
    activeStory.classList.remove('active')
    activeStory.nextElementSibling.classList.add('active')
}

function prev() {
    const activeIndicator = document.querySelector('.indicator .item.active')
    activeIndicator.classList.remove('active')
    activeIndicator.previousElementSibling.classList.add('active')

    const activeStory = document.querySelector('.story.active')
    activeStory.classList.remove('active')
    activeStory.previousElementSibling.classList.add('active')
}

export default function Story(target, options) {
    let current = 0
    target.classList.add('stories')

    const indicator = document.createElement('div')
    indicator.classList.add('indicator')
    target.appendChild(indicator)

    options.stories.forEach((story, index) => {
        const indicatorItem = document.createElement('div')
        indicator.appendChild(indicatorItem)
        indicatorItem.classList.add('item')

        const storyElement = document.createElement('div')
        storyElement.classList.add('story')
        storyElement.style.backgroundImage = `url(${story.url})`
        target.appendChild(storyElement)

        if (index === 0) {
            storyElement.classList.add('active')
            indicatorItem.classList.add('active')
        }
        if (index === options.stories.length - 1) return
    })
    target.addEventListener('click', ({ clientX }) => {
        const { left, width } = target.getBoundingClientRect()
        if (clientX < left + width / 2 && current !== 0) {
            prev()
            current--
        }
        else if (clientX > left + width / 2 && current !== options.stories.length - 1) {
            next()
            current++
        }
    })
    target.addEventListener('animationend', () => {
        if (current !== options.stories.length - 1) {
            next()
            current++
        }
    })
}
