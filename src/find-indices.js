function lettersOnly(text) {
  return text.replace(/[\W_]/g, '');
}

export default function findIndices(orig, sub) {
  letters = lettersOnly(sub)

  let i = 0, indices = new Set();

  outer:
  for(let letter of letters) {
    while(letter !== orig[i]) {
      i++;
      if(i == orig.length) break outer;
    }
    indices.add(i);
    i++;
  }

  return indices;
}
