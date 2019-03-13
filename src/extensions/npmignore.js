const path = require('path');
const { attachExtensions } = require('../utils');

module.exports = (toolbox) => {
  const ctx = toolbox.extensions.context.get();

  async function init(filesToIgnore = []) {
    const target = path.resolve(ctx.targetPath, '.npmignore');

    await toolbox.template.generate({
      template: 'npmignore.ejs',
      target,
      props: {
        filesToIgnore: filesToIgnore.filter((item) => !!item),
      },
    });
  }

  attachExtensions(toolbox, 'npmignore', {
    init,
  });
};
