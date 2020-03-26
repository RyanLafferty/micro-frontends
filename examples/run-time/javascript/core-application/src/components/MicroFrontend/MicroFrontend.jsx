import React from 'react';

// source: https://martinfowler.com/articles/micro-frontends.html#Run-timeIntegrationViaIframes
class MicroFrontend extends React.Component {
  componentDidMount() {
    const { name } = this.props;
    const mainAppScriptId = `micro-frontend-script-${name}-main`;

    // check if assets have been loaded
    if (!document.getElementById(mainAppScriptId)) {
      this.appendAssets();
    }
  }

  componentWillUnmount() {
    // TODO: Cleanup DOM
  }

  appendAssets = async () => {
    const { name, host } = this.props;
    let id = 1;

    // fetch manifest
    const response = await fetch(`${host}asset-manifest.json`);
    const manifest = await response.json();

    // append assets
    Object.keys(manifest).forEach((asset) => {
      this.appendAsset(host, name, asset, manifest[asset], id);
      id += 1;
    });
  }

  appendAsset(host, name, asset, path, id) {
    if(asset === 'app.js') {
      this.appendScript(host, path, name, 'main');
    } else if(asset.includes('.js')) {
      this.appendScript(host, path, name, id);
    } else if(asset.includes('.css')) {
      this.appendStyleSheet(host, path);
    }
  }

  appendScript = (host, path, name, id) => {
    const script = document.createElement('script');
  
    // configure script
    script.id = `micro-frontend-script-${name}-${id}`;
    script.src = `${host}${path}`;
  
    document.head.appendChild(script);
  }
  
  appendStyleSheet = (host, path) => {
    const stylesheet = document.createElement('link');
  
    // configure stylesheet
    stylesheet.rel = 'stylesheet';
    stylesheet.href = `${host}${path}`;
  
    document.head.appendChild(stylesheet);
  }

  render() {
    const { name } = this.props;

    return (
      <div id={name} />
    );
  }
}

export default MicroFrontend;
