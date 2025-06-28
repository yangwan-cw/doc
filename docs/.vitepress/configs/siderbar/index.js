// 导出 sidebar 配置
import tools from './tools/index.js'
import frontend from "./frontend/index.js";
import git from './git/index.js'
export const sidebar = {
    ...tools,
    ...frontend,
    ...git
}