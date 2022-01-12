import Head from 'next/head'
import { useRouter } from 'next/router'
import useSWR from 'swr'
import type { IItem } from '../../data'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'

const fetcher = async (url: string) => {
  const res = await fetch(url)
  const data = await res.json()

  if (res.status !== 200) {
    throw new Error(data.message)
  }
  return data
}

const Item = () => {
  const { query } = useRouter()
  const { data, error } = useSWR<IItem>(
    () => query.id && `/api/items/${query.id}`,
    fetcher
  )

  return (
    <>
      <Head>
        <title>{data?.title}</title>
        <meta name="description" content={data?.title} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container grow py-10">
        {error ? (
          <div>{error.message}</div>
        ) : !data ? (
          <div>Loading...</div>
        ) : (
          <>
            <Nav items={[{ text: 'Home', href: '/' }, { text: data.title }]} />

            <h1 className="text-3xl font-semibold mb-4">
              {data.title}
            </h1>

            <div>
              {data.content}
            </div>
          </>
        )}
      </main>

      <Footer />
    </>
  )
}

export default Item
