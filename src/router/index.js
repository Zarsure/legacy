import Vue from 'vue'
import VueRouter from 'vue-router'

const routes = [
   {
      path: '/',
      component: () => import('../pages/Home.vue'),
      meta: {
         title: () => "TutuApp Best iOS Helper EVER | no need jailbreak | Download for Fun"
      }
  },
   {
      path: '/lite',
      component: () => import('../pages/Lite.vue'),
      meta: {
         title: () => "TutuApp Best iOS Helper EVER | no need jailbreak | Download for Fun"
      }
   },
   {
      path: '/lite/game',
      component: () => import('../pages/Lite.Game.vue'),

      meta: {
         title: () => "TutuApp Best iOS Helper EVER | no need jailbreak | Download for Fun"
      }
   },
   {
      path: '/lite/app',
      component: () => import('../pages/Lite.App.vue'),
      meta: {
         title: () => "TutuApp Best iOS Helper EVER | no need jailbreak | Download for Fun"
      }
   },
   {
      path: '/lite/topapp/:name',
      component: () => import('../pages/Lite.TopApp.vue'),
      meta: {
         title: () => "TutuApp Best iOS Helper EVER | no need jailbreak | Download for Fun"
      }
   },
   {
      path: '/lite/info/app/:id',
      component: () => import('../pages/AppInfo_Page.vue'),
      meta: {
         title: () => `TutuApp Best iOS Helper EVER | no need jailbreak | Download for Fun`
      }
   },
   {
      path: '/lite/search',
      component: () => import('../pages/Lite.Search.vue'),
      meta: {
         title: () => "TutuApp Best iOS Helper EVER | Search App"
      }
   },
   {
      path: '/lite/search/result',
      component: () => import('../pages/Lite.Search.Result.vue'),
      meta: {
         title: () => "TutuApp Best iOS Helper EVER | no need jailbreak | Download for Fun"
      }
   },
   {
      path: "/help",
      component: () => import("../pages/Help.vue"),
      meta: {
         hiddenTab: true,
         title: () => "TutuApp Best iOS Helper EVER | no need jailbreak | Download for Fun"
      }
   },
   {
      path: "/rank",
      redirect: "/rank/games"
   },
   {
      path: "/rank/:type",
      component: () => import("../pages/Rank.vue"),
      meta: {
         hiddenTab: true,
         title: () => "TutuApp Best iOS Helper EVER | no need jailbreak | Download for Fun",
         type: $route => {
            switch ($route.params.type) {
               case "apps":
                  return "^games"
               default:
                  return $route.params.type
            }
         }
      }
   },
   {
      path: '/download',
      component: () => import("../components/Home.Swiper.vue"),
      meta: {
         hiddenTab: true,
         title: () => "TutuApp Best iOS Helper EVER | no need jailbreak | Download for Fun"
      }
   },
   {
      path: '/feedback',
      component: () => import('../pages/Feedback.vue'),
      meta: {
         hiddenTab: true,
         title: () => "TutuApp Best iOS Helper EVER | no need jailbreak | Download for Fun"
      }
   },
   {
      path: '/about',
      component: () => import('../pages/About.vue'),
      meta: {
         hiddenTab: true,
         title: () => "TutuApp Best iOS Helper EVER | no need jailbreak | Download for Fun"
      }
   },
   /*
     {
        path: '/bind',
        component: () => import('../pages/Bind.vue'),
        meta: {
           hiddenTab: true,
           title: () => "TutuApp Best iOS Helper EVER | no need jailbreak | Download for Fun"
        }
     },
     {
        path: '/blog',
        component: () => import('../pages/Blog.vue'),
        meta: {
           hiddenTab: true,
           title: () => "TutuApp Best iOS Helper EVER | no need jailbreak | Download for Fun"
        }
     },*/
   {
      path: '*',
      component: () => import('../pages/404.vue'),
      meta: {
         hiddenTab: true,
         title: () => "TutuApp Best iOS Helper EVER | no need jailbreak | Download for Fun"
      }
   }
]
Vue.use(VueRouter)

export default new VueRouter({
   mode: 'history',
   routes,
   scrollBehavior(from, to, save) {
      return save || { x: 0, y: 0 }
   }
})