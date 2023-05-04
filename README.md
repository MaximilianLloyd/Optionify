# Optionify

Easily create type-safe options from an array of objects.

Turn this:

```tsx
const users = [
  {
    name: "John",
    id: 3,
  },
];

const options = users.map((user) => ({
  label: user.name,
  value: user.id,
}));

return <Select options={options} />;
```

Into this:

```tsx
import { optionify } from '@branch/optionify'

const users = [
  {
    name: "John",
    id: 3,
  },
];

const options = optionify(users, "name", "id");

return <Select options={options} />;
```
