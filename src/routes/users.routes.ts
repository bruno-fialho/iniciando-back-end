import { Router } from 'express';

import CreateUserService from '../services/CreateUserService';

import UserMap from '../mappers/UserMap';

const usersRouter = Router();

usersRouter.post('/', async (request, response) => {
	try {
		const { name, email, password } = request.body;

		const createUser = new CreateUserService();

		const user = await createUser.execute({
			name,
			email,
			password,
		});

		// delete user.password;

		const mappedUser = UserMap.toDTO(user);

		return response.json({ mappedUser });
	} catch (err) {
		return response.status(400).json({ error: err.message });
	}
});

export default usersRouter;
