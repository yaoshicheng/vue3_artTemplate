import fs from 'fs';
import path from 'path';
import art from 'art-template';

const { compile } = art;

export default function artTemplatePlugin() {
  return {
    name: 'vite-plugin-art-template',
    transform(code, id) {
      if (!id.endsWith('.art')) return;

      // Read the template file content
      const templateContent = fs.readFileSync(id, 'utf-8');

      // Compile the template to a render function
      const compiledFunction = compile(templateContent);

      // Return JavaScript code that exports the compiled function
      return {
        code: `export default ${compiledFunction.toString()};`,
        map: null, // source map (optional)
      };
    },
  };
}