
# para correr todos los casos
npx wdio wdio.conf.js

# para correr los scripts del package.json, en la seccion scripts del package.json están definidos estos casos
npm run loginTest

# para correr un archivo especifico
npx wdio run wdio.conf.js --spec firstTest.js

# para correr un archivo test cuyo titulo tenga esa palabra, hace un grep de la palabre
npx wdio run wdio.conf.js --mochaOpts.grep Login 

# para instalar Jenkins y los comandos para correrlo
brew install jenkins-lts
brew services start jenkins-lts

# Validar que haya Java instalado
java -version

# Si no está instalado
brew install openjdk

# Abrir el navegador:
http://localhost:8080

# Va a pedir una contraseña que está en este archivo:
cat /Users/$(whoami)/.jenkins/secrets/initialAdminPassword

# o aca
ls ~/.jenkins/secrets/

# Validar que jenkins esté corriendo
brew services list

# Si devuelve jenkink-list está corriendo y este comando para la ruta donde está corriendo
ps aux | grep jenkins

# Cree el usuario con el mail de globant
mlestefania / Jenkins$385

