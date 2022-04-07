const { faker } = require("@faker-js/faker");
const { User } = require("../models");

faker.locale = "es";

module.exports = async () => {
  await User.create({
    firstname: "Admin",
    lastname: "Admin",
    email: "admin@admin.com",
    password: "admin",
    city: faker.address.city(),
    address: faker.address.streetAddress(),
    isAdmin: true,
    phone: faker.phone.phoneNumber(),
  });
  await User.create({
    firstname: "User",
    lastname: "User",
    email: "user@user.com",
    password: "user",
    city: faker.address.city(),
    address: faker.address.streetAddress(),
    phone: faker.phone.phoneNumber(),
  });
  for (let i = 0; i < 10; i++) {
    const firstname = faker.name.firstName();
    const lastname = faker.name.lastName();
    const user = {
      firstname,
      lastname,
      email: faker.internet.email(firstname, lastname),
      password: "1234",
      city: faker.address.city(),
      address: faker.address.streetAddress(),
      phone: faker.phone.phoneNumber(),
    };
    await User.create(user);
  }

  console.log("[Database] Se corrió el seeder de Users.");
};
