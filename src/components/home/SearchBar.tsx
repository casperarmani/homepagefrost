import { Search } from "lucide-react";

export function SearchBar() {
  return (
    <div className="relative w-full max-w-xl mx-auto">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          className="block w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-2xl text-gray-800 placeholder-gray-400 backdrop-blur-xl focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-transparent transition-all"
          placeholder="I want to train my brain on..."
        />
      </div>
    </div>
  );
}