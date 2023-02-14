import './style.css'
import Story from './lib'

Story(document.querySelector('#app'), {
  duration: 1000,
  stories: [
    {
      url: 'https://picsum.photos/800/600?image=0',
      duration: 2000,
    },
    {
      url: 'https://picsum.photos/800/600?image=1',
      duration: 2000,
    },
    {
      url: 'https://picsum.photos/800/600?image=2',
      duration: 2000,
    },
    {
      url: 'https://picsum.photos/800/600?image=3',
      duration: 2000,
    },
    {
      url: 'https://picsum.photos/800/600?image=4',
      duration: 2000,
    },
  ]
});
