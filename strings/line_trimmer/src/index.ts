const rightTrim = (fullString: string): string => {
  const lineEnding = getLineEnding(fullString);
  const lines = fullString.split(lineEnding);
  const trimmedLines = lines.map((line) => rightTrimLine(line));
  return trimmedLines.join(lineEnding);
};

const getLineEnding = (fullString: string): string => {
  return fullString.includes("\r\n") ? "\r\n" : "\n";
};

const rightTrimLine = (line: string): string => {
  return line.replace(/[ \t]+$/, "");
};

export { rightTrim };
