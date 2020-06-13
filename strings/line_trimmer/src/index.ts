const rightTrim = (string: String): String => {
  const trimmed = string.replace(/[ \t]+$/, "");
  return trimmed;
};

export { rightTrim };
