# vtu-setprops-slot-bug

This project is a minimal reproduction case for a vue-test-utils bug.
In this bug, wrapper's slot element is destroyed upon calling wrapper.setProps().

Run `yarn && yarn test:unit` to see the tests pass.

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```
