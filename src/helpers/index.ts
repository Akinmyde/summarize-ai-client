export function formatNumberedSummary(text: string): string[] {
  // Insert a newline before each numbered item (except at the start)
  const withNewlines = text.replace(/(?<!^)(\d+\.\s)/g, '\n$1');
  // Split into paragraphs by double newlines or single newlines
  return withNewlines.split(/\n\s*\n/).filter(Boolean);
} 
