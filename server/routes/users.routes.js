/*
import express from 'express'
import userCtrl from '../controllers/users.controller.js' 
import authCtrl from '../controllers/auth.controller.js'

const router = express.Router()
router.route('/api/users') 
.get(userCtrl.list)
.post(userCtrl.create)
router.route('/api/users/:userId') 
.get(userCtrl.read)
.put(userCtrl.update) 
.delete(userCtrl.remove)

router.route('/api/users/:userId')
.get(authCtrl.requireSignin, userCtrl.read)
.put(authCtrl.requireSignin, authCtrl.hasAuthorization, 
userCtrl.update)
.delete(authCtrl.requireSignin, authCtrl.hasAuthorization, 
userCtrl.remove)

router.param(':userId', userCtrl.userByID) 
router.route('/api/users').post(userCtrl.create)
router.route('/api/users').get(userCtrl.list)
router.param(':userId', userCtrl.userByID)
router.route('/api/users/:userId').get(userCtrl.read)
router.route('/api/users/:userId').put(userCtrl.update)
router.route('/api/users/:userId').delete(userCtrl.remove)
*/

import express from 'express'
import userCtrl from '../controllers/users.controller.js' 
	
const router = express.Router()
router.route('/api/users') 
.get(userCtrl.list)
.post(userCtrl.create)
.delete(userCtrl.removeAll)
router.route('/api/users/:userId') 
.get(userCtrl.read)
.put(userCtrl.update) 
.delete(userCtrl.remove)
router.param(':userId', userCtrl.userByID) 
router.route('/api/users').post(userCtrl.create)
router.route('/api/users').get(userCtrl.list)
router.param(':usersId', userCtrl.productByID)
router.route('/api/users/:usersId').get(userCtrl.read)
router.route('/api/users/:usersId').put(userCtrl.update)
router.route('/api/users/:usersId').delete(userCtrl.remove)
//.route('api/product').delete(productCtrl.removeAll)
export default router