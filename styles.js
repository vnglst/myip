module.exports = () => `
  html, body {
    height: 100%;
  }
  body {
    margin: 0;
  }
  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
  input, select {
    max-width: 200px;
    font-size: 16px;
    padding: 14px 24px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }

  button {
    margin: 0px 0px 0 10px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    background-color: transparent;
    box-sizing: border-box;
  }
  .icon {
    width: 1em;
    height: 1em;
  }
  .icon-clippy {
    font-size: 32px;
  }
`
