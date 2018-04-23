var exect = require('shelljs');
exect.exec('"node_modules/.bin/tsc" -p tsconfig.json', {silent: false});
exect.exec('node second.js', {silent: false});
