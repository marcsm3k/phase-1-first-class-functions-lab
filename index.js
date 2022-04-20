// Code your solution in this file!

const returnFirstTwoDrivers = function (drivers) {

    return drivers.slice(0,2);
}

const returnLastTwoDrivers = function (drivers) {

    return drivers.slice(2,4);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier (multiplier) { 

    return function(fare) {
        return multiplier * fare ;
    }
}

const fareDoubler = function (fare) {
    return fare * 2; 
}

const fareTripler = function (fare) {
    return fare * 3;
}

function selectDifferentDrivers (drivers, returnDrivers) {
    if (returnDrivers === returnFirstTwoDrivers) {
        return returnFirstTwoDrivers(drivers); 
    }
    else if (returnDrivers === returnLastTwoDrivers) {
        return returnLastTwoDrivers(drivers);
    }
}
