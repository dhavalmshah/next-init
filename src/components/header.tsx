"use client";

import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem } from "./ui/dropdown-menu";
import { Menu, Search, Palette, Bell, User, Settings, LogOut } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const colorOptions = [
    { name: 'Purple', value: '#7367F0' },
    { name: 'Blue', value: '#00CFE8' },
    { name: 'Green', value: '#28C76F' },
    { name: 'Orange', value: '#FF9F43' },
    { name: 'Red', value: '#EA5455' },
  ]

interface HeaderProps {
    setAccentColor: (color: string) => void;
    toggleSidebar: () => void;
}

export default function Header({ setAccentColor, toggleSidebar }: HeaderProps) {
    return (
        <header className="bg-white shadow-sm">
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center">
              <Button variant="ghost" size="icon" onClick={toggleSidebar} className="mr-2 md:hidden">
                <Menu className="h-6 w-6" />
              </Button>
              <Input
                type="search"
                placeholder="Search..."
                className="w-full sm:w-64 mr-4 rounded-full bg-[#F8F7FA] border-none focus-visible:ring-primary"
                startAdornment={<Search className="h-4 w-4 text-gray-400" />}
              />
            </div>
            <div className="flex items-center space-x-4">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="icon">
                    <Palette className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>Choose Accent Color</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  {colorOptions.map((color) => (
                    <DropdownMenuItem key={color.name} onClick={() => setAccentColor(color.value)}>
                      <div className="flex items-center">
                        <div 
                          className="w-4 h-4 rounded-full mr-2" 
                          style={{ backgroundColor: color.value }}
                        ></div>
                        {color.name}
                      </div>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
              <Button variant="ghost" size="icon" className="text-gray-500 hover:text-primary">
                <Bell className="h-5 w-5" />
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/avatars/01.png" alt="@shadcn" />
                      <AvatarFallback>SC</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none">shadcn</p>
                      <p className="text-xs leading-none text-muted-foreground">
                        m@example.com
                      </p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <User className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Settings</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </header>
    )
}