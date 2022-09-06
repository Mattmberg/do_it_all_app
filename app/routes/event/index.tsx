import type {
    LinksFunction,
} from "@remix-run/cloudflare";
import { Link, Form } from "@remix-run/react";
import stylesUrl from "~/styles/onlinestore.css";
import { useState, FormEvent, ChangeEvent } from "react";
import { myQuestions } from "~/components/data";
import { Questions } from "~/types";

export const links: LinksFunction = () => {
    return [{ rel: "stylesheet", href: stylesUrl, }];
};

export default function Index() {

    const [answer, updateAnswer] = useState<string>("");
    const [answerList, updateAnswerList] = useState<string[]>([]);
    const [step, setStep] = useState<number>(1);

    const handleSubmit = (e: FormEvent<HTMLInputElement>): void => {
        e.preventDefault();

        if (String(answer).trim().length) {
            updateAnswer("");
            updateAnswerList([...answerList, answer]);
            setStep(step + 1);
        }
    };
 
    const handleChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ): void => {
        const { value } = e.target;

        updateAnswer(value.trim());
    };


    const handleClick = (e: FormEvent<HTMLInputElement>): void => {
        handleSubmit(e);
    };


    return (
      <div className="container">
        <header>
        </header>
        <div className="content">
            <Form onSubmit={handleSubmit}>
                <input type="text" name="from_name" placeholder="Your Name" value={toSend.from_name} onChange={handleChange} required/>
                <input type="hidden" name="to_name" placeholder="To Me" value={toSend.to_name} onChange={handleChange}/>
                <textarea name="message" placeholder="Your Message" value={toSend.message} onChange={handleChange} style={{height:"200px"}} required/>
                <input type="text" name="reply_to" placeholder="Your Email" value={toSend.reply_to} onChange={handleChange} required/>
                <button type="submit">Submit</button>
            </Form>
        </div>
        <footer>
            <div className="footerLinks">
                <p>Facebook Twitter Instagram Icon Spots - Everything on this page is demo only.</p>
            </div>
        </footer>
      </div>
      );
  };


