import Link from "next/link";

const Page = async () => {
  const res = await fetch("https://dummyjson.com/recipes?limit=7");
  const data = await res.json();
  const foods = data.recipes;
  console.log(foods[0]);

  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-2xl font-bold text-gray-800">Daftar Makanan.</h1>
      </header>

      <section className="flex items-center justify-between">
        <Link
          href="/foods/add"
          className="w-full sm:w-auto inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-greenlime hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
        >
          Tambah Makanan
        </Link>
        <input
          className="mt-1 block w-60 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-greenlime focus:border-greenlime sm:text-sm "
          type="text"
          id="name"
          autoFocus
          autoComplete="off"
          placeholder="🔍 Cari makanan..."
        />
      </section>

      <main className="bg-white p-4 rounded-lg shadow-md overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                No
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {foods.map((food, idx) => (
              <tr key={idx}>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">
                  {idx + 1}
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">
                  <Link href={`/foods/${food.id}`}>{food.name}</Link>
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">
                  <div className="flex item-center">
                    <Link
                      href={`/foods/${food.id}/edit`}
                      className="w-4 mr-2 transform hover:text-yellow-300 hover:scale-110"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                        />
                      </svg>
                    </Link>
                    <button className="w-4 mr-2 transform hover:text-red-500 hover:scale-110">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>

      <footer className="flex justify-between items-center mt-6">
        <div>
          <span className="text-sm text-gray-700">
            Showing 1 to 5 of 5 entries
          </span>
        </div>
        <div className="flex space-x-2">
          <Link href="#">
            <button className="px-3 py-1 rounded-md bg-gray-200 text-sm font-medium text-gray-700 hover:text-gray-100 hover:bg-greenlime">
              Previous
            </button>
          </Link>
          <Link href="#">
            <button className="px-3 py-1 rounded-md bg-gray-200 text-sm font-medium  text-gray-700 hover:text-gray-100 hover:bg-greenlime">
              Next
            </button>
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default Page;
