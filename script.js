var pt = "";
var world = 1;
var worldId = [
  document.getElementById("world1"),
  document.getElementById("world2"),
  document.getElementById("world3"),
  document.getElementById("world4"),
  document.getElementById("world5"),
  document.getElementById("world6"),
  document.getElementById("world7"),
  document.getElementById("world8"),
  document.getElementById("world9"),
  document.getElementById("world10")
];
var inputId = [
  document.getElementById("input1"),
  document.getElementById("input2"),
  document.getElementById("input3"),
  document.getElementById("input4"),
  document.getElementById("input5"),
  document.getElementById("input6"),
  document.getElementById("input7"),
  document.getElementById("input8"),
  document.getElementById("input9"),
  document.getElementById("input10"),
  document.getElementById("input11"),
  document.getElementById("input12"),
  document.getElementById("input13"),
  document.getElementById("input14"),
  document.getElementById("input15"),
  document.getElementById("input16"),
  document.getElementById("input17"),
  document.getElementById("input18"),
  document.getElementById("input19"),
  document.getElementById("input20"),
  document.getElementById("input21"),
  document.getElementById("input22"),
  document.getElementById("input23"),
  document.getElementById("input24")
];
var score = 0;
var dtYearOld = new Date().getFullYear();
const name = "Collect a JS Kips!";
const version = "1.0.0";
let releaseOlder = 0;

function Sumbit(id) {
  if (id == 1) {
    if (inputId[0].value == "let") {
      world += 1;
    } else {
      alert(
        "Error:Invalid a value:" + '"' + inputId[0].value + '", done is let.'
      );
      console.warn("No Call Value:" + inputId[0].value + ".");
    }
  }
  if (id == 2) {
    if (
      inputId[1].value == "myVar" &&
      inputId[2].value == "3" &&
      inputId[3].value == "7"
    ) {
      world += 1;
    } else {
      alert(
        "Error:Invalid a value:" + '"' + inputId[1].value + '", done is myVar.'
      );
      alert(
        "Error:Invalid a value:" + '"' + inputId[2].value + '", done is 3.'
      );
      alert(
        "Error:Invalid a value:" + '"' + inputId[3].value + '", done is 7.'
      );
      console.warn("No Call Value:" + inputId[1].value + ".");
      console.warn("No Call Value:" + inputId[2].value + ".");
      console.warn("No Call Value:" + inputId[3].value + ".");
    }
  }
  if (id == 3) {
    if (inputId[4].value == "62 / 2" && inputId[5].value == "Color.darkgreen") {
      world += 1;
    } else {
      alert(
        "Error:Invalid a value:" + '"' + inputId[4].value + '", done is 62 / 2.'
      );
      alert(
        "Error:Invalid a value:" +
          '"' +
          inputId[5].value +
          '", done is Color.darkgreen.'
      );
      console.warn("No Call Value:" + inputId[4].value + ".");
      console.warn("No Call Value:" + inputId[5].value + ".");
    }
  }
  if (id == 4) {
    if (
      inputId[6].value == "Math.ceil(2)" &&
      inputId[7].value == "Math.ceil(4)" &&
      inputId[8].value == "Math.ceil(10)" &&
      inputId[9].value == "Math.ceil(25)" &&
      inputId[10].value == "Math.ceil(72)"
    ) {
      world += 1;
    } else {
      alert(
        "Error:Invalid a value:" +
          '"' +
          inputId[6].value +
          '", done is Math.ceil(2).'
      );
      alert(
        "Error:Invalid a value:" +
          '"' +
          inputId[7].value +
          '", done is Math.ceil(4).'
      );
      alert(
        "Error:Invalid a value:" +
          '"' +
          inputId[8].value +
          '", done is Math.ceil(10).'
      );
      alert(
        "Error:Invalid a value:" +
          '"' +
          inputId[9].value +
          '", done is Math.ceil(25).'
      );
      alert(
        "Error:Invalid a value:" +
          '"' +
          inputId[10].value +
          '", done is Math.ceil(72).'
      );
      console.warn("No Call Value:" + inputId[6].value + ".");
      console.warn("No Call Value:" + inputId[7].value + ".");
      console.warn("No Call Value:" + inputId[8].value + ".");
      console.warn("No Call Value:" + inputId[9].value + ".");
      console.warn("No Call Value:" + inputId[10].value + ".");
    }
  }
  if (id == 5) {
    if (
      inputId[11].value == "HelloDoEvery" &&
      inputId[12].value == "HelloDoEvery" &&
      inputId[13].value == "1000"
    ) {
      world += 1;
    } else {
      alert(
        "Error:Invalid a value:" +
          '"' +
          inputId[11].value +
          '", done is HelloDoEvery.'
      );
      alert(
        "Error:Invalid a value:" +
          '"' +
          inputId[12].value +
          '", done is HelloDoEvery.'
      );
      alert(
        "Error:Invalid a value:" + '"' + inputId[13].value + '", done is 1000.'
      );
      console.warn("No Call Value:" + inputId[11].value + ".");
      console.warn("No Call Value:" + inputId[12].value + ".");
      console.warn("No Call Value:" + inputId[13].value + ".");
    }
  }
  if (id == 6) {
    if (inputId[14].value == "Math.sqrt(17)") {
      world += 1;
    } else {
      alert(
        "Error:Invalid a value:" +
          '"' +
          inputId[14].value +
          '", done is Math.sqrt(17).'
      );
      console.warn("No Call Value:" + inputId[14].value + ".");
    }
  }
  if (id == 7) {
    if (inputId[15].value == "999" && inputId[16].value == "9999") {
      world += 1;
    } else {
      alert(
        "Error:Invalid a value:" + '"' + inputId[15].value + '", done is 999.'
      );
      alert(
        "Error:Invalid a value:" + '"' + inputId[16].value + '", done is 9999.'
      );
      console.warn("No Call Value:" + inputId[15].value + ".");
      console.warn("No Call Value:" + inputId[16].value + ".");
    }
  }
  if (id == 8) {
    if (
      inputId[17].value == "charset" &&
      inputId[18].value == "2" &&
      inputId[19].value == "3" &&
      inputId[20].value == "4"
    ) {
      world += 1;
    } else {
      alert(
        "Error:Invalid a value:" + '"' + inputId[17].value + '", done is let.'
      );
      alert(
        "Error:Invalid a value:" + '"' + inputId[18].value + '", done is let.'
      );
      alert(
        "Error:Invalid a value:" + '"' + inputId[19].value + '", done is let.'
      );
      alert(
        "Error:Invalid a value:" + '"' + inputId[20].value + '", done is let.'
      );
      console.warn("No Call Value:" + inputId[17].value + ".");
      console.warn("No Call Value:" + inputId[18].value + ".");
      console.warn("No Call Value:" + inputId[19].value + ".");
      console.warn("No Call Value:" + inputId[20].value + ".");
    }
  }
  if (id == 9) {
    if (inputId[21].value == "new Date()") {
      world += 1;
    } else {
      alert(
        "Error:Invalid a value:" +
          '"' +
          inputId[21].value +
          '", done is new Date().'
      );
      console.warn("No Call Value:" + inputId[21].value + ".");
    }
  }
  // The Final One
  if (id == 10) {
    if (inputId[22].value == "20" && inputId[23].value == "40") {
      world += 1;
    } else {
      alert(
        "Error:Invalid a value:" + '"' + inputId[22].value + '", done is 20.'
      );
      alert(
        "Error:Invalid a value:" + '"' + inputId[23].value + '", done is 20.'
      );
      console.warn("No Call Value:" + inputId[22].value + ".");
      console.warn("No Call Value:" + inputId[23].value + ".");
    }
  }
}

function update(dt) {
  if (world >= 4) {
    pt = "Gonld";
  } else {
    pt = "Easy";
  }
  score =
    String(
      inputId[0].value +
        inputId[1].value +
        inputId[2].value +
        inputId[3].value +
        inputId[4].value +
        inputId[5].value +
        inputId[6].value +
        inputId[7].value +
        inputId[8].value +
        inputId[9].value +
        inputId[10].value +
        inputId[11].value +
        inputId[12].value +
        inputId[13].value +
        inputId[14].value +
        inputId[15].value +
        inputId[16].value +
        inputId[17].value +
        inputId[18].value +
        inputId[19].value +
        inputId[20].value +
        inputId[21].value +
        inputId[22].value +
        inputId[23].value
    ).length * dt;
  if (world == 1) {
    worldId[0].style.display = "block";
  } else {
    worldId[0].style.display = "none";
  }
  if (world == 2) {
    worldId[1].style.display = "block";
  } else {
    worldId[1].style.display = "none";
  }
  if (world == 3) {
    worldId[2].style.display = "block";
  } else {
    worldId[2].style.display = "none";
  }
  if (world == 4) {
    worldId[3].style.display = "block";
  } else {
    worldId[3].style.display = "none";
  }
  if (world == 5) {
    worldId[4].style.display = "block";
  } else {
    worldId[4].style.display = "none";
  }
  if (world == 6) {
    worldId[5].style.display = "block";
  } else {
    worldId[5].style.display = "none";
  }
  if (world == 7) {
    worldId[6].style.display = "block";
  } else {
    worldId[6].style.display = "none";
  }
  if (world == 8) {
    worldId[7].style.display = "block";
  } else {
    worldId[7].style.display = "none";
  }
  if (world == 9) {
    worldId[8].style.display = "block";
  } else {
    worldId[8].style.display = "none";
  }
  if (world == 10) {
    worldId[9].style.display = "block";
  } else {
    worldId[9].style.display = "none";
  }
  document.getElementById("pt").innerText = pt;
  document.getElementById("score").innerText = score;
  document.getElementById("world").innerText = world;
}

// Set to 200 milliseconds to js progam input fast update element.
setInterval(() => {
  update(0.82);
}, 400);

document.title = name

// General console.log
console.log("I Takes to Kips of JS!");
