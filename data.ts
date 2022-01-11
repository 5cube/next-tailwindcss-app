export interface Item {
  id: number
  title: string
  content: string
  media: Array<{
    type: string
    url: string
  }>
}

export const items: Item[] = [
  {
    id: 1,
    title: 'Title Title',
    content: 'Content Content Content Content Content Content Content Content',
    media: [
      {
        type: 'image/png',
        url: 'https://images.unsplash.com/photo-1585815157396-ad62043f721b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80',
      },
    ],
  },
  {
    id: 2,
    title: 'Title Title',
    content: 'Content Content Content Content Content Content Content Content',
    media: [
      {
        type: 'image/png',
        url: 'https://images.unsplash.com/photo-1585815157396-ad62043f721b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80',
      },
    ],
  }
]
