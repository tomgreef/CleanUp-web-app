<template>
	<section class="section">
		<div class="container">
			<h1 class="title">Hola {{ user.displayName || 'Agente' }}</h1>
			<ModifyProfileForm />
			<hr />
			<ProfileDangerZone />
		</div>
	</section>
</template>

<script>
	import { auth } from '@/firebase';
	import ModifyProfileForm from '@/components/ModifyProfileForm';
	import ProfileDangerZone from '@/components/ProfileDangerZone';

	export default {
		components: {
			ModifyProfileForm,
			ProfileDangerZone
		},
		computed: {
			user() {
				return auth.currentUser;
			}
		}
	};
</script>
