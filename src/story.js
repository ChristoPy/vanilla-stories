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

    window.buttonClose.addEventListener('click', toggleStories)

    let current = 0

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
    window.indicator.addEventListener('animationend', () => {
        if (current < user.stories.length - 1) {
            next()
            current++
        } else {
            current = 0
            toggleStories()
        }
    })
}
