function lettersOnly(text) {
  return text.replace(/[\W_]/g, '');
}

export default function findIndices(orig, sub) {

  orig = orig.toUpperCase();
  sub = lettersOnly(sub).toUpperCase();

  let i = 0, indices = new Set();

  outer:
  for(let letter of sub) {
    while(letter !== orig[i]) {
      i++;
      if(i >= orig.length) break outer;
    }
    indices.add(i);
    i++;
  }

  return indices;
}
