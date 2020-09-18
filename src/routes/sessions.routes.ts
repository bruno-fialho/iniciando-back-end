import { Router } from 'express';

import AuthenticateUserService from '../services/AuthenticateUserService';

import UserMap from '../mappers/UserMap';

const sessionsRouter = Router();

sessionsRouter.post('/', async (request, response) => {
	const { email, password } = request.body;

	const authenticateUser = new AuthenticateUserService();

	const { user, token } = await authenticateUser.execute({
		email,
		password,
	});

	// delete user.password;

	const mappedUser = UserMap.toDTO(user);

	return response.json({ mappedUser, token });
});

export default sessionsRouter;
