import { optionify } from "./index";

const users = [
	{ id: 1, name: 'John' },
	{ id: 2, name: 'Jane' },
	{ id: 3, name: 'Joe' },
]

describe('Verify options', () => {
  test('Users', () => {
		const options = optionify(users, 'name', 'id');
		

		expect(options).toEqual([
			{ label: 'John', value: 1 },
			{ label: 'Jane', value: 2 },
			{ label: 'Joe', value: 3 },
		]);
  });
});
