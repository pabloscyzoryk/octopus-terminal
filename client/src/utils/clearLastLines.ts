const clearLastLines = (count) => {
  process.stdout.moveCursor(0, -count)
  process.stdout.clearScreenDown()
}

export default clearLastLines;
