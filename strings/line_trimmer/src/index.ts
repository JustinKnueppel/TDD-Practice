const rightTrim = (string: String): String => {
  const lines = string.split("\n");
  const trimmedLines = lines.map((line) => rightTrimLine(line));
  return trimmedLines.join("\n");
};

const rightTrimLine = (string: String): String => {
  const trimmed = string.replace(/[ \t]+$/, "");
  return trimmed;
};

export { rightTrim };
