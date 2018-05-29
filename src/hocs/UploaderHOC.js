import React from 'react';

import Uploader from '../components/uploader/Uploader';

const UploaderHOC = dataProcessor => {
  return class EnhancedUploader extends React.PureComponent {
    handleFiles(files) {
      if (window.FileReader) {
        this.getAsText(files[0]);
      } else {
        alert('FileReader is not supported!');
      }
    }

    getAsText(fileToRead) {
      const reader = new FileReader();
      reader.readAsText(fileToRead);
      reader.onload = e => this.fileReadingFinished(e);
      reader.onerror = e => this.errorHandler(e);
    }

    async fileReadingFinished(event) {
      const resorts = await dataProcessor(event.target.result);
      this.props.uploadResorts(resorts);
    }

    errorHandler(event) {
      if (event.target.error.name === 'NotReadableError') {
        alert('Cannot read file!');
      }
    }

    render() {
      return <Uploader onUpload={files => this.handleFiles(files)} />;
    }
  };
};

export default UploaderHOC;
