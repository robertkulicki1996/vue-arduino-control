import FoobarView from './views/foobar.view.vue';

import AlphaView from './views/alpha.view.vue';
import BravoView from './views/bravo.view.vue';

export default [
  {
    path: '/foo',
    name: 'foo',
    component: FoobarView,
    redirect: '/foo/alpha',
    children: [
      {
        name: 'foo.alpha',
        path: 'alpha',
        component: AlphaView,
      },
      {
        name: 'foo.bravo',
        path: 'bravo',
        component: BravoView,
      },
    ],
  },
];
