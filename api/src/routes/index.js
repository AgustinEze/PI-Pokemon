const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const pokemonsRouter = require('./pokemons');
const typesRouter = require('./types');
const responseSize = require('express-response-size');
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use(responseSize((req, res, size) => {
    const stat = `${req.method} - ${req.url.replace(/[:.]/g, '')}`;
    const convertedSize = Math.round(size / 1024);
    const outputSize = `${convertedSize}kb`;
    console.log('stat:', stat, '\nsize:',outputSize)
    //fs.appendFile(path.join(__dirname, '..', 'logs', 'benchmark-size.csv'), `${stat},${outputSize}\n`);
    // IE: shove into a database for further analysis, wait, spreadsheets are databases, right?
  }))

router.use('/pokemons', pokemonsRouter);
router.use('/types', typesRouter);

module.exports = router;
