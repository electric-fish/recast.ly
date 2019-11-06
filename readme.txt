npm install -g babel-cli

babel . --out-dir compiled --presets=react --ignore=node_modules,compiled --source-maps inline

babel . --out-dir compiled --presets=react --ignore=node_modules,compiled --source-maps inline --watch

npm install -g live-server

live-server