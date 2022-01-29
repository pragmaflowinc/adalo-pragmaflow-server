import React, { useState } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  ClickAwayListener,
  Fab,
  FormHelperText,
  Grow,
  MenuItem,
  Popper,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import MessageIcon from "@mui/icons-material/Message";
import { useSubmitFeedbackMutation } from "../generated/graphql";

const typeList: string[] = [
  "General Question",
  "Support",
  "Component Bug",
  "Component Suggestion",
  "Resource Center Suggestion",
  "Thank You",
  "Something else",
];

export function FeedbackButton() {
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const [showFeedbackError, setShowFeedbackError] = useState<boolean>(false);
  const [submitFeedback] = useSubmitFeedbackMutation();
  const [feedback, setFeedback] = useState("");
  const [type, setType] = useState<string | undefined>();
  const [email, setEmail] = useState<string | undefined>();
  const feedbackAnchorRef = React.useRef<HTMLButtonElement>(null);

  const SendFeedback = () => {
    let tempFeedback = feedback.trim();
    if (!tempFeedback) {
      setShowFeedbackError(true);
      return;
    }

    submitFeedback({
      variables: {
        content: feedback,
        subject: type,
        email,
      },
    });
    setFeedback("");
    setType(undefined);
    setEmail(undefined);
    setShowFeedback(false);
    setShowSnackbar(true);
    setShowFeedbackError(false);
  };
  const handleFeedbackClose = (event?: MouseEvent | TouchEvent) => {
    if (
      event &&
      feedbackAnchorRef.current &&
      feedbackAnchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setFeedback("");
    setType(undefined);
    setEmail(undefined);
    setShowFeedbackError(false);
    setShowFeedback(false);
  };

  const renderFeedback = (
    <ClickAwayListener
      onClickAway={handleFeedbackClose}
      mouseEvent="onMouseDown"
      touchEvent="onTouchStart"
    >
      <Popper
        style={{ zIndex: 1300, minWidth: "450px" }}
        open={showFeedback}
        anchorEl={feedbackAnchorRef.current}
        role={undefined}
        transition
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom" ? "center top" : "center bottom",
            }}
          >
            <Card style={{ marginRight: 10, marginBottom: 10 }}>
              <CardContent>
                <Typography variant="h2" gutterBottom>
                  Leave Feedback
                </Typography>
                <TextField
                  label="What's your email (optional)?"
                  fullWidth
                  value={email}
                  onChange={(e) => {
                    const newEmail = e.target.value as string;
                    setEmail(newEmail);
                  }}
                  style={{ margin: "0 0 1em" }}
                ></TextField>
                <TextField
                  select
                  label="What would you like to talk about (optional)?"
                  fullWidth
                  value={type}
                  style={{ margin: "0 0 1em" }}
                  onChange={(e) => {
                    const type = e.target.value as string;
                    setType(type);
                  }}
                >
                  {typeList.map((item: string, index: number) => {
                    return (
                      <MenuItem value={item} key={index}>
                        {item}
                      </MenuItem>
                    );
                  })}
                </TextField>
                <TextField
                  multiline
                  fullWidth
                  error={showFeedbackError}
                  rows={6}
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  variant="outlined"
                  style={{ margin: "1em 0 0" }}
                />
                {showFeedbackError && (
                  <FormHelperText error={true}>
                    You must provide a comment before submitting feedback.
                  </FormHelperText>
                )}
              </CardContent>
              <CardActions>
                <Button
                  onClick={SendFeedback}
                  variant="contained"
                  color="primary"
                >
                  Send
                </Button>
              </CardActions>
            </Card>
          </Grow>
        )}
      </Popper>
    </ClickAwayListener>
  );

  const snackbar = (
    <Snackbar
      style={{
        bottom: 30,
      }}
      open={showSnackbar}
      autoHideDuration={3500}
      onClose={() => setShowSnackbar(false)}
      message="Thanks for submitting feedback!"
    />
  );

  const handleOpenFeedback = () => {
    setShowFeedback((v) => !v);

    if (showFeedback) {
      handleFeedbackClose();
    }
  };

  return (
    <>
      <Fab
        sx={{ position: "fixed", bottom: 10, right: 10 }}
        color="primary"
        aria-label="message"
        ref={feedbackAnchorRef}
        onClick={handleOpenFeedback}
      >
        <MessageIcon />
      </Fab>
      {renderFeedback}
      {snackbar}
    </>
  );
}
