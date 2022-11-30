let sentence = "hello there from lighthouse labs";

const charTimer = () => {
  let timer = 0;
  sentence += '\n'
  for (let char in sentence) {

    setTimeout(() => {
      process.stdout.write(sentence[char]);
    }, timer)
    timer += 100;

  }
}

charTimer(sentence);
