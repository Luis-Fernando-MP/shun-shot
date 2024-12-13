const someJSCodeExample = `import { themes } from 'code-scape'

const platformName = 'Code Scape';
let userWelcomeMessage = \`👋 ¡Hola! Bienvenido a \${platformName}.\`;

function showWelcomeMessage() {
  console.log(userWelcomeMessage);
  console.log('✨ Funcionalidades principales:');
  console.log('➡️ Captura y ajusta tu código como imagen.');
  console.log('➡️ Personalización avanzada de temas y diseño.');
  console.log('➡️ Comparte y exporta tu código con estilo.');
}

function listAvailableThemes() {
  console.log('🎨 Temas disponibles:');
  themes.forEach((theme, index) => {
    console.log(\`🖌️ \${index + 1}. \${theme}\`);
  });
}

showWelcomeMessage();
listAvailableThemes();

  // ✨ Explora y diviértete`

const someCSSCodeExample = `/* Estilos personalizados de Code Scape */
  body {
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
    color: #333;
  }

  h1 {
    color: #007acc;
    text-align: center;
  }

  ul {
    list-style-type: none;
  }

  ul li::before {
    content: "➡️ ";
    color: #ff6347;
  }`

const someHTMLCodeExample = `<!DOCTYPE html>
  <html lang="es">
  <head>
    <meta charset="UTF-8">
    <title>Bienvenido a Code Scape</title>
  </head>
  <body>
    <h1>👋 ¡Hola! Bienvenido a Code Scape</h1>
    <p>✨ Funcionalidades principales:</p>
    <ul>
      <li>Captura y ajusta tu código como imagen.</li>
      <li>Personalización avanzada de temas y diseño.</li>
      <li>Comparte y exporta tu código con estilo.</li>
    </ul>
  </body>
  </html>`

const exampleCode = {
  javascript: {
    language: 'javascript',
    code: someJSCodeExample
  },
  css: {
    language: 'css',
    code: someCSSCodeExample
  },
  html: {
    language: 'html',
    code: someHTMLCodeExample
  }
}

export default exampleCode
