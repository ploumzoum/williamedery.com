import Vue from "vue"
import Router from "vue-router"

import About from "@/views/About.vue"
import Contact from "@/views/Contact.vue"
import Home from "@/views/Home.vue"
import Music from "@/views/Music.vue"
import Videos from "@/views/Videos.vue"

Vue.use(Router)

const router = new Router({
	mode: "history",
	base: process.env.BASE_URL,
	routes: [
		{
			path: "*",
			redirect: "/",
		},
		{
			path: "/",
			name: "home",
			component: Home,
		},
		{
			path: "/about",
			name: "about",
			component: About,
		},
		{
			path: "/music",
			name: "music",
			component: Music,
		},
		{
			path: "/videos",
			name: "videos",
			component: Videos,
		},
		{
			path: "/contact",
			name: "contact",
			component: Contact,
		},
	],
})

export default router
