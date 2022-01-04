let Physics, Chemistry, Biology;
Physics = prompt('Enter the Physics: ');
Chemistry = prompt('Enter the Chemistry: ');
Biology = prompt('Enter the Biology: ');
let dPhysics = parseInt(Physics);
let dChemistry = parseInt(Chemistry);
let dBiology = parseInt(Biology);
let Average = (dPhysics + dChemistry + dBiology) /3;
document.write('The Average: ' + Average);