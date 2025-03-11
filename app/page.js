"use client"
import { useState } from "react"
import Image from "next/image"
import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"
import html from '../public/html.png'


export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  return (
    <div className="flex flex-col h-screen">
      <Navbar
        toggleSidebar={() => {
          setIsSidebarOpen(!isSidebarOpen)
        }}
      />

      <div className="flex flex-1 overflow-hidden relative">
        <Sidebar isOpen={isSidebarOpen} />

        <div className="flex-1 overflow-auto p-6">
          <h1 className="text-xl font-semibold mb-6">Skill Test</h1>


          <div className="border rounded-lg p-6 mb-6 flex justify-between items-center">
            <div className="flex items-center gap-6">
              <div className="bg-orange-100 p-3 rounded-lg">
                <Image
                  src={html}
                  alt="HTML Logo"
                  width={50}
                  height={50}
                  className="h-12 w-12"
                />
              </div>
              <div>
                <h2 className="text-xl font-bold">Hyper Text Markup Language</h2>
                <p className="text-gray-600">Questions: 08 | Duration: 15 mins | Submitted on June 5 2021</p>
              </div>
            </div>
            <button className="bg-blue-800 text-white px-6 py-2 rounded-md hover:bg-blue-900 transition-colors">
              Update
            </button>
          </div>


          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h2 className="text-lg font-semibold mb-4">Quick Statistics</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="border rounded-lg p-6 flex items-center gap-4">
                    <div className="text-yellow-500 text-2xl">🏆</div>
                    <div>
                      <h3 className="text-2xl font-bold">1</h3>
                      <p className="text-gray-500 text-sm">YOUR RANK</p>
                    </div>
                  </div>

                  <div className="border rounded-lg p-6 flex items-center gap-4">
                    <div className="text-gray-400 text-2xl">📄</div>
                    <div>
                      <h3 className="text-2xl font-bold">30%</h3>
                      <p className="text-gray-500 text-sm">PERCENTILE</p>
                    </div>
                  </div>

                  <div className="border rounded-lg p-6 flex items-center gap-4">
                    <div className="text-green-500 text-2xl">✅</div>
                    <div>
                      <h3 className="text-2xl font-bold">10 / 15</h3>
                      <p className="text-gray-500 text-sm">CORRECT ANSWERS</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-lg font-semibold mb-4">Comparison Graph</h2>
                <div className="border rounded-lg p-6">
                  <div className="flex items-start justify-between mb-6">
                    <div className="max-w-md">
                      <p className="text-gray-700">
                        You scored <span className="font-bold">30% percentile</span> which is lower than the average
                        percentile 72% of all the engineers who took this assessment
                      </p>
                    </div>
                    <div className="bg-gray-100 p-2 rounded-lg">
                    </div>
                  </div>

                  <div className="h-64 w-full flex items-center justify-center border-t border-l relative">
                    <div className="absolute right-10 top-4 border p-2 rounded-md bg-white text-sm">
                      <p>90</p>
                      <p className="text-blue-500">numberOfStudent : 4</p>
                    </div>

                    <svg viewBox="0 0 500 200" className="w-full h-full">
                      <path
                        d="M 50,180 C 100,150 150,100 200,150 C 250,50 300,20 350,80 C 400,120 450,180 500,180"
                        fill="none"
                        stroke="#ddd"
                        strokeWidth="2"
                      />
                      <circle cx="200" cy="150" r="4" fill="#6366f1" />
                      <text x="180" y="170" fontSize="10" fill="#666">
                        your percentile
                      </text>
                      <circle cx="350" cy="80" r="4" fill="#6366f1" />
                      <circle cx="490" cy="50" r="6" fill="#6366f1" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h2 className="text-lg font-semibold mb-4">Syllabus Wise Analysis</h2>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-1">
                      <p>HTML Tools, Forms, History</p>
                      <p className="text-blue-600">80%</p>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "80%" }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-1">
                      <p>Tags & References in HTML</p>
                      <p className="text-orange-500">60%</p>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-orange-500 h-2.5 rounded-full" style={{ width: "60%" }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-1">
                      <p>Tables & References in HTML</p>
                      <p className="text-red-500">24%</p>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-red-500 h-2.5 rounded-full" style={{ width: "24%" }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-1">
                      <p>Tables & CSS Basics</p>
                      <p className="text-green-500">96%</p>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-green-500 h-2.5 rounded-full" style={{ width: "96%" }}></div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-lg font-semibold mb-4 flex justify-between">
                  <span>Question Analysis</span>
                  <span className="text-blue-600">10/15</span>
                </h2>
                <div className="border rounded-lg p-6">
                  <p className="mb-2">
                    <span className="font-semibold">You scored 10 question correct out of 15.</span> However it still
                    needs some improvements
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-white bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}
    </div>
  )
}

