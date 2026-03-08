export const columns = [
  {
    accessorKey: "id",
    header: "Id",
    cell: ({ getValue }) => (
      <span className="px-2 py-1 text-xs font-semibold bg-gray-100 text-gray-700 rounded">
        {getValue()}
      </span>
    ),
  },
  {
    accessorKey: "first_name",
    header: "First Name",
    cell: ({ getValue }) => (
      <span className="font-medium text-gray-800">
        {getValue()}
      </span>
    ),
  },
  {
    accessorKey: "last_name",
    header: "Last Name",
    cell: ({ getValue }) => (
      <span className="text-gray-700">
        {getValue()}
      </span>
    ),
  },
  {
    accessorKey: "email",
    header: "Email",
    cell: ({ getValue }) => (
      <span className="text-blue-600 underline">
        {getValue()}
      </span>
    ),
  },
  {
    accessorKey: "age",
    header: "Age",
    cell: ({ getValue }) => (
      <span className="px-2 py-1 text-xs font-semibold bg-green-100 text-green-700 rounded">
        {getValue()}
      </span>
    ),
  },
];