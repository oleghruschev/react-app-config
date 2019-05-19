import Page1 from './components/Page1';
import Page2 from './components/Page2';


const routes = [
  {
    path: '/',
    exact: true,
    component: Page1,
  },
  {
    path: '/page2',
    exact: true,
    component: Page2
  },
]

export default routes;