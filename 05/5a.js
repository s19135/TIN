let obj = {
    firstName: "someName",
    lastName: "someLastName",
    age: 54,
    currentLivingCountry: "someCountry",
    setName: (string) => obj.firstName = string,
    getName: () => `${obj.firstName} ${obj.lastName}`,
    setCurrentLivingCountry: (string) => obj.currentLivingCountry = string,
    getCurrentLivingCountry: () => `${obj.currentLivingCountry}`
}

function printProps(obj)
{
    let properties = Object.keys(obj);
    for (let prop of properties)
    {
        console.log("NAME " + prop + " = { " + obj[prop] + " } TYPE: " + typeof  obj[prop]);
    }
}
printProps(obj);