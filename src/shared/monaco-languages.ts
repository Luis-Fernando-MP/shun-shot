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

const languageIcons = {
  'Lenguajes Web': {
    html: {
      Icon: html,
      language: 'html'
    },
    css: {
      Icon: css,
      language: 'css'
    },
    javascript: {
      Icon: javascriptreact,
      language: 'javascript'
    },
    typescript: {
      Icon: typescript,
      language: 'typescript'
    },
    astro: {
      Icon: astro,
      language: 'astro'
    },
    pug: {
      Icon: pug,
      language: 'pug'
    },
    handlebars: {
      Icon: handlebars,
      language: 'handlebars'
    },
    sass: {
      Icon: scss,
      language: 'scss'
    },
    markdown: {
      Icon: markdown,
      language: 'markdown'
    }
  },

  'Lenguajes Backend/Servidores': {
    php: {
      Icon: php,
      language: 'php'
    },
    python: {
      Icon: python,
      language: 'python'
    },
    ruby: {
      Icon: ruby,
      language: 'ruby'
    },
    go: {
      Icon: go,
      language: 'go'
    },
    java: {
      Icon: java,
      language: 'java'
    },
    c: {
      Icon: c,
      language: 'c'
    },
    'c#': {
      Icon: csharp,
      language: 'csharp'
    },
    'c++': {
      Icon: cpp,
      language: 'cpp'
    },
    kotlin: {
      Icon: kotlin,
      language: 'kotlin'
    },
    rust: {
      Icon: rust,
      language: 'rust'
    }
  },

  'Base de Datos y Consulta': {
    sql: {
      Icon: sql,
      language: 'sql'
    },
    graphql: {
      Icon: graphql,
      language: 'graphql'
    },
    prisma: {
      Icon: prisma,
      language: 'graphql'
    }
  },

  'Scripting y Automatización': {
    bash: {
      Icon: shell,
      language: 'shell'
    },
    powershell: {
      Icon: powershell,
      language: 'powershell'
    },
    bat: {
      Icon: bat,
      language: 'bat'
    }
  },

  'Contenedores y DevOps': {
    dockerfile: {
      Icon: dockerfile,
      language: 'dockerfile'
    }
  },

  'Lenguajes Funcionales': {
    clojure: {
      Icon: clojure,
      language: 'clojure'
    }
  },

  'Lenguajes de Markup': {
    yaml: {
      Icon: yaml,
      language: 'yaml'
    },
    json: {
      Icon: json,
      language: 'json'
    }
  },

  'Desarrollo Móvil': {
    dart: {
      Icon: dart,
      language: 'dart'
    },
    swift: {
      Icon: swift,
      language: 'swift'
    }
  },

  'Otros Lenguajes': {
    coffeescript: {
      Icon: coffeescript,
      language: 'coffeescript'
    },
    lua: {
      Icon: lua,
      language: 'lua'
    },
    shell: {
      Icon: shell,
      language: 'shell'
    }
  }
}

export default languageIcons
