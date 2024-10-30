import Cpp from '@/shared/assets/cpp'
import CSharp from '@/shared/assets/csharp'
import CSS from '@/shared/assets/css'
import HTML5 from '@/shared/assets/html'
import Java from '@/shared/assets/java'
import JavaScript from '@/shared/assets/javascript'
import JSONSchema from '@/shared/assets/json'
import Markdown from '@/shared/assets/markdown'
import MicrosoftSQLServer from '@/shared/assets/mssql'
import MySQL from '@/shared/assets/mysql'
import Php from '@/shared/assets/php'
import PostgreSQL from '@/shared/assets/postgresql'
import Python from '@/shared/assets/python'
import React from '@/shared/assets/react'
import Rust from '@/shared/assets/rust'
import Sass from '@/shared/assets/sass'
import SQLite from '@/shared/assets/sqlite'
import TypeScript from '@/shared/assets/typescript'
import {
  MSSQL,
  SQLite as SQLiteLan,
  MySQL as mysqlLan,
  PostgreSQL as pgLan,
  sql
} from '@codemirror/lang-sql'
import { langs } from '@uiw/codemirror-extensions-langs'

export type LanguagesType = keyof typeof codeLanguages

export const codeLanguages = {
  javascript: langs.javascript({ typescript: false, jsx: true }),
  typescript: langs.javascript({ typescript: true, jsx: false }),
  python: langs.python(),
  java: langs.java(),
  html: langs.html({ autoCloseTags: true, matchClosingTags: true }),
  css: langs.css(),
  cpp: langs.cpp(),
  json: langs.json(),
  markdown: langs.markdown(),
  php: langs.php(),
  rust: langs.rust(),
  sass: langs.sass(),
  csharp: langs.csharp(),
  react: langs.tsx(),

  MySQL: sql({ dialect: mysqlLan }),
  MSSQL: sql({ dialect: MSSQL }),
  SQLite: sql({ dialect: SQLiteLan }),
  postgreSQL: sql({ dialect: pgLan })
}

export const languagesData = {
  javascript: {
    svg: JavaScript,
    label: 'JavaScript',
    color: '#F7DF1E'
  },
  typescript: {
    svg: TypeScript,
    label: 'TypeScript',
    color: '#3178C6'
  },
  python: {
    svg: Python,
    label: 'Python',
    color: '#3776AB'
  },
  java: {
    svg: Java,
    label: 'Java',
    color: '#007396'
  },
  html: {
    svg: HTML5,
    label: 'HTML',
    color: '#E34F26'
  },
  css: {
    svg: CSS,
    label: 'CSS',
    color: '#1572B6'
  },
  cpp: {
    svg: Cpp,
    label: 'C++',
    color: '#00599C'
  },
  json: {
    svg: JSONSchema,
    label: 'JSON',
    color: '#292929'
  },
  markdown: {
    svg: Markdown,
    label: 'Markdown',
    color: '#000000'
  },
  php: {
    svg: Php,
    label: 'PHP',
    color: '#4F5D95'
  },
  rust: {
    svg: Rust,
    label: 'Rust',
    color: '#000000'
  },
  sass: {
    svg: Sass,
    label: 'Sass',
    color: '#CC6699'
  },
  csharp: {
    svg: CSharp,
    label: 'C#',
    color: '#239120'
  },
  react: {
    svg: React,
    label: 'React',
    color: '#61DAFB'
  },
  MySQL: {
    svg: MySQL,
    label: 'MySQL',
    color: '#4479A1'
  },
  MSSQL: {
    svg: MicrosoftSQLServer,
    label: 'MSSQL',
    color: '#A91D22'
  },
  SQLite: {
    svg: SQLite,
    label: 'SQLite',
    color: '#003B57'
  },
  postgreSQL: {
    svg: PostgreSQL,
    label: 'PostgreSQL',
    color: '#336791'
  }
}
