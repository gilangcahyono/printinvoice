import ActionData from "@/components/ActionData";
import DataList from "@/components/DataList";
import Pagination from "@/components/Pagination";
import TitleData from "@/components/TitleData";

const Page = async ({ searchParams }) => {
  const page = searchParams.limit || 1;

  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos?_page=${page}`
  );
  const foods = await res.json();
  // console.log(data);
  // const foods = data.recipes;

  return (
    <div className="space-y-6">
      <TitleData title="Daftar Makanan." />
      <ActionData />

      <main className="bg-white p-4 rounded-lg shadow-md overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Id
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Title
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <DataList initialFoods={foods} />
          </tbody>
        </table>
      </main>

      {/* <Pagination
        total={data.total}
        length={foods.length}
        limit={limit}
        skip={skip}
      /> */}
    </div>
  );
};

export default Page;
