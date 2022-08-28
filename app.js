/*goes through every file in the src folder that ends with .ejs
then compiles this file to a .html file with the same name (name contains prefix of folder name)
puts this file in the docs folder */

const glob = require("glob");
const fs = require("fs");
const ejs = require("ejs");
const path = require("path");


// get all files in all subdirectories in the src folder
// for example, with the following folder structure the function returns this array
// src
//   - test
//         -test.js
//         - index.js
// => [src/test, src/test/test.js, src/test/index.js]
const getDirectories = function (src, callback) {
    glob(src + '/**/*', callback);
  };


  getDirectories('src', function (err, res) {
      res.forEach(filename => {

        // create the absolute filepath
        const filepath = path.join(__dirname, filename);

        if (!fs.lstatSync(filepath).isDirectory() && filename.endsWith(".ejs")) {
            // compile the new .ejs file
            ejs.renderFile(filename, {}, {}, function(err, str) {
                if (err) {
                    console.log("error")
                    return;
                }
                const split = filename.split(/\//);
 
                let filenamePrefix = split.slice(1, split.length - 1).join("_");

                if (filenamePrefix.length > 0) {
                    filenamePrefix = `${filenamePrefix}_`
                }
                
                // the filename prefix is the folder structure
                // for example src/research/research2/index.ejs -> docs/research_research2/index.ejs
                // // create the new filename -> file is put in the docs folder and gets a .html extension                   
                const newFilename = `docs/${filenamePrefix}${filename.split(/\/|.ejs/).at(-2)}.html`;
                console.log(newFilename)
                const stream = fs.createWriteStream(newFilename);

                // write to file
                stream.once('open', function(fd) {
                    stream.end(str);
                });
            })
        }
      })
  });



