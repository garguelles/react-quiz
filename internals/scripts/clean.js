require('shelljs/global');
const addCheckMark = require('./helpers/checkmark.js');

if (!which('git')) {
  echo('Sorry, this script requires git');
  exit(1);
}

if (!test('-e', 'internals/templates')) {
  echo('The example is deleted already.');
  exit(1);
}

process.stdout.write('Cleanup started...');

// Handle common/
rm('-rf', 'app/common');
mv('internals/templates/common', 'app');

// Handle components/
rm('-rf', 'app/components');
mv('internals/templates/components', 'app');

// Handle containers/
rm('-rf', 'app/containers');
mv('internals/templates/containers', 'app');

// Handle tests/
mv('internals/templates/tests', 'app');

// Handle translations/
rm('-rf', 'app/translations');
mv('internals/templates/translations', 'app');

// Handle themes/
rm('-rf', 'app/themes');
mv('internals/templates/themes', 'app')

// Handle utils/
rm('-rf', 'app/utils');
mv('internals/templates/utils', 'app')

// Replace the files in the root app/ folder
cp('internals/templates/app.js', 'app/app.js');
cp('internals/templates/i18n.js', 'app/i18n.js');
cp('internals/templates/index.html', 'app/index.html');
cp('internals/templates/reducers.js', 'app/reducers.js');
cp('internals/templates/routes.js', 'app/routes.js');
cp('internals/templates/store.js', 'app/store.js');

// Remove the templates folder
rm('-rf', 'internals/templates');

addCheckMark();

// Commit the changes
if (exec('git add . --all && git commit -qm "Remove default example"').code !== 0) {
  echo('\nError: Git commit failed');
  exit(1);
}

echo('\nCleanup done. Happy Coding!!!');
