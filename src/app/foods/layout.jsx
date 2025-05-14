import Sidebar from "@/components/Sidebar";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <Sidebar />
      <div className="flex-1 p-4 md:p-6 overflow-y-auto h-screen bg-gray-300">
        {children}
      </div>
    </div>
  );
}
