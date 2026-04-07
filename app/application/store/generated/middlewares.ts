import { enhancedApi as auth } from '@generated/hooks/auth'
import { enhancedApi as drafts } from '@generated/hooks/drafts'
// CLI: Paste imports

const generatedMiddlewaresList = [
  auth.middleware,
  drafts.middleware,
  // CLI: Paste middlewares
]

// Этот файл нужен для автоматической инъекции middlewares в ваш store
export { generatedMiddlewaresList }
