import { useCallback, useState } from "react";
import Button from "./components/Button";
import axios from "axios";
import UrlSummaryScreen from "./components/UrlSummaryScreen";
import type { ISummary } from "./types/ISummary";

const App = () => {
  const [url, setUrl] = useState("");
  const [summary, setSummary] = useState<ISummary>();
  const [loading, setLoading] = useState(false);

  const fetchSummary = useCallback(async () => {
    setLoading(true);
    try {
      const scrapeRes = await axios.post("http://localhost:3000/api", {
        url,
        model: "ollama",
      });
      setSummary(scrapeRes?.data || undefined);
    } catch {
      setSummary(undefined);
    } finally {
      setLoading(false);
    }
  }, [url]);

  const handleBack = () => setSummary(undefined);

  return (
    <>
      {!summary ? (
        <div className="min-h-screen bg-gray-100 flex flex-col justify-between">
          <div className="bg-white px-4 py-4 flex items-center shadow-sm rounded-b-2xl">
            <h1 className="text-xl font-bold mx-auto">Summarize AI (Beta)</h1>
          </div>

          <div className="flex-1 flex flex-col items-center justify-start px-4 pt-8 pb-4">
            <div className="bg-white rounded-2xl shadow-md p-6 w-full max-w-xl mb-6">
              <label className="block text-gray-700 font-medium mb-2">
                Enter URL to Summarize
              </label>
              <input
                type="text"
                placeholder="https://example.com"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-500"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              />
            </div>
            <Button
              onClick={fetchSummary}
              className="w-full max-w-xl bg-blue-600 text-white font-semibold py-4 rounded-xl shadow-md text-lg mb-8 active:scale-95 transition-transform"
              loading={loading}
            >
              Generate Summary
            </Button>
          </div>
        </div>
      ) : (
        <UrlSummaryScreen summary={{ ...summary, url }} onBack={handleBack} />
      )}
    </>
  );
};

export default App;
