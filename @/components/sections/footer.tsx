const Footer = () => {
  return (
    <footer className="mt-12 flex flex-col-reverse justify-between gap-4 border-t border-white px-4 py-6 text-sm text-white md:flex-row">
      <div>
        Developed & designed by:{' '}
        <span className="text-underline">Spencer Wong</span>
      </div>
      <div className="flex items-center gap-2">
        <a
          className="hover:underline"
          href="https://www.linkedin.com/in/spenwong"
          target="_blank"
        >
          LinkedIn
        </a>
        <a
          className="hover:underline"
          href="https://github.com/imstarbucks"
          target="_blank"
        >
          GitHub
        </a>
        <a
          className="hover:underline"
          href="mailto:spenwong98@gmail.com"
          target="_blank"
        >
          Gmail
        </a>
      </div>
    </footer>
  )
}

export default Footer
