export default function findIndices(orig, sub) {
  orig = orig.toUpperCase();
  sub = sub.toUpperCase();

  let i = 0
    , foundAt = new Set()
    , numSkipped = 0;

  outer:
  for(let char of sub) {
    if( shouldSkip(char) ) {
      numSkipped++;
      continue;
    }

    while(char !== orig[i]) {
      i++;
      if(i >= orig.length) break outer;
    }

    foundAt.add(i);
    i++;
  }

  return {foundAt, numOk: foundAt.size + numSkipped };
}

function shouldSkip(char) {
  return /[\W_]/.test(char);
}
