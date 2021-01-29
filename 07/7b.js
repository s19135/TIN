const fs = require('fs');
const path = './HTML/';

fs.watch(path, (eventType, fileName) => {
    //console.log(`event type is: ${eventType}`);
    if (fileName && !fileName.toString().endsWith('~')) {
        fs.readFile(path.concat(fileName), (err, data) => {
            try{
                console.log();
                console.log("Change in file: " + path + fileName + "\n" + data.toString());
            }catch (err){
                console.error(err);
            }
        });
    }
});