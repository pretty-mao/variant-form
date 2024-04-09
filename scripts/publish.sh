#!/bin/sh

set -e

npm i

npm run lib

npm publish --access public

echo "✅ Publish completed"
