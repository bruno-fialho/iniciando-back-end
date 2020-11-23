import AppError from '@shared/errors/AppError';

import FakeAppointmentsRepository from '../repositories/fakes/FakeAppointmentsRepository';
import CreateAppointmentService from './CreateAppointmentService';

let fakeAppointmentsRepository: FakeAppointmentsRepository;
let createAppointment: CreateAppointmentService;

describe('CreateAppointment', () => {
	beforeEach(() => {
		fakeAppointmentsRepository = new FakeAppointmentsRepository();
		createAppointment = new CreateAppointmentService(
			fakeAppointmentsRepository,
		);
	});

	it('should be able to create a new appointment', async () => {
		jest.spyOn(Date, 'now').mockImplementationOnce(() => {
			return new Date(2020, 11, 20, 11).getTime();
		});

		const appointment = await createAppointment.execute({
			date: new Date(2020, 11, 20, 13),
			user_id: 'user-id',
			provider_id: 'provider-id',
		});

		expect(appointment).toHaveProperty('id');
		expect(appointment.provider_id).toBe('provider-id');
	});

	it('should not be able to create two appointments on the same time', async () => {
		const appointmentDate = new Date(2020, 11, 20, 10);

		await createAppointment.execute({
			date: appointmentDate,
			user_id: 'user-id',
			provider_id: 'provider-id',
		});

		await expect(
			createAppointment.execute({
				date: appointmentDate,
				user_id: 'user-id',
				provider_id: 'provider-id',
			}),
		).rejects.toBeInstanceOf(AppError);
	});

	it('should not be able to create an appoitment on a past date', async () => {
		jest.spyOn(Date, 'now').mockImplementationOnce(() => {
			return new Date(2020, 11, 20, 11).getTime();
		});

		await expect(
			createAppointment.execute({
				date: new Date(2020, 11, 20, 10),
				user_id: 'user-id',
				provider_id: 'provider-id',
			}),
		).rejects.toBeInstanceOf(AppError);
	});

	it('should not be able to create an appoitment with same user as provider', async () => {
		jest.spyOn(Date, 'now').mockImplementationOnce(() => {
			return new Date(2020, 11, 20, 11).getTime();
		});

		await expect(
			createAppointment.execute({
				date: new Date(2020, 11, 20, 13),
				user_id: 'user-id',
				provider_id: 'user-id',
			}),
		).rejects.toBeInstanceOf(AppError);
	});

	it('should not be able to create an appoitment before 8am and after 5pm', async () => {
		jest.spyOn(Date, 'now').mockImplementationOnce(() => {
			return new Date(2020, 11, 20, 11).getTime();
		});

		await expect(
			createAppointment.execute({
				date: new Date(2020, 11, 21, 7),
				user_id: 'user-id',
				provider_id: 'provider-id',
			}),
		).rejects.toBeInstanceOf(AppError);

		await expect(
			createAppointment.execute({
				date: new Date(2020, 11, 21, 18),
				user_id: 'user-id',
				provider_id: 'provider-id',
			}),
		).rejects.toBeInstanceOf(AppError);
	});
});
