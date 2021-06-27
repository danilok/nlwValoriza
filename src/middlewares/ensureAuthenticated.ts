import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
  sub: string;
}

export function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {

  // Receber o token
  const authToken = request.headers.authorization;

  // Validar se o token está preenchido
  if (!authToken) {
    return response.status(401).end();
  }
  
  const [, token] = authToken.split(" ");
  try {
    // Validar se o token é válido
    const { sub } = verify(token, process.env.API_KEY) as IPayload;
    
    // Recuperar informações do usuário
    request.user_id = sub;

  } catch (error) {
    return response.status(401).end();
  } 
  
  
  return next();
}