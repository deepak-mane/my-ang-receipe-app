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
<font face="verdana" color="green">This is some text!</font>

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

## 5. [angular-cli] Collapse not working in ng-bootstrap and angular4 app for navbar breadcrumb button

Solution: Just using ng-bootstrap solves your issue.

Html file:
```
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler btn btn-outline-primary" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02"  aria-expanded="false" aria-label="Toggle navigation" (click)="isCollapsed = !isCollapsed" [attr.aria-expanded]="!isCollapsed" aria-controls="navbarTogglerDemo02">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarTogglerDemo02" [ngbCollapse]="isCollapsed">
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
```
Component ts file:
```
export class AppComponent {
  isCollapsed = false;
}
```
add bootstrap css file in angular-cli.json:
```
"styles": [
        "../node_modules/bootstrap/dist/css/bootstrap.min.css",
        "styles.css"
      ],
```
Add this in main module:
```
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

imports: [
  NgbModule.forRoot()
]
```
This will work like a charm.

The main advantage of using ng-bootstrap is you can eliminate the dependencies of other js libraries like jquery and popper and you can also write your components for bootstrap.


# Important Angular Commands

## To really update just one package install NCU and then run it just for that package. This will bump to the real latest.
```
npm install -g npm-check-updates
ncu -f your-intended-package-name -u
```


## Is it possible to fetch data from Oracle DB in AngularJS? (I only have the DB connection, so by this can I get data from DB using AngularJS)
Angular is a client side framework, it runs on the browser. You can not make a connection to a database using Angular. You need to have a REST layer either in any of the server side programming languages such as Java, C#, NodeJS which can connect to your oracle database and return data to client/angular whenever they call the REST APIs.

