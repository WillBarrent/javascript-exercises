const findTheOldest = function(people) {
    let currentYear = (new Date()).getFullYear();

    let result = people.reduce((res, current) => {
        let deathOrCurrent = current.yearOfDeath || currentYear;
        let deathOrCurrentForRes = res.yearOfDeath || currentYear;
        if ((deathOrCurrent - current.yearOfBirth) > (deathOrCurrentForRes - res.yearOfBirth)) return current;
        else return res;
    }, people[0]);

    return result;
};

// Do not edit below this line
module.exports = findTheOldest;
