const convertASTToString = (ast) => {
  if (ast.nodeType === 'element') {
    const tagName = ast.tagName;

    const attributes = ast.attributes
      .map((element) => {
        return `${element.name}="${element.value}"`;
      })
      .join(' ');
    if (ast.children) {
      const children = ast.children
        .map((element) => {
          return convertASTToString(element);
        })
        .join('\n');

      const outputString = `<${tagName} ${attributes}>${children}</${tagName}>`;
      return outputString;
    } else {
      const outputString = `<${tagName} ${attributes}></${tagName}>`;
      return outputString;
    }
  } else {
    const value = ast.value;
    const outputString = `${value}`;
    return outputString;
  }
};

export default convertASTToString;
