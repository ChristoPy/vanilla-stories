import { users } from './state.js'

export default function ({ onAvatarClick }) {
    users.filter(({ stories }) => stories.length).forEach((user, index) => {
        const element = document.createElement('img')
        element.src = user.avatar
        element.alt = user.name
        element.classList.add('avatar')

        if (!user.stories.length) {
            element.classList.add('no-stories')
        }

        window.avatars.appendChild(element)

        element.addEventListener('click', () => {
            onAvatarClick(users[index])
        })
    })
}
