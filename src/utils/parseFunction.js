function parseFunction(stringFunc) {
  let copyStringSplit = stringFunc.trim().split('=>');
  const indexStartName = copyStringSplit[0].indexOf(' ');
  copyStringSplit.splice(
    0,
    1,
    ...copyStringSplit[0].slice(indexStartName).split('=')
  );
  copyStringSplit = copyStringSplit.flat().map((item) => item.trim());

  if (copyStringSplit.length === 2) {
    const elem = copyStringSplit[1].replace('function', '');
    const index = elem.indexOf(')');
    copyStringSplit.splice(
      1,
      1,
      elem.slice(0, index + 1),
      elem.slice(index + 1)
    );
  }

  const [name, params, body] = copyStringSplit;
  return `function ${name} ${params}${
    body.includes('return') ? body : `{ return ${body} }`
  }`;
}

module.exports = { parseFunction };
