const Page = async ({ params }) => {
  const res = await fetch(`https://dummyjson.com/recipes/${params.id}`);
  const data = await res.json();
  const food = data;

  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-2xl font-bold text-gray-800">Ubah data Makanan.</h1>
      </header>

      <main className="bg-white p-4 rounded-lg shadow-md">
        <form className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Nama Makanan
            </label>
            <input
              type="text"
              id="name"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
              defaultValue={food.name}
            />
          </div>
          <button
            type="submit"
            className="w-full sm:w-auto inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
            Simpan
          </button>
        </form>
      </main>
    </div>
  );
};

export default Page;
