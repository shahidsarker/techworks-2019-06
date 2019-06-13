// 99 Bottles of Juice

// Use a for loop that iterates starting at 99 and stops before 0.
for (let i = 99; i > 0; i--) {
  if (i > 2) {
    // Any number of bottles above 2
    console.log(
      i +
        " bottles of juice on the wall! " +
        i +
        " bottles of juice!" +
        // use \n inside string to insert a new line
        "\nTake one down, pass it around...\n" +
        (i - 1) +
        " bottles of juice on the wall!\n"
    );
  } else if (i == 2) {
    // 2 bottles
    console.log(
      i +
        " bottles of juice on the wall! " +
        i +
        " bottles of juice!" +
        "\nTake one down, pass it around...\n" +
        (i - 1) +
        " bottle of juice on the wall!\n"
    );
  } else if (i == 1) {
    // 1 bottle
    console.log(
      i +
        " bottle of juice on the wall! " +
        i +
        " bottle of juice!" +
        "\nTake one down, pass it around...\n" +
        (i - 1) +
        " bottles of juice on the wall!"
    );
  }
}
