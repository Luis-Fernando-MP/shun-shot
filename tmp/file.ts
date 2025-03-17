const someJSCodeExample = ` 
  const CANCELATION_MESSAGE = {
    type: 'cancelation',
    msg: 'operation is manually canceled',
  };`

const someCSSCodeExample = ` 
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    -ms-overflow-style: none;
    scrollbar-width: none;
  }`

const someHTMLCodeExample = `
  <!DOCTYPE html>
  </html>`

const files = {
  'script.js': {
    name: 'script.js',
    language: 'javascript',
    value: someJSCodeExample
  },
  'style.css': {
    name: 'style.css',
    language: 'css',
    value: someCSSCodeExample
  },
  'index.html': {
    name: 'index.html',
    language: 'html',
    value: someHTMLCodeExample
  }
}

export default files
