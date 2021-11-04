/* eslint-disable import/no-dynamic-require, security/detect-non-literal-require */

const requireStatic = file => {
  file = file.replace(/!/, '');

  let r = null;

  r = require(`../statics/${file}`);

  return (r || {}).default;
};

export default requireStatic;
