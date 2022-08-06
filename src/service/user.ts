import { User, UserData } from '../model';
import { mongoUserRepository } from '../repository';
import { isValidEmail } from '../util/email';

class UserService {
  public create(data: UserData): Promise<User> {
    const isValid = isValidEmail(data.email);

    if (!isValid) {
      throw new Error('Invalid Email');
    }

    return mongoUserRepository.findOrCreate(data);
  }

  public findById(id: string): Promise<User | void> {
    return mongoUserRepository.findById(id);
  }
}

export const userService = new UserService();
