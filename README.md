# grunt-fontello-svg

> Generate the SVG versions of a Fontello icon set.

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-fontello-svg --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-fontello-svg');
```

## The "fontello_svg" task

### Overview
In your project's Gruntfile, add a section named `fontello_svg` to the data object passed into `grunt.initConfig()`.

### Usage example

```js
grunt.initConfig({
    fontello_svg: {
        options: {
            css: false,
            skip: true,
            verbose: true
        },
        all: {
            config: "fontello-config.json",
            dest: "out/"
        }
    }
});
```

### Options

#### css

* Type: `Boolean`
* Default: `true`

Create a corresponding CSS file

#### skip

* Type: `Boolean`
* Default: `false`

Skip existing files

#### verbose

* Type: `Boolean`
* Default: `false`

Verbose output
