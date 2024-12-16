import './style.scss'

interface IBoldText {
  text: string
}

const BoldText = ({ text }: IBoldText) => {
  const [normal, bold] = text.toString().split('/')
  return (
    <div className='boldText'>
      <h3>{normal ?? ''}</h3>
      <h2>{bold ?? ''}</h2>
    </div>
  )
}

export default BoldText
