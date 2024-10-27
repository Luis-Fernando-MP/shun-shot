'use client'

import { css } from '@codemirror/lang-css'
import { html } from '@codemirror/lang-html'
import { java } from '@codemirror/lang-java'
import { javascript } from '@codemirror/lang-javascript'
import { python } from '@codemirror/lang-python'
import { EditorView } from '@codemirror/view'
import { githubDark } from '@uiw/codemirror-theme-github'
import CodeMirror from '@uiw/react-codemirror'
import html2canvas from 'html2canvas'
import React, { useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import {
  FaCode,
  FaCompress,
  FaCopy,
  FaDownload,
  FaExpand,
  FaFile,
  FaFont,
  FaList,
  FaTable
} from 'react-icons/fa'

const languageExtensions = {
  javascript: javascript(),
  python: python(),
  java: java(),
  html: html(),
  css: css(),
  plaintext: []
}

export default function CodeEditor() {
  const [code, setCode] = useState('// Escribe tu código aquí')
  const [language, setLanguage] = useState('javascript')
  const [fileName, setFileName] = useState('ejemplo.js')
  const [fontSize, setFontSize] = useState(14)
  const [showLineNumbers, setShowLineNumbers] = useState(true)
  const [isFullscreen, setIsFullscreen] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      const editor = document.querySelector('.cm-editor')
      if (editor) {
        editor.style.height = `${window.innerHeight - 60}px`
      }
    }

    window.addEventListener('resize', handleResize)
    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const detectLanguage = content => {
    const languagePatterns = {
      javascript: /\b(const|let|var|function)\b/,
      python: /\b(def|import|from|if __name__ == "__main__")\b/,
      java: /\b(public|class|void|static)\b/,
      html: /<\/?[a-z][\s\S]*>/i,
      css: /[{}:;]/
    }

    for (const [lang, pattern] of Object.entries(languagePatterns)) {
      if (pattern.test(content)) {
        return lang
      }
    }
    return 'plaintext'
  }

  const handleCodeChange = value => {
    setCode(value)
    const detectedLang = detectLanguage(value)
    setLanguage(detectedLang)
    setFileName(`ejemplo.${detectedLang === 'plaintext' ? 'txt' : detectedLang}`)
  }

  const formatCode = () => {
    // Implementar la lógica de formateo aquí
    toast.success('Código formateado')
  }

  const downloadImage = async () => {
    const element = document.querySelector('.cm-editor')
    if (element) {
      const canvas = await html2canvas(element)
      const link = document.createElement('a')
      link.download = `${fileName}.png`
      link.href = canvas.toDataURL()
      link.click()
      toast.success('Imagen descargada')
    }
  }

  const copyCode = format => {
    const style = `
      background-color: #000000;
      color: #ffffff;
      font-family: 'Consolas', monospace;
      font-size: ${fontSize}px;
      line-height: 1.5;
    `

    const styledCode = code
      .split('\n')
      .map((line, index) => {
        const lineNumber = showLineNumbers
          ? `<span style="color: #858585; margin-right: 10px;">${index + 1}</span>`
          : ''
        return `<div>${lineNumber}${line}</div>`
      })
      .join('')

    const formattedCode =
      format === 'word'
        ? `<pre style="${style}">${styledCode}</pre>`
        : `<table style="border-collapse: collapse; width: 100%;"><tr><td style="border: 1px solid #ddd; padding: 8px; ${style}">${styledCode}</td></tr></table>`

    const blob = new Blob([formattedCode], { type: 'text/html' })
    const clipboardItem = new ClipboardItem({ 'text/html': blob })
    navigator.clipboard.write([clipboardItem])
    toast.success(`Código copiado en formato ${format}`)
  }

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen()
    } else {
      document.exitFullscreen()
    }
    setIsFullscreen(!isFullscreen)
  }

  return (
    <div className='flex h-screen flex-col bg-gradient-to-br from-gray-900 to-black text-white'>
      <Toaster />
      <div className='flex items-center justify-between bg-black p-4 shadow-md'>
        <div className='flex items-center space-x-2'>
          <div className='relative'>
            <FaFile className='absolute left-2 top-1/2 -translate-y-1/2 text-gray-400' />
            <input
              type='text'
              value={fileName}
              onChange={e => setFileName(e.target.value)}
              className='rounded border border-gray-700 bg-gray-800 py-1 pl-8 pr-2 text-sm text-white'
              placeholder='Nombre del archivo'
            />
          </div>
          <div className='relative'>
            <FaFont className='absolute left-2 top-1/2 -translate-y-1/2 text-gray-400' />
            <input
              type='number'
              value={fontSize}
              onChange={e => setFontSize(Number(e.target.value))}
              className='w-16 rounded border border-gray-700 bg-gray-800 py-1 pl-8 pr-2 text-sm text-white'
              min='8'
              max='32'
            />
          </div>
        </div>
        <div className='flex items-center space-x-2'>
          {[
            { icon: FaCode, action: formatCode, tooltip: 'Formatear código' },
            { icon: FaDownload, action: downloadImage, tooltip: 'Descargar imagen' },
            { icon: FaCopy, action: () => copyCode('word'), tooltip: 'Copiar para Word' },
            { icon: FaTable, action: () => copyCode('table'), tooltip: 'Copiar como tabla' },
            {
              icon: FaList,
              action: () => setShowLineNumbers(!showLineNumbers),
              tooltip: 'Alternar números de línea'
            },
            {
              icon: isFullscreen ? FaCompress : FaExpand,
              action: toggleFullscreen,
              tooltip: 'Alternar pantalla completa'
            }
          ].map(({ icon: Icon, action, tooltip }, index) => (
            <button
              key={index}
              onClick={action}
              className='rounded bg-gray-800 p-2 transition-colors hover:bg-gray-700'
              title={tooltip}
            >
              <Icon className='text-white' />
            </button>
          ))}
        </div>
      </div>
      <div className='grow overflow-hidden'>
        <CodeMirror
          value={code}
          height='100%'
          theme={githubDark}
          extensions={languageExtensions[language]}
          onChange={handleCodeChange}
          basicSetup={{
            lineNumbers: showLineNumbers,
            foldGutter: false,
            dropCursor: false,
            allowMultipleSelections: false,
            indentOnInput: false
          }}
          editable={true}
          style={{ fontSize: `${fontSize}px` }}
        />
      </div>
    </div>
  )
}
