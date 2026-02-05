
# para correr todos los casos
npx wdio wdio.conf.js

# para correr los scripts del package.json, en la seccion scripts del package.json están definidos estos casos
npm run loginTest

# para correr un archivo especifico
npx wdio run wdio.conf.js --spec firstTest.js

# para correr un archivo test cuyo titulo tenga esa palabra, hace un grep de la palabre
npx wdio run wdio.conf.js --mochaOpts.grep Login 