import express from 'express';
import { Router } from 'express';
import loginUsuarioController from './src/controllers/loginUsuarioController';
import cadastrarUsuarioController from './src/controllers/cadastraUsuarioController';
import cadastrarLojaController from './src/controllers/cadastraLojaController';

const router = Router();

router.use(express.json());

router.post('/loginUsuario',
  loginUsuarioController
);

router.post('/cadastraUsuario',
  cadastrarUsuarioController
);

router.post('/cadastraLoja',
  cadastrarLojaController
);

export default router;
