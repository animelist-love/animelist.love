const hyphen = (string) => string.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, "");
const useCreateLink = (options) => {
  return options.map((s) => {
    if (typeof s === "string")
      return s;
    if (typeof s === "number")
      return s;
    if (s.convert === "-")
      return hyphen(s.value);
    else if (s.convert === "lowcase")
      return s.value.toLowerCase();
  }).join("");
};

export { useCreateLink as u };
//# sourceMappingURL=useCreateLink-920e2d92.js.map
