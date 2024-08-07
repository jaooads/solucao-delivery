import express from 'express';
import { Router } from 'express';
import loginUsuarioController from './src/controllers/loginUsuarioController';

const router = Router();

router.use(express.json());

router.post('/login', loginUsuarioController);

export default router;
