"use client";

import Link from "next/link";

const ActionData = () => {
  return (
    <div className="flex items-center justify-between">
      <Link
        href="/foods/add"
        className="w-full sm:w-auto inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-greenlime hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
      >
        Tambah Makanan
      </Link>
      {/* <input
        className="mt-1 block w-60 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-greenlime focus:border-greenlime sm:text-sm "
        type="text"
        id="name"
        autoFocus
        autoComplete="off"
        placeholder="🔍 Cari makanan..."
      /> */}
    </div>
  );
};

export default ActionData;
