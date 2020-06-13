<template>
	<nav>
		<router-link :to="'/'">Home</router-link> |
		<router-link :to="'about'">About</router-link> |
		<router-link :to="'music'">Music</router-link> |
		<router-link :to="'videos'">Videos</router-link> |
		<router-link :to="'contact'">Contact</router-link>
	</nav>
</template>

<script>
export default {
	name: "nav",
}
</script>
