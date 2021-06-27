import { getCustomRepository } from 'typeorm'
import { TagsRepository } from '../repositories/TagsRepositories'

class DeleteTagService {

  async execute(id: string) {

    const tagsRepositories = getCustomRepository(TagsRepository);

    const result = await tagsRepositories.delete(id);
    
    if (result.affected !== 1) {
      throw new Error("Deletion error");
    }
  }
}

export { DeleteTagService }