export const currentStory = {
    user: null,
    story: null
}

export const users = [
    {
        name: 'Anna',
        avatar: 'https://i.pravatar.cc/150?img=1',
        stories: [
            {
                id: 1,
                timestamp: 1593642532972,
                url: 'https://picsum.photos/800/600?image=0',
                seen: false
            },
            {
                id: 2,
                timestamp: 1593642532972,
                url: 'https://picsum.photos/800/600?image=1',
                seen: false
            }
        ]
    },
    {
        name: 'Bob',
        avatar: 'https://i.pravatar.cc/150?img=2',
        stories: []
    },
    {
        name: 'Charlie',
        avatar: 'https://i.pravatar.cc/150?img=3',
        stories: []
    },
    {
        name: 'David',
        avatar: 'https://i.pravatar.cc/150?img=4',
        stories: []
    },
    {
        name: 'Eve',
        avatar: 'https://i.pravatar.cc/150?img=5',
        stories: []
    }
]

export function hasPreviousStory() {
    const { user, story } = currentStory
    const index = user.stories.findIndex((s) => s.id === story.id)
    return index > 0
}
export function hasNextStory() {
    const { user, story } = currentStory
    const index = user.stories.findIndex((s) => s.id === story.id)
    return index < user.stories.length - 1
}
export function previousStory() {
    const { user, story } = currentStory
    const index = user.stories.findIndex((s) => s.id === story.id)
    currentStory.story = user.stories[index - 1]
}
export function nextStory() {
    const { user, story } = currentStory
    const index = user.stories.findIndex((s) => s.id === story.id)
    currentStory.story = user.stories[index + 1]
}
export function setAsSeen() {
    const { user, story } = currentStory
    const index = user.stories.findIndex((s) => s.id === story.id)
    user.stories[index].seen = true
}