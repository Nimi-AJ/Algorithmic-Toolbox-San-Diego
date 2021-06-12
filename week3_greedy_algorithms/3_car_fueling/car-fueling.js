sconst read = require('readline');
const readLine = read.createInterface({input: process.stdin});


let n = 0;
let dist = 0;
let tank = 0;

readLine.on("line", line =>{
    if(n === 0){
        dist = parseInt(line);
        n++
    } else if(n === 1){
        tank = parseInt(line);
        n++;
    } else if(n == 2){
      //do nothing
        n++;
    } else if(n > 2){
        let stops = line.split(" ").map(num => parseInt(num));
        stops.push(dist);
        computeMinRefills(dist, tank, stops);
        readLine.close();
    } 
      
})
    

    function computeMinRefills(dist, tank, stops){
       // stops.push(dist) //remove from here
        let refill = 0;
        const minimumD = tank;
        let lastRefill = 0;
        let result = 0;
        
        for(let i = 0; i < stops.length + 1; i++){
            if(minimumD > stops[i] - lastRefill){
                tank = tank - stops[i];
                
            } else if(minimumD < stops[i] - lastRefill){
                refill++;
                lastRefill = stops[i - 1];
                tank = minimumD - (stops[i] - stops[i - 1])
               
                if(i === 0){
                    result = "Impossible";
                    break;
                } else if(tank < 0){
                    result = "Impossible";
                    break;
                } 
                  // `tank at last stop`
                    result = refill;
                tank = minimumD;
            }
        }
   
        console.log(result);
        
    }


// console.log(computeMinRefills(900, 400, [200, 375, 550, 750]));
//computeMinRefills(900, 400, [200, 375, 550, 750])



