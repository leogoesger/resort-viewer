import React from 'react';
import {task} from 'folktale/concurrency/task';

import Uploader from '../components/uploader/Uploader';
import {navigateTo} from '../utils/helpers';

const UploaderHOC = dataProcessor => {
  return class EnhancedUploader extends React.PureComponent {
    handleFiles(files) {
      this.readCsvIntoStore(files[0])
        .run()
        .listen({
          onRejected: e => this.errorHandler(e),
          onResolved: content => this.props.uploadResorts(content),
        });
    }

    readCsvIntoStore(file) {
      return this._readFile(file)
        .chain(event => this._parseData(event))
        .chain(content => this._navigateTo('/attributeMap', content));
    }

    _readFile(fileToRead) {
      return task(res => {
        const reader = new FileReader();
        reader.readAsText(fileToRead);
        reader.onerror = e => res.reject(e);
        reader.onload = e => res.resolve(e);
      });
    }

    _parseData(event) {
      return task(res => {
        dataProcessor(event.target.result, (err, content) => {
          err ? res.reject(err) : res.resolve(content);
        });
      });
    }

    _navigateTo(location, content) {
      return task(res => {
        navigateTo(location);
        res.resolve(content);
      });
    }

    errorHandler(e) {
      alert('Cannot read file!'); //DANGER! Non-functional
    }

    render() {
      return <Uploader onUpload={files => this.handleFiles(files)} />;
    }
  };
};

export default UploaderHOC;
