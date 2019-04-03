// Code your solution in this file!
const logDriverNames = function (drivers) {
  drivers.forEach(function (driver) {
    return console.log(driver.name);
  })
};

const logDriversByHometown = function (drivers, location) {
    drivers.forEach(function (driver) {
      if (driver.hometown === location) {
        return console.log(driver.name);
      }
    })
}

const driversByRevenue = function (drivers) {
  const newDrivers = [...drivers]
      newDrivers.sort(function (dr1, dr2) {
       return dr1.revenue - dr2.revenue;
  })
  return newDrivers
}

const driversByName = function (drivers) {
  const newDrivers = [...drivers]
  newDrivers.sort(function (a, b) {
    let nameA = a.name
    let nameB = b.name
     if (nameA < nameB) {
       return -1
     }
     return 0
  })
  return newDrivers;
}

const totalRevenue = function (drivers) {
    const reduceObj = function (acc, driver) {
      return acc += driver.revenue;
    }
    return drivers.reduce(reduceObj, 0)
    
  // let total = 0
  //   drivers.forEach(function (driver) {
  //     return total += driver.revenue
  //   })
  //   return total

}

const averageRevenue = function (drivers) {
  const average = totalRevenue(drivers) / drivers.length
  return average;
}
