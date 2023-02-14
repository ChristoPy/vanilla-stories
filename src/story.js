import {
    currentStory,
    hasNextStory,
    hasPreviousStory,
    nextStory,
    previousStory,
    setAsSeen,
    users
} from './state.js'

function next() {
    nextStory()

    const activeIndicator = document.querySelector('.indicator .item.active')
    activeIndicator.classList.add('played')
    activeIndicator.classList.remove('active')
    activeIndicator.nextElementSibling.classList.add('active')

    const activeStory = document.querySelector('.story.active')
    activeStory.classList.remove('active')
    activeStory.nextElementSibling.classList.add('active')
}

function prev() {
    previousStory()

    const activeIndicator = document.querySelector('.indicator .item.active')
    activeIndicator.classList.remove('active')
    activeIndicator.previousElementSibling.classList.add('active')

    const activeStory = document.querySelector('.story.active')
    activeStory.classList.remove('active')
    activeStory.previousElementSibling.classList.add('active')
}

function toggleStories() {
    window.indicator.innerHTML = ''
    window.content.innerHTML = ''

    if (window.stories.classList.contains('active')) {
        window.stories.classList.remove('active')
        document.body.style = ''
    } else {
        window.stories.classList.add('active')
        document.body.style = 'overflow: hidden'
    }
}
function showUserInfo(user) {
    window.avatarSmall.src = user.avatar
    window.userName.textContent = user.name
}

export default function Story(user) {
    toggleStories()
    showUserInfo(user)

    currentStory.user = user
    currentStory.story = user.stories[0]

    window.buttonClose.addEventListener('click', toggleStories)

    user.stories.forEach((story, index) => {
        const indicatorItem = document.createElement('div')
        window.indicator.appendChild(indicatorItem)
        indicatorItem.classList.add('item')

        const storyElement = document.createElement('div')
        storyElement.classList.add('story')
        storyElement.style.backgroundImage = `url(${story.url})`
        window.content.appendChild(storyElement)

        if (index === 0) {
            storyElement.classList.add('active')
            indicatorItem.classList.add('active')
        }
    })
    window.content.addEventListener('click', ({ clientX }) => {
        const { left, width } = window.content.getBoundingClientRect()
        if (clientX < left + width / 2 && hasPreviousStory()) {
            prev()
        }
        else if (clientX > left + width / 2 && hasNextStory()) {
            setAsSeen()
            next()
        }
    })
    window.indicator.addEventListener('animationend', () => {
        setAsSeen()

        if (hasNextStory()) {
            next()
        } else {
            toggleStories()
            console.log('No more stories')
            console.log(users)
        }
    })
}
