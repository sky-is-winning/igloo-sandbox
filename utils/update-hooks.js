const fs = require('fs')

fs.copyFileSync('CLIENT-PRE-COMMIT', '.git/hooks/pre-commit')
fs.chmodSync('.git/hooks/pre-commit', 0o755)

fs.copyFileSync('MEDIA-PRE-COMMIT', 'client/.git/hooks/pre-commit')
fs.chmodSync('client/.git/hooks/pre-commit', 0o755)
