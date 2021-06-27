import { Request, Response } from "express";
import { GetUserService } from "../services/GetUserService";

class GetUserController {

  async handle(request: Request, response: Response) {

    const id = request.params.id;

    const getUSerService = new GetUserService();

    const user = await getUSerService.execute(id);

    return response.json(user);
  }
}

export { GetUserController }