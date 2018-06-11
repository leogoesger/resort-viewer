import React from 'react';
import PropTypes from 'prop-types';
import {compose, setPropTypes, withHandlers, withState} from 'recompose';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';

const ImageDialog = ({
  buttonText,
  imageUrl,
  handleClickOpen,
  open,
  handleClose,
}) => (
  <div>
    <Button
      variant="raised"
      size="small"
      color="primary"
      onClick={handleClickOpen}
    >
      {buttonText}
    </Button>
    <Dialog open={open} onClose={handleClose} fullWidth={true} maxWidth={'md'}>
      <img src={imageUrl} alt="pic" style={{width: '100%', padding: '0px'}} />
      <DialogActions>
        <Button onClick={handleClose} color="primary" autoFocus>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  </div>
);

const enhancer = compose(
  setPropTypes({
    buttonText: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
  }),
  withState('open', 'setDialogStatus', false),
  withHandlers({
    handleClickOpen: ({setDialogStatus}) => () => setDialogStatus(true),
    handleClose: ({setDialogStatus}) => () => setDialogStatus(false),
  })
);
export default enhancer(ImageDialog);
