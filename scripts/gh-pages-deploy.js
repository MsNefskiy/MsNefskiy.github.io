import { execa } from 'execa';
import * as fs from 'fs';

(async () => {
  try {
    console.log('Building...');
    await execa('yarn', 'build');
    const folderName = fs.existsSync('dist') ? 'dist' : 'build';
    console.log('Pushing to gh-pages...');
    await execa('git', ['add', folderName, '-f']);
    await execa('git', ['commit', '-m', 'gh-pages']);
    await execa('git', ['subtree', 'push', '--prefix', folderName, 'origin', 'gh-pages']);
    console.log('Successfully deployed');
  } catch (e) {
    console.log(e.message);
    process.exit(1);
  }
})();
