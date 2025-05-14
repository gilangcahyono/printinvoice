const Page = async ({ params }) => {
  const res = await fetch(`https://dummyjson.com/recipes/${params.id}`);
  const data = await res.json();
  const food = data;

  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-2xl font-bold text-gray-800">Daftar Makanan.</h1>
      </header>

      <main className="bg-white p-4 rounded-lg shadow-md overflow-x-auto">
        <pre>{JSON.stringify(food, null, 2)}</pre>
      </main>
    </div>
  );
};

export default Page;
