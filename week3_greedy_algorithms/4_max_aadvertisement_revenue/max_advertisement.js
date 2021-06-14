function computeMaxRevenue(ads, slots){
    ads.sort((a, b) => (a - b));
    slots.sort((a, b) => (a - b));
    let n = ads.length 


    let maxRevenue = 0;
    for(let i = 0; i < n; i++){
        maxRevenue += ads[i] * slots[i];     
    }
    return maxRevenue;
}

