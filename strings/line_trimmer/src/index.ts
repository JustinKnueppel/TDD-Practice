const rightTrim = (string: String): String => {
  const trimmed = string.replace(/[ \t]/g, "");
  return trimmed;
};

export { rightTrim };
