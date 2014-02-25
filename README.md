[![Build status (master)](http://b.adge.me/travis/MarcDiethelm/grunt-less-imports.svg)](https://travis-ci.org/MarcDiethelm/grunt-less-imports) &nbsp; ![npm version](http://b.adge.me/npm/v/grunt-less-imports.svg) &nbsp; [![gittip donate](http://b.adge.me/:gittip-donate-lightgrey.svg)](https://www.gittip.com/MarcDiethelm/) &nbsp; [![bitcoin donations to 19emVu3kNQKZWZsG916MwbkyJh7Fci7WER](http://b.adge.me/:bitcoin-donate-lightgrey.svg)](bitcoin:19emVu3kNQKZWZsG916MwbkyJh7Fci7WER)

---

# grunt-sass-imports

> A grunt task to create sass @import statements from a collection of stylesheet files.

Why use this? To get useful error messages from the LessCSS parser, that tell you in what file the error was encountered!
LessCSS uses @import statements to aggregate files and will tell you about parsing errors in those files.
But maintaining these statements by hand is a pain. In order to automatically aggregate all the style files in a project,
a method of first concatenating the files before parsing is widely used. This works but you loose the valuable
information about where to fix your mistakes.

So, automate @import creation with this plugin and use the resulting file as the source for the LessCSS parser.

By default any .css source files are inlined in the output before the @import statements for the less files start.

## Getting Started
This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the
[Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a
[Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with
that process, you may install this plugin with this command:

```shell
npm install grunt-less-imports --save-dev
```

`--save-dev` adds the plugin to your devDependencies.

Once the plugin has been installed, load it in your `Gruntfile.js` like so:

```js
grunt.loadNpmTasks('grunt-less-imports');
```

## The "less_imports" task

### Overview
In your project's Gruntfile, add a section named `less_imports` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  less_imports: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    }
  }
})
```

### Options

In addition grunt-glue-nu has a few configuration options that are not passed on to glue.

- **options.inlineCSS** `{Boolean} true` – By default any .css source files are inlined in the output before the @import statements for the less files start.
                                                  LessCSS itself will generate CSS from `.less` @import statements, but any `.css` @imports are left as is. If that's the behavior
                                                  you want, set `inlineCSS` to false. The @imports will be created in order of the provided files.

- **options.banner** `{String} "// This file was generated by grunt-less-imports"` – This option contains the banner that is added to the beginning of the generated output file.



```js
grunt.initConfig({
  less_imports: {
    options: {
      inlineCSS: false // default: true
    },
    src: [ 'styles/*.css', 'styles/*.less'],
    dest: 'dist/imports.less'
  }
})
```

---

### Usage Examples

#### Using src and dest
In this example, `src` and `dest` properties are used to specify input files and the output file.

```js
grunt.initConfig({
  less_imports: {
    options: {
      inlineCSS: true
    },
    src: [ 'styles/*.css', 'styles/*.less'],
    dest: 'dist/imports.less'
  }
})
```

#### Using 'files' shorthand notation
In this example, a `files` shorthand is used to specify input files and the output file.

```js
grunt.initConfig({
  less_imports: {
    options: {
    },
    files: {
      'dist/imports.less': ['styles/styles.css', 'styles/styles.less']
    }
  }
})
```

## Troubleshooting

	Warning: Arguments to path.join must be strings

Most likely caused by a change in Node 0.10.0. Fixed in Grunt 0.4.1.
Update grunt and grunt-cli.

## Contributing
[How to contribute to a project on Github](https://gist.github.com/MarcDiethelm/7303312)

## Release History
see [CHANGELOG.md](CHANGELOG.md)