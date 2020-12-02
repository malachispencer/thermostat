# Thermostat

Here we build a Thermostat web application in JavaScript, jQuery, Node.js, HTML and CSS.

### Setting Up Jasmine For Node.js

1. Run ```npm init``` to create ```package.json``` file.

2. Run ```npm install --save-dev jasmine``` to install Jasmine locally and save as a dev dependency.

3. Add ```"test-init": "./node_modules/jasmine/bin/jasmine.js init"``` to scripts in ```package.json```.

4. Add ```"test": "./node_modules/jasmine/bin/jasmine.js"``` to scripts in ```package.json```.

5. Run ```npm run test-init``` to initialize Jasmine.

### Running Tests

* Run ```npm test``` from the project root.

### Setting Up Browserify

1. Run ```npm i browserify --save-dev``` to save Browserify as a dev dependecy.

2. Add ```"build": "browserify ./public/script.js -o bundle.js"``` to scripts in ```package.json```.

3. Run ```npm run build``` to create the ```bundle.js``` file.

4. Add ```<script src="../bundle.js"></script>``` just above the closing body tag inside ```./public/index.html```.

### Setting Up Watchify

1. Run ```npm i watchify --save-dev``` to save Watchify as a dev dependency.

2. Add ```"watch": "watchify ./public/script.js -o bundle.js"``` to scripts in ```package.json```.

3. Run ```npm run watch``` to have ```bundle.js``` updated in real time.

### Running The Application

* Open ```index.html``` in the browser.
