import Link from 'next/link'

interface NavProps {
  items?: Array<{
    text: string
    href?: string
  }>
}

const Nav = ({ items }: NavProps) => {
  return (
    <div className="py-4">
      {items?.map((item, i) => (
        <span key={i}>
          {item.href ? (
            <Link href={item.href}>
              <a className="hover:text-blue-500 transition">{item.text}</a>
            </Link>
          ) : (
            <span className="text-gray-500">{item.text}</span>
          )}
          {i + 1 < items.length ? <span className="text-gray-500 mx-1.5">&gt;</span> : undefined}
        </span>
      ))}
    </div>
  )
}

export default Nav
