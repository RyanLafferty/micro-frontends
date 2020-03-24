import React from 'react';

// source: https://martinfowler.com/articles/micro-frontends.html#Run-timeIntegrationViaIframes
class MicroFrontend extends React.Component {
  componentDidMount() {
    const { name, host } = this.props;
    const mainAppScriptId = `micro-frontend-script-${name}-app`;

    if (document.getElementById(mainAppScriptId)) {
      this.renderMicroFrontend();
    } else {
      fetch(`${host}/asset-manifest.json`)
        .then(res => res.json())
        .then(manifest => {
          let id = 1;
          Object.keys(manifest).forEach(function (asset) {
            // debugging application
            console.log(`asset: ${asset}`);
            console.log(`path: ${manifest[asset]}`);

            this.appendAsset(host, name, asset, manifest[asset], id);
            id += 1;
          });
        });
    }
  }

  componentWillUnmount() {
    const { name } = this.props;

    // TODO: update this
    window[`unmount${name}`](`${name}-container`);
  }

  appendAsset(host, name, asset, path, id) {
    if(asset === 'app.js') {
      this.appendScript(host, path, name, 'app');
    } else if(asset.includes('.js')) {
      this.appendScript(host, path, name, id);
    } else if(asset.includes('.css')) {
      this.appendStyleSheet(host, path);
    }
  }

  appendScript = (host, path, name, id) => {
    const script = document.createElement('script');
    const scriptId = `micro-frontend-script-${name}-${id}`;
  
    // configure script
    script.id = scriptId;
    script.src = `${host}${path}`;
    script.onload = this.renderMicroFrontend;
  
    document.head.appendChild(script);
  }
  
  appendStyleSheet = (host, path) => {
    const stylesheet = document.createElement('link');
  
    // configure stylesheet
    stylesheet.rel = 'stylesheet';
    stylesheet.href = `${host}${path}`;
  
    document.head.appendChild(stylesheet);
  }

  renderMicroFrontend = () => {
    const { name } = this.props;

    // TODO: update this
    window[`render${name}`](`${name}-container`);
  };

  render() {
    const { name } = this.props;

    return (
      <main id={`${name}-container`} />
    );
  }
}

export default MicroFrontend;
