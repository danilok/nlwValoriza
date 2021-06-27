import { Request, Response } from 'express';
import { DeleteTagService } from '../services/DeleteTagService';


class DeleteTagController {
  async handle(request: Request, response: Response) {
    
    const id = request.params.id;

    const deleteTagService = new DeleteTagService();

    await deleteTagService.execute(id);

    return response.status(204).json();
  }
}

export { DeleteTagController }