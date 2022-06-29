import express, {Request, Response} from 'express';
import restMiddleware from "../../src/middlewares/rest";
import supertest from "supertest";

const app = express()
  .get('/', restMiddleware, (req: Request, res: Response) => {
    const {filters} = req.query;
    res.send(filters).status(200);
  });

describe('restMiddleware test with simple app', function () {
  describe('transform filters test', function () {
    it('should return handle success if no filters given', async function () {
      await supertest(app).get(`/`).expect(200).expect('');
    });

    it('should give transformed filters', async function () {
      const filters = "(name eq 'john' or name eq 'hans') and group eq 'user'";
      await supertest(app).get(`/?filters=${filters}`).expect("(name = 'john' or name = 'hans') and group = 'user'");
    });
  });
});
