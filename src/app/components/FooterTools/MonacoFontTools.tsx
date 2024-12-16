import useMonacoTools from '@/shared/hooks/monaco-tools'
import { AArrowDownIcon, AArrowUpIcon, LetterText } from 'lucide-react'
import type { JSX } from 'react'

const MonacoFontTools = (): JSX.Element => {
  const { handleFontSize, handleFormatCode, fontSize } = useMonacoTools()

  return (
    <div>
      <button className='tools-action btn-tooltip' onClick={handleFormatCode}>
        <LetterText />
        <p className='tooltip top'>Formatear</p>
      </button>
      <button className='tools-action btn-tooltip' onClick={() => handleFontSize(fontSize - 1)}>
        <AArrowDownIcon />
        <p className='tooltip top'>Disminuir fuente</p>
      </button>
      <input
        min={12}
        max={30}
        className='tools-font'
        type='number'
        value={fontSize}
        onChange={e => handleFontSize(Number(e.target.value))}
      />
      <button className='tools-action btn-tooltip' onClick={() => handleFontSize(fontSize + 1)}>
        <AArrowUpIcon />
        <p className='tooltip top'>Aumentar fuente</p>
      </button>
    </div>
  )
}

export default MonacoFontTools
