import { waitForTokenRefresh } from '@infinityloop.labs/common'
import { getFromLocalStorage } from '@infinityloop.labs/utils'
import { Mutex } from 'async-mutex'
import axios from 'axios'
import {
  // CLI: Paste backend urls
  LocalStorageEnum,
} from '@constants/local'

// Получение ссылки на backend из local environment

// Объявление изначальных Headers
export const headers = {
  Authorization: '',
}

// Создаем экземпляр Mutex
// Для другого перехватчика, лучше создать отдельный экземпляр
const mutex401 = new Mutex()

// CLI: Paste instances

// Перехватчики запросов: Начало

// CLI: Paste request interceptors
// Перехватчики запросов: Конец

// Перехватчики ответов: Начало
// CLI: Paste response interceptors
// Перехватчики ответов: Конец
