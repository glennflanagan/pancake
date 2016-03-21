# Pancake
Gulp starter project for flat HTML, CSS and JavaScript development.

This repository is simply a good starting point for flat HTML, CSS and JavaScript development using a Gulp workflow to compile HTML templates, SASS to CSS and JavaScript modules it one file.

Download the repo and run the NPM install command to install all of the dependencies.
```
$ npm install
```
Then to begin hacking, simply run `gulp` command which will begin the watch tasks and start a static web server.

```
$ gulp
```

## HTML
Pancake uses [Nunjucks](https://mozilla.github.io/nunjucks/) to compile the HTML files.

Nunjucks allows you to separate your flat HTML files out into several partial files and compiles them down into the build folder.

By default the Gulp process looks for `.html` files in the `src` directory and compiles them down into the `build` directory.


## CSS
CSS is generated from SASS.

Using SASS allows you to use functions and mixins in your styles for speed of developement. The SASS files also go through [Autoprefixer](https://github.com/sindresorhus/gulp-autoprefixer) so you never have to worry about remembering to add those pesky vendor prefixes.

Pancake is also set up with a version of the Bootstrap grid mixins but this is completely optional, but doing a grid this way means nice clean HTML markup.

By default the project is set up using a version of the [Block Element Modifier methodology](http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/), but you can style your SASS code however you like.

By default the Gulp process looks for `.scss` files in the `src/assets/sass` directory and compiles them down into the `build/assets/css` directory.

## JavaScript
Pancake's JavaScript is set up to combine all JavaScript files into one main file. It is also set up to use the [Revealing Module Pattern](http://www.raymondcamden.com/2013/05/13/JavaScript-Design-Patterns-The-Revealing-Module-Pattern/). This is a great way to split out your JavaScript code to make it easier to maintain.

Your JavaScript will also be run through [JSHint](http://jshint.com/) to make sure your code correct and clean. You'll also be notified immediately if you save a file with an error.

By default the Gulp process looks for `/src/assets/js/main.js` and combines all the JavaScript files in the `/src/assets/js/modules` directory into the `/build/assets/js/main.js` file.

## Images & Fonts
The Pancake setup also ensures all of your image and font files are kept up to date in the build folder.

There's nothing fancy here, it simply copies the files from the source folder into the build each time a new file is added or the gulp command is run.
