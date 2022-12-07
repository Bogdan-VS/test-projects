import { iconsData } from './iconData'
import { IArticles } from './interfaces'

export const articles: IArticles[] = [
  {
    id: 1,
    img: './assets/images/img_7.png',
    date: '22 June 2020',
    person: 'William Pond',
    title: '2022 software development trends explained with benefits',
    content: [
      {
        id: 1,
        type: 'p',
        text: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas. Nulla rhoncus consectetur eros non iaculis ',
        decorate: {
          type: 'cursive',
          text: '“Vivamus lectus enim, convallis nec dapibus vel, semper id ante. Morbi pulvinar sapien nulla, eu dignissim enim ullamcorper vitae”',
        },
      },
      // {
      //   id: 2,
      //   type: 'cursive',
      //   text: '“Vivamus lectus enim, convallis nec dapibus vel, semper id ante. Morbi pulvinar sapien nulla, eu dignissim enim ullamcorper vitae”',
      // },
      {
        id: 2,
        type: 'p',
        text: 'Ut sit amet neque vel mauris consequat aliquam at in arcu. Ut vulputate, augue luctus dignissim pretium, elit magna placerat elit, at venenatis lacus arcu eget quam. Fusce nec cursus mi, sed',
        decorate: {
          type: 'a',
          text: 'blandit',
        },
      },
      // {
      //   id: 4,
      //   type: 'a',
      //   text: 'blandit',
      // },
      {
        id: 3,
        type: 'h6',
        text: '“Morbi urna massa, imperdiet in mauris et, euismod vestibulum lacus. Integer enim elit, tincidunt aliquam ligula id, lacinia auctor orci. Sed quis lobortis eros. Fusce id commodo libero”',
        decorate: {
          type: '',
          text: '',
        },
      },
      {
        id: 4,
        type: 'p',
        text: 'Mauris purus diam, iaculis non leo nec, ultricies fringilla odio. Fusce feugiat elit facilisis volutpat venenatis.',
        decorate: {
          type: 'bold',
          text: 'Vestibulum tempor ligula vel orci consectetur, eu euismod augue bibendum. In volutpat libero velit, et mattis tortor placerat eget.',
        },
      },
      // {
      //   id: 7,
      //   type: 'span',
      //   text: 'Vestibulum tempor ligula vel orci consectetur, eu euismod augue bibendum. In volutpat libero velit, et mattis tortor placerat eget.',
      // },
      {
        id: 5,
        type: 'p',
        text: 'Ut nec aliquam urna, et varius massa. Praesent eu nisl ac ex maximus iaculis. Sed placerat, ligula vel tempor pellentesque, odio ipsum lobortis orci, sit amet fermentum ex nunc ac diam.',
        decorate: {
          type: '',
          text: '',
        },
      },
    ],
    views: 481,
    share: iconsData.SocialIcons,
    tags: [
      {
        id: 1,
        title: 'Data',
      },
      {
        id: 2,
        title: 'Future',
      },
    ],
  },
]
