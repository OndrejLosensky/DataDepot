// index.js

import Head from 'next/head';
import { IoLogoJavascript } from "react-icons/io5";
import { SiNextdotjs } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiDaisyui } from "react-icons/si";
import { TbFileTypeSql } from "react-icons/tb";
import { SiJest } from "react-icons/si";


export default function Home() {
  return (
    <div className="container mx-auto mt-8">
      <div className="h-64 mb-16 overflow-hidden">
        <div className="flex space-x-4 p-4 overflow-x-scroll animated-scroll">
          {/* Add more icons as needed */}
          <IoLogoJavascript className="text-4xl w-32 h-auto" />
          <div style={{ width: '15rem' }} />
          <SiNextdotjs className="text-4xl w-32 h-auto" />
          <div style={{ width: '15rem' }} /> 
          <SiTailwindcss className="text-4xl w-32 h-auto" />
          <div style={{ width: '15rem' }} /> 
          <SiDaisyui className="text-4xl w-32 h-auto" />
          <div style={{ width: '15rem' }} /> 
          <SiJest className="text-4xl w-32 h-auto" />
          <div style={{ width: '15rem' }} /> 
          <TbFileTypeSql className="text-4xl w-32 h-auto" />
        </div>
      </div>
    </div>
  );
}
