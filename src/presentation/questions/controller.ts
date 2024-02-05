import { Request, Response } from 'express';
import { prisma } from '../../data/postgres';
import { CreateTodoDto, UpdateTodoDto } from '../../domain/dtos';
import { QuestionModel } from '../../data/mongo';
import { compararRespuestas } from '../../utils'

export class QuestionsController {

  //* DI
  constructor() { }


  public getQuestions = async( req: Request, res: Response ) => {
    const questions = await QuestionModel.find();
    return res.json( questions );
  };

  public getResults = async( req: Request, res: Response ) => { 
    const questions = await QuestionModel.find();
    const result = compararRespuestas(req.body, questions)
    return res.json( result );
  }

}