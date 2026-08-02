import fs from 'fs';

/**
 * Reads the students database asynchronously.
 * @param {String} filePath the path of the database (CSV file).
 * @returns {Promise<Object>} an object of arrays of the firstname of
 * students per field, rejected with the error if the file is not accessible.
 */
export function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8', (error, data) => {
      if (error) {
        reject(error);
        return;
      }

      const fields = {};
      const lines = data.toString().split('\n').filter((line) => line.trim() !== '');

      // The first line only holds the column names.
      for (const line of lines.slice(1)) {
        const columns = line.split(',');
        const firstName = columns[0];
        const field = columns[columns.length - 1];

        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(firstName);
      }

      resolve(fields);
    });
  });
}

export default readDatabase;
