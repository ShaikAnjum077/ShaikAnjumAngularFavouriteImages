# Important Commands
npm run-script generatepipe filter
npm run-script generatedirective hover-effect

# MyfavouriteImages

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

--Create a folder in Github desktop locally and then published on Github.com
--check the location locally, it is there
--open the folder in VS Code using open folder, the folder shows up in the VS Code 
my working folder. Close other non-relevant folder and files.
1350
--open the terminal, now the directory is under the folder we just created, it's ready for install framework through
npm, such as: npm install jquery, whenever we install a package, it will create a folder called node_modules, and
the package and its dependency will be included in the folder.
--npm -install -g @angular/cli to install angular
1604
--ng, it was display error saying that The file C:\Users\mohd.c.akram\myfavourite_images is not digitally  
signed. You cannot run this script on the current system.balabala
--trouble shooting, go to C:\Users\mohd.c.akram\myfavourite_images, delete the file ng.ps1, rerun the command -ng, worked
(note the method is from stackoverflow). Review the commands under ng (angular). Noticed some important commands
such as generate, new, update, version, 

--ng new myfavourite_images
    -- choose no for routing
    --choose scss for styling sheet
    --commit at Github desktop and pushed to Github.com, noticed that node_modules
    was not uploaded (the fold is pretty big, don't upload!!!, default without uploading)
--set the version number of application to 0.0.4 in package.json, commit changes.


--add "pipe": "generatepipe" and "component": "generatecomponent" and "directive": "generatedirective" in package.json for running a command as a shortcut


-- npm start, compile successfully
-- go to github.com, go into application then stackblitz