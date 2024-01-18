import { AppDataSource } from './config/typeorm';

//import { User } from './entity/User';

AppDataSource.initialize().then(async () => {
  /*
    console.log('Inserting a new user into the database...');
    const user = new User();
    user.name = 'Joel';
    user.email = 'joel@example.com';
    user.password = '1234';
    user.phone_number = '09239294';
    await AppDataSource.manager.save(user);
    console.log('Saved a new user with id: ' + user.id);

    console.log('Loading users from the database...');
    const users = await AppDataSource.manager.find(User);
    console.log('Loaded users: ', users);
  })
  .catch((error) => console.log(error));
*/
});
