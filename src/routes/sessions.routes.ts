import { Router } from 'express';

import AuthenticateUserService from '../services/AuthenticateUserService';

import UserMap from '../mappers/UserMap';

const sessionsRouter = Router();

sessionsRouter.post('/', async (request, response) => {
	try {
		const { email, password } = request.body;

		const authenticateUser = new AuthenticateUserService();

		const { user, token } = await authenticateUser.execute({
			email,
			password,
		});

		// delete user.password;

		const mappedUser = UserMap.toDTO(user);

		return response.json({ mappedUser, token });
	} catch (err) {
		return response.status(400).json({ error: err.message });
	}
});

export default sessionsRouter;
