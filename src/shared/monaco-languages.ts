import astro from './assets/astro'
import shell from './assets/bash'
import bat from './assets/bat'
import c from './assets/c'
import clojure from './assets/clojure'
import coffeescript from './assets/coffeeScript'
import cpp from './assets/cpp'
import csharp from './assets/csharp'
import css from './assets/css'
import dart from './assets/dart'
import dockerfile from './assets/docker'
import go from './assets/go'
import graphql from './assets/graphql'
import handlebars from './assets/handlebars'
import html from './assets/html'
import java from './assets/java'
import javascriptreact from './assets/javascript'
import json from './assets/json'
import kotlin from './assets/kotlin'
import lua from './assets/lua'
import markdown from './assets/markdown'
import sql from './assets/mssql'
// import sql from './assets/mysql'
import php from './assets/php'
import powershell from './assets/powershell'
import prisma from './assets/prisma'
import pug from './assets/pug'
import python from './assets/python'
import ruby from './assets/ruby'
import rust from './assets/rust'
import scss from './assets/sass'
import swift from './assets/swift'
import typescript from './assets/typescript'
import yaml from './assets/yaml'

const monacoLanguagesIcons = {
  'Frontend Web': {
    html: {
      Icon: html,
      language: 'html',
      status: 'ok'
    },
    css: {
      Icon: css,
      language: 'css',
      status: 'ok'
    },
    javascript: {
      Icon: javascriptreact,
      language: 'javascript',
      status: 'soon'
    },
    typescript: {
      Icon: typescript,
      language: 'typescript',
      status: 'soon'
    },
    astro: {
      Icon: astro,
      language: 'astro',
      status: 'beta'
    },
    pug: {
      Icon: pug,
      language: 'pug',
      status: 'ok'
    },
    handlebars: {
      Icon: handlebars,
      language: 'handlebars',
      status: 'ok'
    },
    sass: {
      Icon: scss,
      language: 'scss',
      status: 'ok'
    },
    markdown: {
      Icon: markdown,
      language: 'markdown',
      status: 'ok'
    }
  },

  'Backend/Servidores': {
    php: {
      Icon: php,
      language: 'php',
      status: 'ok'
    },
    python: {
      Icon: python,
      language: 'python',
      status: 'ok'
    },
    ruby: {
      Icon: ruby,
      language: 'ruby',
      status: 'ok'
    },
    go: {
      Icon: go,
      language: 'go',
      status: 'ok'
    },
    java: {
      Icon: java,
      language: 'java',
      status: 'ok'
    },
    c: {
      Icon: c,
      language: 'c',
      status: 'ok'
    },
    'c#': {
      Icon: csharp,
      language: 'csharp',
      status: 'ok'
    },
    'c++': {
      Icon: cpp,
      language: 'cpp',
      status: 'ok'
    },
    kotlin: {
      Icon: kotlin,
      language: 'kotlin',
      status: 'ok'
    },
    rust: {
      Icon: rust,
      language: 'rust',
      status: 'ok'
    }
  },

  'Base de Datos y Consulta': {
    sql: {
      Icon: sql,
      language: 'sql',
      status: 'ok'
    },
    graphql: {
      Icon: graphql,
      language: 'graphql',
      status: 'ok'
    },
    prisma: {
      Icon: prisma,
      language: 'graphql',
      status: 'dev'
    }
  },

  'Scripting y Automatización': {
    bash: {
      Icon: shell,
      language: 'shell',
      status: 'ok'
    },
    powershell: {
      Icon: powershell,
      language: 'powershell',
      status: 'ok'
    },
    bat: {
      Icon: bat,
      language: 'bat',
      status: 'ok'
    }
  },

  'Contenedores y DevOps': {
    dockerfile: {
      Icon: dockerfile,
      language: 'dockerfile',
      status: 'ok'
    }
  },

  'Lenguajes Funcionales': {
    clojure: {
      Icon: clojure,
      language: 'clojure',
      status: 'ok'
    }
  },

  'Lenguajes de Markup': {
    yaml: {
      Icon: yaml,
      language: 'yaml',
      status: 'ok'
    },
    json: {
      Icon: json,
      language: 'json',
      status: 'ok'
    }
  },

  'Desarrollo Móvil': {
    dart: {
      Icon: dart,
      language: 'dart',
      status: 'ok'
    },
    swift: {
      Icon: swift,
      language: 'swift',
      status: 'ok'
    }
  },

  'Otros Lenguajes': {
    coffeescript: {
      Icon: coffeescript,
      language: 'coffeescript',
      status: 'ok'
    },
    lua: {
      Icon: lua,
      language: 'lua',
      status: 'ok'
    },
    shell: {
      Icon: shell,
      language: 'shell',
      status: 'ok'
    }
  }
}

export default monacoLanguagesIcons
