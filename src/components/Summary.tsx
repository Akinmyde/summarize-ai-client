import { formatNumberedSummary } from "../helpers";

const parseBold = (text: string) => {
  // Match both **bold** and *bold* patterns
  const parts = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <strong key={i} className="font-bold">
          {part.slice(2, -2)}
        </strong>
      );
    }
    if (part.startsWith('*') && part.endsWith('*')) {
      return (
        <strong key={i} className="font-bold">
          {part.slice(1, -1)}
        </strong>
      );
    }
    return part;
  });
};

const Summary = ({ summary }: { summary: string }) => (
  <div className="bg-white rounded-2xl shadow-md p-6 w-full max-w-xl">
    <h2 className="text-lg font-bold mb-2">Summary</h2>
    {formatNumberedSummary(summary).map((para, idx) => (
      <p
        key={idx}
        className="text-gray-700 leading-relaxed mb-4 text-justify"
      >
        {parseBold(para)}
      </p>
    ))}
  </div>
);

export default Summary;
