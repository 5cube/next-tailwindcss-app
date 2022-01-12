export interface IItem {
  id: number
  title: string
  content: string
  media: Array<{
    type: string
    url: string
    width?: number
    height?: number
  }>
}

export const items: IItem[] = [
  {
    id: 1,
    title: 'sunt aut facere repellat provident occaecati',
    content: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
    media: [
      {
        type: 'image/png',
        url: 'https://via.placeholder.com/600/92c952',
        width: 600,
        height: 600,
      },
    ],
  },
  {
    id: 2,
    title: 'qui est esse',
    content: 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla',
    media: [
      {
        type: 'image/png',
        url: 'https://via.placeholder.com/600/771796',
        width: 600,
        height: 600,
      },
    ],
  },
  {
    id: 3,
    title: 'doloribus ad provident suscipit at',
    content: 'qui consequuntur ducimus possimus quisquam amet similique\nsuscipit porro ipsam amet\neos veritatis officiis exercitationem vel fugit aut necessitatibus totam\nomnis rerum consequatur expedita quidem cumque explicabo',
    media: [
      {
        type: 'image/png',
        url: 'https://via.placeholder.com/600/d32776',
        width: 600,
        height: 600,
      },
    ],
  },
  {
    id: 4,
    title: 'sunt aut facere repellat provident occaecati',
    content: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
    media: [
      {
        type: 'image/png',
        url: 'https://via.placeholder.com/600/92c952',
        width: 600,
        height: 600,
      },
    ],
  },
  {
    id: 5,
    title: 'qui est esse',
    content: 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla',
    media: [
      {
        type: 'image/png',
        url: 'https://via.placeholder.com/600/771796',
        width: 600,
        height: 600,
      },
    ],
  },
  {
    id: 6,
    title: 'doloribus ad provident suscipit at',
    content: 'qui consequuntur ducimus possimus quisquam amet similique\nsuscipit porro ipsam amet\neos veritatis officiis exercitationem vel fugit aut necessitatibus totam\nomnis rerum consequatur expedita quidem cumque explicabo',
    media: [
      {
        type: 'image/png',
        url: 'https://via.placeholder.com/600/d32776',
        width: 600,
        height: 600,
      },
    ],
  },
]
