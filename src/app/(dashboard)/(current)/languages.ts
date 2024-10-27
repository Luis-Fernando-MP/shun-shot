import { Cassandra, MSSQL, MySQL, PostgreSQL, SQLite, sql } from '@codemirror/lang-sql'
import { langs } from '@uiw/codemirror-extensions-langs'

export type LanguagesType = keyof typeof LANGUAGES

export const LANGUAGES = {
  javascript: langs.javascript({ typescript: false, jsx: false }),
  typescript: langs.javascript({ typescript: true, jsx: false }),
  python: langs.python(),
  java: langs.java(),
  html: langs.html({ autoCloseTags: true, matchClosingTags: true }),
  css: langs.css(),
  cpp: langs.cpp(),
  json: langs.json(),
  lezer: langs.lezer(),
  markdown: langs.markdown(),
  php: langs.php(),
  rust: langs.rust(),
  xml: langs.xml({ autoCloseTags: true }),
  less: langs.less(),
  sass: langs.sass(),
  clojure: langs.clojure(),
  csharp: langs.csharp(),
  'js-react': langs.jsx(),
  'ts-react': langs.tsx(),

  MySQL: sql({ dialect: MySQL }),
  MSSQL: sql({ dialect: MSSQL }),
  Cassandra: sql({ dialect: Cassandra }),
  SQLite: sql({ dialect: SQLite }),
  postgreSQL: sql({ dialect: PostgreSQL }),
  sql: sql({ dialect: MySQL })
}
