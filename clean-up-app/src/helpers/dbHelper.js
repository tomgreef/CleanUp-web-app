import { db } from '@/firebase';

export function simpleRead(table, field, operator, value) {
	let v = [];
	db.collection(table)
		.where(field, operator, value)
		.get()
		.then(snap => {
			snap.forEach(b => {
				v.push(b.data());
			});
		});
	return v;
}

export function compositeRead(
	table,
	field1,
	operator1,
	value1,
	field2,
	operator2,
	value2
) {
	return db
		.collection(table)
		.where(field1, operator1, value1)
		.where(field2, operator2, value2)
		.get();
}
