import { deleteAsync } from 'del';
import config from '../config.js';

export const clean = () => deleteAsync(`${config.dest.root}/*`);
