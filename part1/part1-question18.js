let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
};


for (const stats in statistics) {
    if (stats[0] == 'r' || statistics[stats] % 2 == 1) {
        console.log(`${statistics[stats]}`);
    }
}