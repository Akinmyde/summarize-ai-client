import { useState } from "react";
import Summary from "./Summary";
import type { ISummary } from "../types/ISummary";

interface UrlSummaryScreenProps {
  summary: ISummary;
  onBack: () => void;
}

const UrlSummaryScreen = ({ summary, onBack }: UrlSummaryScreenProps) => {
  const [language, setLanguage] = useState('English');

  return (
    <div className="flex flex-col items-center w-full min-h-screen bg-gray-50 p-4">
      {/* Header with back button and title */}
      <div className="w-full max-w-xl flex items-center bg-white rounded-2xl shadow-md px-4 py-3 mb-4">
        <button className="mr-3 p-2 rounded hover:bg-gray-100 transition" onClick={onBack}>
          {/* Simple left arrow SVG */}
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <h1 className="text-xl font-bold flex-1 text-center pr-8">URL Summary</h1>
      </div>
      {/* URL input below header */}
      <div className="w-full max-w-xl mb-4">
        <input
          type="text"
          value={summary.url}
          readOnly
          className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>
      <div className="w-full max-w-xl">
        <Summary summary={summary.summary} />
        <div className="bg-white rounded-2xl shadow-md p-6 mt-4">
          <h3 className="font-bold mb-2">Keywords</h3>
          <div className="flex flex-wrap gap-2 mb-4">
            {summary.keywords.map((kw, i) => (
              <span
                key={i}
                className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
              >
                {kw}
              </span>
            ))}
          </div>
          <h3 className="font-bold mb-2">Sentiment Analysis</h3>
          <div className="mb-4">
            {Object.entries(summary.sentiment).map(([label, value]) => {
              label = label.toLowerCase();
              return(
              <div key={label} className="mb-2">
                <div className="flex justify-between text-sm mb-1">
                  <span>{label}</span>
                  <span>{value}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    style={{ width: `${value}%` }}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      label === "positive"
                        ? "bg-green-400"
                        : label === "neutral"
                        ? "bg-yellow-400"
                        : "bg-red-400"
                    }`}
                  ></div>
                </div>
              </div>
            )})}
          </div>
          <p className="text-xs text-gray-500 mb-4">
            Note that the sentiment analysis is based on a subjective evaluation of the website content and may not reflect the actual opinions or emotions of visitors.
          </p>
          {/* <h3 className="font-bold mb-2">Visual Highlights</h3>
          <div className="mb-4">
            <img
              src={summary.image}
              alt="Visual highlight"
              className="rounded-xl w-full object-cover h-40"
            />
          </div> */}
          {/* Products/Services Section */}
          <h3 className="font-bold mb-2">Products/Services</h3>
          <div className="mb-4">
            {Array.isArray(summary.products) ? (
              <div className="flex flex-wrap gap-2">
                {summary.products.map((product: string, idx: number) => (
                  <span
                    key={idx}
                    className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {product}
                  </span>
                ))}
              </div>
            ) : summary.products ? (
              <p className="text-gray-700">{summary.products}</p>
            ) : (
              <p className="text-gray-400 italic">No products or services found.</p>
            )}
          </div>
          <h3 className="font-bold mb-2">Language</h3>
          <select
            value={language}
            onChange={e => setLanguage(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="English">English</option>
            <option value="Spanish">Spanish</option>
            <option value="French">French</option>
            {/* Add more languages as needed */}
          </select>
        </div>
      </div>
    </div>
  );
};

export default UrlSummaryScreen; 