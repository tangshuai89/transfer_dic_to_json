import { readFile, writeFile } from 'fs';

readFile('./password.txt', 'utf8', (err, data) => {
  if (err) throw err;
  const password_array = data.split("\r\n");
  let final_password_string = 'export const passwordArray = [\r';
  final_password_string += password_array.map(item => {
    return '\t"' + item + '"';
  }).join(",\r");
  final_password_string += '\r];';
  writeFile('./password.js', final_password_string, 'utf8', (err) => {
    if (err) throw err;
  })
});