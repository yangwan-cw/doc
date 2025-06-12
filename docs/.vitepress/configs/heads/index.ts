import type { DefaultTheme } from 'vitepress'
import frontendConfig from './frontend'
import backendConfig from './backend'
import logConfig from './log'
import databaseConfig from './database'
import toolsConfig from './tools'
import aboutConfig from './about'
import resourceConfig from './resource'
import PythonConfig from './python'
import GoConfig from './go'
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