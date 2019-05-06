function newFiles(name){
    var fs = require("fs");
    var _dirname = process.cwd();
    var text = [
            `/* ${name}.js */`,
            '{}',
            `<!-- ${name}.swan -->`,
            `/* ${name}.css */`
        ];
    var suffix = ['.js', '.json', '.swan', '.css'];
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