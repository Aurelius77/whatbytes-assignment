"use client"
import { useState } from "react"
import Image from "next/image"
import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"
import html from '../public/html.png'
import { ComparisonGraph } from "./components/ComparisonGraph"
import { QuestionAnalysisChart } from "./components/QuestionAnalysis"
import { UpdateScoresModal } from "./components/UpdateModal"


export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false)
  const [rank, setRank] = useState(1)
  const [percentile, setPercentile] = useState(30)
  const [score, setScore] = useState(10)



  function handleUpdate() {


    setIsUpdateModalOpen(true)
  }


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
            <button className=" cursor-pointer bg-blue-800 text-white px-6 py-2 rounded-md hover:bg-blue-900 transition-colors"
              onClick={handleUpdate}
            >
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
                      <h3 className="text-2xl font-bold">{rank}</h3>
                      <p className="text-gray-500 text-sm">YOUR RANK</p>
                    </div>
                  </div>

                  <div className="border rounded-lg p-6 flex items-center gap-4">
                    <div className="text-gray-400 text-2xl">📄</div>
                    <div>
                      <h3 className="text-2xl font-bold">{percentile}</h3>
                      <p className="text-gray-500 text-sm">PERCENTILE</p>
                    </div>
                  </div>

                  <div className="border rounded-lg p-6 flex items-center gap-4">
                    <div className="text-green-500 text-2xl">✅</div>
                    <div>
                      <h3 className="text-2xl font-bold">{score}/ 15</h3>
                      <p className="text-gray-500 text-sm">CORRECT ANSWERS</p>
                    </div>
                  </div>
                </div>
              </div>

              <section className="mb-6">
                <h2 className="text-lg font-semibold mb-4">Comparison Graph</h2>
                <div className="border rounded-lg p-6">
                  <div className="flex items-start justify-between mb-6">
                    <div className="max-w-md">
                      <p className="text-gray-700">
                        You scored <span className="font-bold">{percentile} percentile</span> which is lower than the average percentile
                        72% of all the engineers who took this assessment
                      </p>
                    </div>
                  </div>
                  <ComparisonGraph userPercentile={percentile} averagePercentile={72} />
                </div>
              </section>
            </div>

            <section className="space-y-6">
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
                <h2 className="text-lg font-semibold mb-4 mt-4 flex justify-between">
                  <span>Question Analysis</span>
                  <span className="text-blue-600">{`${score}/15`}</span>
                </h2>
                <div className="border rounded-lg p-4">
                  <div className="flex flex-col items-center gap-6">
                    <QuestionAnalysisChart correct={score} total={15} />
                    <p className="mb-2">
                      <span className="font-semibold">
                        You scored {score} question correct out of {15}.
                      </span>{" "}
                      {score >= 15 ? 'You did well' : 'However it still needs some improvements'}
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-white bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}



      {isUpdateModalOpen && (
        <UpdateScoresModal
          rank={rank}
          percentile={percentile}
          score={score}
          setRank={setRank}
          setPercentile={setPercentile}
          setScore={setScore}
          onClose={() => setIsUpdateModalOpen(false)}
          onSave={() => {
            setIsUpdateModalOpen(false)
          }}
        />
      )}

    </div>
  )
}

