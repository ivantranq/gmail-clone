import { Checkbox, IconButton } from "@mui/material";
import React from "react";
import "./EmailRow.css";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import { useNavigate } from "react-router-dom";

const EmailRow = ({ title, subject, description, time, id }) => {
    let history = useNavigate();


  return (
    <div className="email-row" onClick={() => history('/mail')}>
      <div className="email-row__options">
        <Checkbox />
        <IconButton>
          <StarBorderIcon />
        </IconButton>
        <IconButton>
          <LabelImportantIcon />
        </IconButton>
      </div>
      <h3 className="email-row__title">{title}</h3>
      <div className="email-row__message">
        <h4>
          {subject}
          <span className="email-row__description"> - {description}</span>
        </h4>
      </div>
      <p className="email-row__time">{time}</p>
    </div>
  );
};

export default EmailRow;
