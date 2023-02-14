import './src/style.css'
import Avatars from './src/avatars.js'
import Story from './src/story.js'

Avatars({
  onAvatarClick: (user) => {
    Story(user)
  }
})
