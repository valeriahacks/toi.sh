export default [
  {
    name: 'home',
    path: '/',
    component: require('./pages/Home')
  },
  {
    name: 'portfolio',
    path: '/portfolio',
    component: view('Portfolio')
  },
  {
    name: 'projects',
    path: '/projects',
    component: view('Projects')
  },
  {
    name: 'math-test',
    path: '/math-test',
    component: view('MathTest')
  }
]

function view (route) {
  return (resolve) => { require(['./pages/' + route + '.vue'], resolve) }
}
