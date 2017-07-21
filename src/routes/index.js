import { name, version } from '../../package.json';
import { Router } from 'express';

export default () => {

  let router = Router();

  router.get('/', (req, res) => {
    res.send({
      name,
      version
    });
  });

  return router;
}
