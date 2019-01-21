import Vue from 'vue'
import Router from 'vue-router'

import Main from '../view/Main'
import Rank from '../view/Rank'
import List from '../view/List'
import Search from '../view/Search'
import Play from '../view/Play'
import Category from '../view/Category'
import Gedan from '../view/Gedan'
import topList from '../view/topList'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  history: true,
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main,
      redirect: 'List',
      children: [
        {path: 'Rank', name: 'Rank', component: Rank, meta: {keepAlive: true}},
        {path: 'List', name: 'List', component: List, meta: {keepAlive: true}}
      ]
    },
    {path: '/Search', name: 'Search', component: Search, meta: {keepAlive: true}},
    {path: '/Play', name: 'Play', component: Play, meta: {keepAlive: true}},
    {path: '/Category', name: 'Category', component: Category, meta: {keepAlive: false}},
    {path: '/Gedan', name: 'Gedan', component: Gedan, meta: {keepAlive: true}},
    {path: '/topList', name: 'topList', component: topList, meta: {keepAlive: true}}
  ]
})
