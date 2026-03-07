import { Search } from "lucide-react";

export default function Searchbar() {
  return (
    <div className="mb-4 relative">
      <input
        type="text"
        className="w-full pl-10 pr-4 py-2 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
      />
      <Search
        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
        size={20}
      />
    </div>
  );
}
