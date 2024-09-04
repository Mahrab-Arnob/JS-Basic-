 // create a tandom busniess name genetrator tool

      // adjective:
      // Crazy
      // Amazing
      // Fire

      // Shope Name:
      // Engine
      // Food
      // Garments

      // Another:
      // Bros
      // Limited
      // Hub
let obj1 = {
    1: "Crazy",
    2: "Amazing",
    3: "Fire",
  };
  let obj2 = {
    1: "Engine",
    2: "Food ",
    3: "Garments",
  };
  let obj3 = {
    1: "Bros ",
    2: "Limited",
    3: " Hub ",
  };
  var ran1 = Math.floor(Math.random() * 3) + 1;
  var ran2 = Math.floor(Math.random() * 3) + 1;
  var ran3 = Math.floor(Math.random() * 3) + 1;

  console.log(obj1[ran1] +" "+obj2[ran2] +" "+ obj3[ran3]);

