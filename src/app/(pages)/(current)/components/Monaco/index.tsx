'use client'

import Editor, { useMonaco } from '@monaco-editor/react'
import { useRef, useState } from 'react'

import { useMonacoStore } from '../../store/monaco-store'
import { useThemeMonacoStore } from '../../store/monaco-theme'
import exampleCode from './exampleCode'
import './style.scss'

const minHeight = 200

const bg = (bg: string | undefined) => ({ style: { backgroundColor: bg } })

const Monaco = () => {
  const { fontSize, setRefIde, language, fileName, setFileName, fontFamily } = useMonacoStore()
  const monaco = useMonaco()
  const theme = useThemeMonacoStore(s => s.theme)
  const $ide = useRef<HTMLElement>(null)

  const [editorHeight, setEditorHeight] = useState(minHeight)

  const handleMountIde = (editor: any) => {
    ;($ide as any).current = editor
    setRefIde(editor)
    const contentHeight = editor.getContentHeight() > 100 ? editor.getContentHeight() : minHeight
    setEditorHeight(contentHeight)

    monaco?.languages.register({ id: 'prisma' })

    monaco?.languages.setMonarchTokensProvider('prisma', {
      tokenizer: {
        root: [
          // Functions like autoincrement(), now(), etc.
          [/\b(?:autoincrement|now|uuid|cuid|dbgenerated|env)\b\(\)/, 'function'],

          // Prisma-specific directives
          [/@\b(?:relation|id|default|unique|map|updatedAt)\b/, 'annotation'],

          // Built-in types and modifiers
          [
            /\b(?:Int|String|Boolean|DateTime|Float|Json|Bytes|BigInt|Decimal|enum|model)\b/,
            'keyword'
          ],
          [/!/, 'operator'], // Non-nullable fields

          // Fields and Types
          [/\b[A-Z][a-zA-Z0-9_]*\b/, 'type.identifier'], // Type names
          [
            /\b[a-z_][a-zA-Z0-9_]*\b(?=\s+\b(?:Int|String|Boolean|DateTime|Float|Json|Bytes|BigInt|Decimal)\b)/,
            'variable'
          ], // Field names

          // Field names that end with Id or IDs correctly like userpostId
          [/\b(?:\w*Id|\w*IDs)\b/, 'variable.id'],

          // Comments
          [/#.*$/, 'comment'], // Hash style comments
          [/\/\/.*$/, 'comment'], // Double slash comments

          // Strings
          [/"(?:[^"\\]|\\.)*"/, 'string'], // Double quoted strings
          [/'(?:[^'\\]|\\.)*'/, 'string'], // Single quoted strings

          // Operators and Punctuation
          [/[\[\]{}().,;]+/, 'delimiter'], // Brackets, delimiters, semicolon

          // Annotations
          [/@\w+/, 'annotation'], // Other annotations like @map, @unique

          // Numeric Constants
          [/\b\d+\b/, 'number']
        ]
      }
    })
  }

  const handleChange = () => {
    const newHeight = ($ide?.current as any)?.getModel().getLineCount() * 19
    setEditorHeight(Math.max(newHeight, minHeight))
  }

  return (
    <section className='monaco' {...bg(theme?.colors['editor.background'] ?? '')}>
      <header className='monaco-header'>
        <div className='monaco-header__buttons'>
          <span className='red circle'></span>
          <span className='yellow circle'></span>
          <span className='green circle'></span>
        </div>
        <input
          type='text'
          value={fileName}
          onChange={e => setFileName(e.target.value)}
          style={{ color: theme?.colors['editor.foreground'] ?? '' }}
        />
      </header>

      <Editor
        loading={<h5>Loading....</h5>}
        className={`monaco-editor`}
        height={editorHeight ?? minHeight}
        defaultLanguage={language}
        onChange={handleChange}
        defaultValue={(exampleCode as any)[language]?.code ?? ''}
        theme={'vs-dark'}
        onMount={handleMountIde}
        options={{
          automaticLayout: true,
          fontFamily,
          fontSize,
          lineHeight: 19
        }}
      />
    </section>
  )
}

export default Monaco
