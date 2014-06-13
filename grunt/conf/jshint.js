
module.exports = {
  options: {
    esnext: true,
    node: true,
    laxcomma: true,
    laxbreak: true,
    camelcase: false,
    indent: 2,
    newcap: true,
    quotmark: 'single',
    proto: true,
    maxcomplexity: 10,
    multistr: true,
    maxparams: 6,
    maxlen: 80,
    maxstatements: 25,
    eqnull: true,
    immed: true,
    latedef: 'nofunc',
    nonew: true,
    white: true,

    globalstrict: false,
    undef: true,
    unused: false,
    trailing: true,

    globals: {
      angular: false,
      describe: false,
      beforeEach: false,
      afterEach: false,
      it: false,
      before: false,
      after: false
    }
  },
  src: [
    '<%= src.js %>'
  ],
  test: [
    '<%= src.unit %>'
  ],
  gruntfile: [
    'grunt/**/*.js',
    'Gruntfile.js'
  ],
  watch: {
    options: {
      unused: false
    },
    files: {
      src: [
        '<%= src.unit %>',
        '<%= src.js %>'
      ]
    }
  }
};
