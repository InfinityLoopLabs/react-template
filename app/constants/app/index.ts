import json from '../../../package.json'

export const NAME_FROM_PACKAGE_JSON = json.name
// eslint-disable-next-line @typescript-eslint/naming-convention
export const IS_DEVELOPMENT_MODE = import.meta.env.DEV
// eslint-disable-next-line @typescript-eslint/naming-convention
export const IS_PRODUCTION_MODE = import.meta.env.PROD
export const BASE_URL = import.meta.env.BASE_URL

export const BACKEND_AUTH_URL = import.meta.env.VITE_BACKEND_AUTH_URL
export const BACKEND_DRAFTS_URL = import.meta.env.VITE_BACKEND_DRAFTS_URL
// CLI: Paste backend env urls
