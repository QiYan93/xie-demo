function newFiles(name){
    var fs = require("fs");
    var _dirname = process.cwd();
    var text = [
            `/* ${name}.js */`,
            '{}',
            `<!-- ${name}.wxml -->`,
            `/* ${name}.wxss */`
        ];
    var suffix = ['.js', '.json', '.wxml', '.wxss'];
    if(!fs.existsSync(_dirname+'/'+name)){
        fs.mkdirSync(name);
    }
    for(var i = 0;i < 4;i++) {
        fs.writeFile(_dirname+'/'+name+'/'+name+suffix[i], text[i] ,  function(err) {
            if (err) {
                return console.error(err);
            }
         });
    }
}

module.exports = newFiles;