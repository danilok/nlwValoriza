import { getCustomRepository } from 'typeorm'
import { UserRepositories } from '../repositories/UserRepositories'

import { classToPlain } from 'class-transformer';

class GetUserService {

  async execute(id: string) {
    const usersRepositories = getCustomRepository(UserRepositories);

    const user = usersRepositories.findOne(id);

    return classToPlain(user);
  }

}

export { GetUserService }