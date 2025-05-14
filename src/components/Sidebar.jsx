import Link from "next/link";

const Sidebar = () => {
  return (
    <aside className="bg-greenlime shadow-lg transition-all duration-300 ease-in-out fixed md:static inset-y-0 left-0 z-50 w-20 md:w-64">
      <div className="p-4 flex items-center justify-between border-b border-b-gray-200">
        <h1 className="text-xl font-bold text-gray-100 transition-opacity duration-300">
          Logo/Name
        </h1>
      </div>

      <nav className="py-4 px-2">
        <ul className="space-y-2">
          <li>
            <Link
              href="/foods"
              className="flex items-center space-x-3 px-4 py-2 hover:bg-gray-100 rounded-lg transition-all text-gray-100 hover:text-gray-600 duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 hover:text-gray-600 "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0l-2-2m2 2V4a1 1 0 00-1-1h-3a1 1 0 00-1 1z"
                />
              </svg>
              <span>Foods</span>
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
