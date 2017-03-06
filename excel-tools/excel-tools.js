/**
 * Created by onelei on 2017/3/6.
 */
var DIR_NAME = './tables';

var excelParser = require('excel-parser');
var fsPackage = require('fs');

// read file;
excelParser.worksheets({
    inFile: 'test.xlsx'
}, function(err, worksheets){
    if(err)
        console.error(err);
    console.log(worksheets);
});

/*
var data = [];
for(var i in excelObj){
    var arr=[];
    var value=excelObj[i];
    for(var j in value){
        arr.push(value[j]);
    }
    data.push(arr);
}
var buffer = xlsxPackage.build([
    {
        name:'demo',
        data:data
    }
]);

// save export files;
fs.writeFileSync('test.json',buffer,{'flag':'w'});

*/