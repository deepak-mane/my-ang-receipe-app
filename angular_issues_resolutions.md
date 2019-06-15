# Angular App -- Issues and there Resolutions 

## 1. [angular-cli] Bootstrap styles not loading 
 Problem: I followed the steps for Global Library Installation https://github.com/angular/angular-cli#global-library-installation
- Installed bootstrap@3.4.1 ``` npm install bootstrap@3.4.1 --save ```
- Then added the needed script files to to apps[0].scripts in angular-cli.json file:
```
 "scripts": [
    "node_modules/bootstrap/dist/js/bootstrap.js"
    ],
and the Bootstrap CSS to the apps[0].styles array:

"styles": [
    "styles.css",
    "node_modules/bootstrap/dist/css/bootstrap.css"
    ],
```
- Restarted ng serve
But the bootstrap styles are not loading

<b>Solution:</b>

I checked all the options and tried each suggested here in the post. But only working option is by uninstalling 4.* version by ``` npm uninstall bootstrap --save ``` and next by installing bootstrap 3.3.7 ```npm install bootstrap@3.3.7 --save ```

After installing the bootstrap dependency into your project just plug in the below code in your angular.json file.
```
"styles": [
"./node_modules/bootstrap/dist/css/bootstrap.min.css"
],
"scripts": [
"./node_modules/bootstrap/dist/js/bootstrap.min.js"
]
```

## 2. [angular-cli]Schematic input does not validate against the Schema Errors:    Data path ".name" should match format "html-selector"
Solution:
Clear cache and it resolves
```
node --version
npm --version
ng --version
npm install --cache /tmp/empty-cache
```
## 3. [angluar-cli] Global Angular CLI version greater than local version
Solution:
Copy and run these commands
```
ng --version
npm install --save-dev @angular/cli@latest
ng --version
```

## 4. [angular-cli] Could not find the implementation for builder @angular-devkit/build-angular:dev-server
Solution:
Install @angular-devkit/build-angular as dev dependency. This package is newly introduced in Angular 6.0
```
npm install --save-dev @angular-devkit/build-angular
```
or,
```
yarn add @angular-devkit/build-angular --dev
```

# Important Angular Commands

## To really update just one package install NCU and then run it just for that package. This will bump to the real latest.
```
npm install -g npm-check-updates
ncu -f your-intended-package-name -u
```


## Is it possible to fetch data from Oracle DB in AngularJS? (I only have the DB connection, so by this can I get data from DB using AngularJS)
Angular is a client side framework, it runs on the browser. You can not make a connection to a database using Angular. You need to have a REST layer either in any of the server side programming languages such as Java, C#, NodeJS which can connect to your oracle database and return data to client/angular whenever they call the REST APIs.

