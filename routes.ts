import express from 'express';
import { Router } from 'express';
import loginUsuarioController from './src/controllers/loginUsuarioController';
import cadastrarUsuarioController from './src/controllers/cadastraUsuarioController';

const router = Router();

router.use(express.json());

router.post('/loginUsuario',
  loginUsuarioController
);

router.post('/cadastraUsuario',
  cadastrarUsuarioController
);

export default router;
