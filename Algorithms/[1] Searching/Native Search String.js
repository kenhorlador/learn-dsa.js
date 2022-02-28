function nativeSearch(long, short) {
  let count = 0

  for (let i = 0; i < long.length; i++) {
    for (let j = 0; j < short.length; j++) {
      if (short[j] !== long[i+j]) break
      if (j === short.length) count++
    }
  }

  return count
}

nativeSearch("lorie loled", "lol") // returns 1
nativeSearch("lorie loled", "lo") // returns 2
