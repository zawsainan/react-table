export const columns = [
  {
    accessorKey: "id",
    header: "ID",
    cell: ({ getValue }) => getValue("id"),
  },
  {
    accessorKey: "first_name",
    header: "First Name",
    cell: ({ getValue }) => getValue("first_name"),
  },
  {
    accessorKey: "last_name",
    header: "Last Name",
    cell: ({ getValue }) => getValue("last_name"),
  },
  {
    accessorKey: "email",
    header: "Email",
    cell: ({ getValue }) => getValue("email"),
  },
  {
    accessorKey: "date_of_birth",
    header: "Date of Birth",
    cell: ({ getValue }) => getValue("date_of_birth"),
  },
  {
    accessorKey: "age",
    header: "Age",
    cell: ({ getValue }) => getValue("age"),
  },
  {
    accessorKey: "country",
    header: "Country",
    cell: ({ getValue }) => getValue("country"),
  },
  {
    accessorKey: "phone",
    header: "Phone",
    cell: ({ getValue }) => getValue("phone"),
  },
];
