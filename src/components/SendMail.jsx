import React from "react";
import "./SendMail.css";
import CloseIcon from "@mui/icons-material/Close";
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { closeSendMessage } from "../features/mailSlice";
import { db } from "../firebase.js";
import firebase from "firebase/compat/app";

const SendMail = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (formData) => {
    console.log(formData);
    db.collection("emails").add({
      to: formData.to,
      subject: formData.subject,
      message: formData.message,
      timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    dispatch(closeSendMessage());
  };

  return (
    <div className="send-mail">
      <div className="send-mail__header">
        <h3>New Message</h3>
        <CloseIcon
          className="send-mail__close"
          onClick={() => dispatch(closeSendMessage())}
        />
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          name="to"
          placeholder="To"
          type="email"
          {...register("to", { required: true })}
        />
        {errors.to && <p className="send-mail__error">To is required</p>}
        <input
          name="subject"
          placeholder="Subject"
          type="text"
          {...register("subject", { required: true })}
        />
        {errors.subject && (
          <p className="send-mail__error">Subject is required</p>
        )}
        <input
          name="message"
          placeholder="Message..."
          className="send-mail__message"
          type="text"
          {...register("message", { required: true })}
        />
        {errors.message && (
          <p className="send-mail__error">Message is required</p>
        )}
        <div className="send-mail__options">
          <Button
            className="send-mail__send"
            variant="contained"
            color="primary"
            type="submit"
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SendMail;
