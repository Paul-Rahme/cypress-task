import { faker } from '@faker-js/faker';
export const stateStore = {};
let password = faker.internet.password()
let email = faker.internet.email()
stateStore.password = password;
stateStore.email = email


