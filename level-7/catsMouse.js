// You are given  queries in the form of x, y,and z 
// representing the respective positions for cats  and , and for mouse . Complete the function  to return which cat is closer to the mouse.
function catAndMouse(x, y, z) {
    const distanceA = Math.abs(x - z)
    const distanceB = Math.abs(y - z)

    if(distanceA < distanceB) return  'Cat A'
    if(distanceA > distanceB) return  'Cat B'
    if(distanceA === distanceB) return 'Mouse C'
}