import { ScrollArea } from "./ui/scroll-area";
import { Menu, Home, BarChart2, Users, FileText, Mail, Calendar, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";

interface SidebarProps {
    sidebarOpen: boolean;
    toggleSidebar: () => void;
    accentColor: string;
}

export default function Sidebar({ sidebarOpen, toggleSidebar, accentColor }: SidebarProps) {
    return (
        <aside 
        className={`${sidebarOpen ? 'w-64 left-0 z-50' : 'w-20 left-[-100%] md:left-0'} md:relative md:flex flex-col transition-all duration-300 ease-in-out shadow-lg fixed inset-y-0`}
        style={{ backgroundColor: accentColor }}
      >
        <div className="flex items-center justify-between p-4">
          <h1 className={`text-2xl font-bold text-white ${sidebarOpen ? 'block' : 'hidden'}`}>Vuexy</h1>
          <Button variant="ghost" size="icon" onClick={toggleSidebar} className="text-white hover:bg-white/20">
            <Menu className="h-6 w-6" />
          </Button>
        </div>
        <ScrollArea className="h-[calc(100vh-5rem)]">
          <nav className="space-y-1 p-2">
            {[
              { icon: Home, label: 'Dashboard' },
              { icon: BarChart2, label: 'Analytics' },
              { icon: Users, label: 'Users' },
              { icon: FileText, label: 'Documents' },
              { icon: Mail, label: 'Email' },
              { icon: Calendar, label: 'Calendar' },
            ].map((item, index) => (
              <Button key={index} variant="ghost" className="w-full justify-start rounded-lg text-white hover:bg-white/20">
                <item.icon className="mr-2 h-5 w-5" />
                <span className={sidebarOpen ? 'block' : 'hidden'}>{item.label}</span>
                {sidebarOpen && <ChevronRight className="ml-auto h-5 w-5" />}
              </Button>
            ))}
          </nav>
        </ScrollArea>
      </aside>

    )
}