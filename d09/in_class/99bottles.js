// 99 bottles of juice

// 99 bottles of juice on the wall! 99 bottles of juice!
// Take one down, pass it around...
// 98 bottles of juice on the wall!

for (let i = 99; i > 0; i--) {
  if (i > 2) {
    console.log(
      i + " bottles of juice on the wall! " + i + " bottles of juice!"
    );
    console.log("Take one down, pass it around...");
    console.log(i - 1 + " bottles of juice on the wall!");
    console.log("");
  } else if (i == 2) {
    console.log(
      i + " bottles of juice on the wall! " + i + " bottles of juice!"
    );
    console.log("Take one down, pass it around...");
    console.log(i - 1 + " bottle of juice on the wall!");
    console.log("");
  } else if (i == 1) {
    console.log(
      i + " bottle of juice on the wall! " + i + " bottles of juice!"
    );
    console.log("Take one down, pass it around...");
    console.log(i - 1 + " bottles of juice on the wall!");
  }
}
