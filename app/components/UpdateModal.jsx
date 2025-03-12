"use client"
import { useState } from "react"
import Image from "next/image"
import html from "../../public/html.png"

export function UpdateScoresModal({ rank, percentile, score, setRank, setPercentile, setScore, onClose, onSave }) {
  const [isError, setIsError] = useState(false)

  const confirmScore = (e) => {
    const value = e.target.value
    if (Number(value) <= 15) {
      setScore(value)
      setIsError(false)
    } else {
      setIsError(true)
    }
  }

  return (
    <>

      <div className="fixed inset-0  backdrop-blur-sm z-40" onClick={onClose} />

      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-b from-white to-gray-50 rounded-lg shadow-xl z-50 w-full max-w-md p-6">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-xl font-bold">Update scores</h1>
          <div className="relative w-8 h-8">
            <Image src={html} alt="HTML5 Logo" width={32} height={32} className="object-contain" />
          </div>
        </div>

        <div className="space-y-6">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 text-blue-800 text-sm font-medium">
                1
              </span>
              <p className="text-gray-700">
                Update your <span className="font-semibold">Rank</span>
              </p>
            </div>
            <input
              type="number"
              value={rank}
              onChange={(e) => setRank(e.target.value)}
              className="w-24 p-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 text-blue-800 text-sm font-medium">
                2
              </span>
              <p className="text-gray-700">
                Update your <span className="font-semibold">Percentile</span>
              </p>
            </div>
            <input
              type="number"
              value={percentile}
              onChange={(e) => setPercentile(e.target.value)}
              className="w-24 p-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>


          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 text-blue-800 text-sm font-medium">
                3
              </span>
              <p className="text-gray-700">
                Update your <span className="font-semibold">Current Score (out of 15)</span>
              </p>
            </div>
            <div>
              <input
                type="number"
                value={score}
                onChange={confirmScore}
                className="w-24 p-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              {isError && <p className="text-red-500 text-sm mt-1">Score cannot be more than 15</p>}
            </div>
          </div>
        </div>

        <div className="flex justify-end items-center gap-3 mt-8">
          <button
            onClick={onClose}
            className="cursor-pointer px-6 py-2 rounded-md border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors"
          >
            cancel
          </button>
          <button
            onClick={onSave}
            className=" cursor-pointer px-6 py-2 rounded-md bg-blue-800 text-white hover:bg-blue-900 transition-colors flex items-center gap-2"
          >
            save <span className="text-sm">→</span>
          </button>
        </div>
      </div>
    </>
  )
}

