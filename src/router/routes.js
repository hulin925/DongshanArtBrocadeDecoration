import HelloWorld from '@/views/HelloWorld'
import Home from '@/views/Home'

export default[
  {
    path:'/',
    name:'Home',
    component:Home
  },
  {
    path:'/helloWorld',
    name:'HelloWorld',
    component:HelloWorld
  },
]
