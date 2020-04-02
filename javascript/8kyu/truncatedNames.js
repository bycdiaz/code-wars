function truncatedNames(name) {
  if (name.length <= 2) {
    return [name];
  }
  return [name, name.slice(0, 2)];
}

console.log(truncatedNames('Carlos'));
