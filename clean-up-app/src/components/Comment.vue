<template>
	<b-table :data="data" :columns="columns"></b-table>
</template>

<script>
	export default {
		data() {
			return {
				data: [
					{
						id: 1,
						titulo: 'Acera rota',
						date: '2016-10-15',
						cerrado: 'true'
					},
					{
						id: 2,
						titulo: 'Semaforo malfuncionando',
						date: '2016-12-15',
						cerrado: 'false'
					},
					{
						id: 3,
						titulo: 'Puente en mal estado',
						date: '2016-04-268',
						cerrado: 'false'
					}
				],
				columns: [
					{
						field: 'id',
						label: 'ID',
						width: '40',
						numeric: true
					},
					{
						field: 'titulo',
						label: 'Título'
					},
					{
						field: 'fecha',
						label: 'Fecha',
						centered: true
					}
				]
			};
		}
	};
</script>
