import HomeWrap from '@/views/HomeWrap'
import Home from '@/views/Home'
import Case from '@/views/Case'

export default [
  //首页外壳
  {
    path: '/',
    name: 'HomeWrap',
    component: HomeWrap,
    children: [
      //首页
      {
        path: '/',
        name: 'Home',
        component: Home
      },
      //案例
      {
        path: 'case',
        name: 'Case',
        component: Case
      }
    ]
  },
  //除首页以外
]
