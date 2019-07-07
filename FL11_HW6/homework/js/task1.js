let ax = + prompt('enter the coordinate X of the point A');
let ay = + prompt('enter the coordinate Y of the point A');
let bx = + prompt('enter the coordinate X of the point B');
let by = + prompt('enter the coordinate Y of the point B');
let cx = + prompt('enter the coordinate X of the point C');
let cy = + prompt('enter the coordinate Y of the point C');
const centerdivider = 2;
let centerX = (ax + bx) / centerdivider;
let centerY = (ay + by) / centerdivider;


if(ax === bx && ay === by && bx === cx && by === cy) {
  console.log('please, enter the correct data');
} else {
  console.log('point c is center of the line:');
  console.log( centerX === cx && centerY === cy);
}
