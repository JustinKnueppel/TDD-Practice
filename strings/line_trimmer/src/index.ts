const rightTrim = (string: String): String => {
  const lineEnding = string.includes("\r\n") ? "\r\n" : "\n"
  const lines = string.split(lineEnding);
  const trimmedLines = lines.map((line) => rightTrimLine(line));
  return trimmedLines.join(lineEnding);
};

const rightTrimLine = (string: String): String => {
  const trimmed = string.replace(/[ \t]+$/, "");
  return trimmed;
};

export { rightTrim };
