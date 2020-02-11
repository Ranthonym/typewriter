let sentence = "hello there from lighthouse labs";
sentence += '\n';
sentence = sentence.split("")
for (const index in sentence) {
  setTimeout(() => { 
    process.stdout.write(sentence[index]);

  }, index + 50);
}

