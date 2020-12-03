import React from 'react';

const FileUploader = () => {
  return (
    <form
      action={`${process.env.REACT_APP_FILE_SERVER_URL}/upload`}
      enctype="multipart/form-data"
      method="post"
    >
      <div className="form-group">
        <input type="file" className="form-control-file" name="uploaded_file" />
        <input type="submit" value="Upload" className="btn btn-default" />
      </div>
    </form>
  );
};

export default FileUploader;
