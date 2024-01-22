let mark = 75;
switch (mark) {
  case mark >= 90:
    console.log("A+");
    break;

  case mark >= 80:
    console.log("A");
    break;

  case mark >= 70:
    console.log("B");
    break;

  case mark >= 60:
    console.log("C");
    break;

  case mark >= 40:
    console.log("passed");
    break;

default:console.log("failed");
}
