/**
 * 
 * N airports, 1 plane and 1 unit to reach next airport
 * no of planes toreq to reach laat airport
 * 
 * array of fuels
 */


function minPlanes(array){
    const n = array.length;
    let planes = 1;
    let curFuel = array[0];
    let maxFuel = array[0];

    if(curFuel == 0){
        return -1;
    }
    else {
        for(let i=1; i<n; i++){
            curFuel--;
            if(curFuel < 0){
                planes ++;
                curFuel = maxFuel -1;
            }
            maxFuel = Math.max(maxFuel, array[i]);
        }
        return planes;
    }
}

const fuels = [2,1,2,3,1];
console.log(minPlanes(fuels));