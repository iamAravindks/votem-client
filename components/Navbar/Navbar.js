import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="px-2 sm:px-4 py-2.5 absolute top-0 left-0 w-full h-20  ">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <Link
          href="/"
          className="flex items-center text-2xl font-semibold whitespace-nowrap  ml-3"
        >
          VOTE<span className="text-purple-700 ">M</span>
        </Link>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="flex flex-col p-4 mt-4  md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium ">
            <li>
              <Link
                href="/"
                className="block p-2 text-purple-700  "
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link href="#" className="block p-2">
                About
              </Link>
            </li>

            <li>
              <Link href="/signin" className="block p-2 ">
                Sign In
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar