import Link from "next/link";

const Pagination = ({ total, length, limit, skip }) => {
  return (
    <divs className="flex justify-between items-center mt-5">
      <div>
        <span className="text-sm text-gray-700">
          Showing {+skip + 1} to {+length + +skip} of {total} entries
        </span>
      </div>
      <div className="flex space-x-2">
        {+skip > 0 && (
          <Link
            className="px-3 py-1 rounded-md bg-gray-200 text-sm font-medium text-gray-700 hover:text-gray-100 hover:bg-greenlime"
            href={`/foods?limit=${limit}&skip=${+skip && +skip - +limit}`}
          >
            Previous
          </Link>
        )}

        {+length + +skip !== +total && (
          <Link
            className="px-3 py-1 rounded-md bg-gray-200 text-sm font-medium  text-gray-700 hover:text-gray-100 hover:bg-greenlime"
            href={`/foods?limit=${limit}&skip=${+skip + +limit}`}
          >
            Next
          </Link>
        )}
      </div>
    </divs>
  );
};

export default Pagination;
