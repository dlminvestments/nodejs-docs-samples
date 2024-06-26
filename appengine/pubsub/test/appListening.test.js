const waitPort = require('wait-port');
const {expect} = require('chai');
const PORT = process.env.PORT || 8080;
const childProcess = require('child_process');
const path = require('path');
const appPath = path.join(__dirname, '../app.js');

describe('server listening', () => {
  it('should be listening', async () => {
    await childProcess.exec(`node ${appPath}`);
    const isOpen = await waitPort({port: PORT});
    
  });
});
