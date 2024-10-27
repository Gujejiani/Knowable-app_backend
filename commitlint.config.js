// commitlint.config.js
module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
      'type-enum': [2, 'always', ['chore', 'feat', 'fix', 'refactor']],
      'subject-case': [2, 'always', ['sentence-case']],
      'subject-full-stop': [2, 'never', '.'],
    },
  };
  