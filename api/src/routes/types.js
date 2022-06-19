const { Router } = require('express');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get('/',async (req, res, next)=>{
    res.send('soy get types')
})

module.exports = router;