import React from 'react';
import propTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import withMobileDialog from '@material-ui/core/withMobileDialog';
import DialogContentText from '@material-ui/core/DialogContentText';

const InvitationComponent = (props) => {
    const {
        open,
        accept,
        reject,
        invitation,
    } = props;
    return (
        <Dialog
          fullWidth
          open={open}
          onClose={reject}
          aria-labelledby="responsive-dialog-title"
        >
            <DialogTitle>Invitation Received</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    {`ID: ${invitation.from.id}`}
                    <br />
                    {`Name: ${invitation.from.username}`}
                    <br />
                    {`Init Number: ${invitation.number}`}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={reject} color="secondary">
                    Reject
                </Button>
                <Button onClick={accept} color="primary" autoFocus>
                    Accept
                </Button>
            </DialogActions>
        </Dialog>
    );
};

InvitationComponent.propTypes = {
    open: propTypes.bool.isRequired,
    accept: propTypes.func.isRequired,
    reject: propTypes.func.isRequired,
    invitation: propTypes.shape({}).isRequired,
};

export default withMobileDialog()(InvitationComponent);
