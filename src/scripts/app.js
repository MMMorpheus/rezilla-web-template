import documentReady from './utils/DOMLoaded.js'
import { isWebp } from './utils/isWebp.js';

documentReady(() => {
  // Тут исполняем скрипты
  isWebp()
})
