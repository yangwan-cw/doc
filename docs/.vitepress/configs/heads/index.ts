import type { DefaultTheme } from 'vitepress'
import frontendConfig from '../heads/frontend'
import backendConfig from '../heads/backend'
import logConfig from '../heads/log'
import databaseConfig from '../heads/database'
import toolsConfig from '../heads/tools'
import aboutConfig from '../heads/about'
import resourceConfig from '../heads/resource'
import PythonConfig from '../heads/python'
import GoConfig from '../heads/go'
import BaseConfig from './base'
export const nav: DefaultTheme.Config['nav'] = [
    { text: '📖 导读', link: '/preview/' },
    frontendConfig,
    backendConfig,
    PythonConfig,
    GoConfig,
    BaseConfig,
    databaseConfig,
    toolsConfig,
    aboutConfig,
    logConfig,
    resourceConfig
]