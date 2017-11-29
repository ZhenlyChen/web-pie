const Router = require('../lib/route')
const ctrl = require('./controller')
const Static = require('../lib/static')

let router = new Router()
let staticFile = new Static()
staticFile.use(__dirname + '/../public')

router.post('/api/register', ctrl.register)
router.get('/', ctrl.userPage)
router.use('/', staticFile.routes)
router.get('/', ctrl.deal404)

module.exports = router
