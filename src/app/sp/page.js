import { Search, Bell, User, Menu, Mic, Video, Grid3X3 } from "lucide-react";

export default function Home() {
  return (
    <div className="bg-white w-full h-full overflow-hidden">
      {/* Header/Banner */}
      <header className="flex items-center justify-between px-2 py-2 bg-white border-b border-gray-200">
        {/* Left section - Menu and Logo */}
        <div className="flex items-center space-x-2">
          <button className="p-1 hover:bg-gray-100 rounded-full">
            <Menu className="w-5 h-5 text-gray-700" />
          </button>
          <a href="/" className="flex items-center cursor-pointer">
            <div className="flex items-center">
              <div className="w-6 h-6 bg-red-600 rounded-sm flex items-center justify-center mr-1">
                <div className="w-0 h-0 border-l-[4px] border-l-white border-t-[3px] border-t-transparent border-b-[3px] border-b-transparent ml-0.5"></div>
              </div>
              <span className="text-lg font-semibold text-gray-900">YouTube</span>
            </div>
          </a>
        </div>

        {/* Right section - Icons only (search moved to minimize space) */}
        <div className="flex items-center space-x-1">
          <button className="p-1.5 hover:bg-gray-100 rounded-full">
            <Search className="w-5 h-5 text-gray-700" />
          </button>
          <button className="p-1.5 hover:bg-gray-100 rounded-full">
            <Video className="w-5 h-5 text-gray-700" />
          </button>
          <button className="p-1.5 hover:bg-gray-100 rounded-full relative">
            <Bell className="w-5 h-5 text-gray-700" />
            <span className="absolute top-0.5 right-0.5 w-2 h-2 bg-red-600 rounded-full"></span>
          </button>
          <button className="p-1 hover:bg-gray-100 rounded-full">
            <div className="w-7 h-7 bg-blue-500 rounded-full flex items-center justify-center">
              <User className="w-4 h-4 text-white" />
            </div>
          </button>
        </div>
      </header>

      {/* Main content area (empty as requested) */}
      <div className="p-4 h-full">
        <div className="text-center text-gray-500 mt-20">
          <p className="text-sm">WHATCH THIS RANDOM VIDEO MF </p>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/BL39MQvIslU?si=Axor7m3YS9y43KRs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </div>
    </div>
  );
}