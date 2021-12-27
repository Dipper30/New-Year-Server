import { Router } from 'express'
import { 
  AuthController,
  CommentController,
  GreetingController,
  // ConfigController,
} from '../controller/index'

const router: Router = Router()

// auth
// router.post('/register', AuthController.register)
router.post('/login', AuthController.login)

router.post('/postGreeting', GreetingController.postGreeting)
router.post('/likeGreeting', GreetingController.likeGreeting)
router.post('/reportGreeting', GreetingController.reportGreeting)
router.post('/postComment', CommentController.postComment)

router.get('/greetings', GreetingController.getGreetings)

module.exports = router