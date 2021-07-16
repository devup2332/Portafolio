import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import environments from "../../environments";
import { IMessage } from "../../models/message.model";
import axios from "axios";
import SnackBar from "../../components/SnackBar/SnackBar";
import Loading from "../../assets/loading.svg";

let timer: any;
const ContactPage = () => {
  //Useing react hook form
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  const [message, setMessage] = useState("");
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  //Sending message to server
  const sendEmail = async (message: IMessage) => {
    try {
      setLoading(true);
      const { data } = await axios.post(
        `${environments.backendUri}/api/emails/send`,
        message
      );

      //Handle snackbar and loading icon
      setLoading(false);
      reset();
      setOpen(true);
      setMessage(data?.message);
      timer ? clearTimeout(timer) : null;
      timer = setTimeout(() => {
        setOpen(false);
      }, 3000);
    } catch (err) {
      //Handler error
      setLoading(false);
      setOpen(true);
      setMessage("Server is not responding");
      timer ? clearTimeout(timer) : null;
      timer = setTimeout(() => {
        setOpen(false);
      }, 3000);
      throw new Error("Server is not responding");
    }
  };
  //Setting default theme
  useEffect(() => {
    const body = document.body;
    body.classList.add("default_theme");
    return () => {
      timer ? clearTimeout(timer) : null;
    };
  }, []);

  return (
    <div className="contact-page-container">
      <div className="contact-page-subcontainer">
        <h1 className="contact-page-title">CONTACT</h1>
        <form className="form" onSubmit={handleSubmit(sendEmail)}>
          <div className="input-controller">
            <input
              type="text"
              placeholder="Email"
              className={errors?.email ? "error" : ""}
              autoComplete="off"
              //Registering Email field
              {...register("email", {
                required: {
                  value: true,
                  message: "Email is required",
                },
                pattern: {
                  value: environments.emailPattern,
                  message: "Email is invalid",
                },
              })}
            />
            {errors?.email ? (
              <p className="message-error">{errors.email.message}</p>
            ) : null}
          </div>
          <div className="input-controller">
            <input
              type="text"
              placeholder="Phone"
              className={errors?.phone ? "error" : ""}
              //Registering Phone field
              {...register("phone", {
                required: {
                  value: true,
                  message: "Phone is required",
                },
                pattern: {
                  value: /^[0-9]+$/,
                  message: "Please enter a valid phone",
                },
              })}
            />

            {errors?.phone ? (
              <p className="message-error">{errors.phone.message}</p>
            ) : null}
          </div>
          <div className="input-controller">
            <input
              type="text"
              placeholder="Subject"
              className={errors?.subject ? "error" : ""}
              //Registering subject field
              {...register("subject", {
                required: {
                  value: true,
                  message: "Subject is required",
                },
              })}
            />

            {errors?.subject ? (
              <p className="message-error">{errors.subject.message}</p>
            ) : null}
          </div>
          <div className="textarea-controller">
            <textarea
              placeholder="Message"
              className={errors?.message ? "error" : ""}
              //Registering message field
              {...register("message", {
                required: {
                  value: true,
                  message: "Message is required",
                },
              })}
            ></textarea>

            {errors?.message ? (
              <p className="message-error">{errors.message.message}</p>
            ) : null}
          </div>
          <button type="submit">
            <Loading className={loading ? "loading" : ""}></Loading>{" "}
            <span>Contact Me</span>
          </button>
        </form>
      </div>

      <div className="right-section">
        <div className="right-section-body">
          <h2 className="right-section-title">Phone</h2>
          <p>+01 988 343 983</p>

          <h2 className="right-section-title">Email</h2>
          <p>devup2332@gmail.com</p>

          <h2 className="right-section-title">Lives in</h2>
          <p>Peru,Arequipa, Arequipa</p>
        </div>
      </div>

      <SnackBar message={message} open={open} setOpen={setOpen} timer={timer} />
    </div>
  );
};

export default ContactPage;
