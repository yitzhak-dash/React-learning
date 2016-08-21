##set up
* ```npm init --yes```
* ```npm install --save babel-preset-react babel-preset-es2015 watchify babelify``` the first library converts JSX to javascript
* Go to package.json and define following scripts:
    *  ```"build": "watchify src/app.js -o public/bundle.js -t [ babelify --presets [ react es2015 ] ]"``` 
    *   ```"server": "cd public; live-server --port=1234 --entry-file=index.html"```
* create public and src dirs
* ```npm i --save react redux react-dom``` installing the framework
