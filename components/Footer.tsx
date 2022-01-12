import Image from 'next/image'

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-3">
      <div className="container">
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className="h-4 align-middle ml-2">
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </div>
    </footer>
  )
}

export default Footer
