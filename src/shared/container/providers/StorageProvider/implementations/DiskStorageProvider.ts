import fs from 'fs';
import path from 'path';
import uploadConfig from '@config/upload';
import IStorageProvider from '../models/IStorageProvider';

class DiskStorageProvider implements IStorageProvider {
	public async saveFile(file: string): Promise<string> {
		await fs.promises.rename(
			path.resolve(uploadConfig.tmpFolder, file),
			path.resolve(uploadConfig.uploadsFolder, file),
		);

		return file;
	}

	public async deleteFile(file: string): Promise<void> {
		const filePath = path.resolve(uploadConfig.uploadsFolder, file);

		// Check if file exists
		try {
			await fs.promises.stat(filePath);
		} catch {
			// If file found, don`t need to delete
			return;
		}

		// If file found, delete
		await fs.promises.unlink(filePath);
	}
}

export default DiskStorageProvider;
