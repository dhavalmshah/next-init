"use client";

import { useState } from "react";
import Sidebar from "./sidebar";
import Header from "./header";

const colorOptions = [
    { name: 'Purple', value: '#7367F0' },
    { name: 'Blue', value: '#00CFE8' },
    { name: 'Green', value: '#28C76F' },
    { name: 'Orange', value: '#FF9F43' },
    { name: 'Red', value: '#EA5455' },
  ]

export default function Junction({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>    ) {
    const [sidebarOpen, setSidebarOpen] = useState(true)
    const [accentColor, setAccentColor] = useState(colorOptions[0].value)
    return (
        <div className="flex h-screen bg-[#F8F7FA] flex-row">
            <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={() => setSidebarOpen(!sidebarOpen)} accentColor={accentColor} />
            <div className="flex-1 flex flex-col overflow-hidden">
                <Header 
                    setAccentColor={setAccentColor}
                    toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
                />
                {children}
            </div>
        </div>
    );
}