import type {
    LinksFunction,
} from "@remix-run/cloudflare";
import { Link, Form } from "@remix-run/react";
import { useState, FormEvent, ChangeEvent } from "react";
import stylesUrl from "~/styles/onlinestore.css";
import { QuestionList } from "~/components/questionlist";

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
        <Link to="/">Home</Link>
            <Link to="/demos">My Website Demos</Link>
            <Link to="/event">Home</Link>
            <Link to="/event/registration">Registration</Link>
            <Link to="/event/streams">Streams</Link>
            <Link to="/event/features">Features</Link>
            <Link to="/event/guests">Special Guests</Link>
            <Link to="/event/expohall">Exposition Hall</Link>
            <Link to="/event/schedule">Schedule</Link>
            <Link to="/event/travel">Hotel & Travel</Link>
            <Link to="/event/info">Show Information</Link>
            <Link to="/event/health">Health & Safety</Link>
            <Link to="/event/merchandise">Merchandise</Link>
        </header>
        <div className="content">
        <h1>Registration</h1>
        <QuestionList />
      {answerList.length >= questionList.length && (
        <div>
          <Title fontSize={24} label={subTitle} />
          {answerList.map((answer, k) => {
            return (
              <div key={k}>
                <Title fontSize={18} label={questionList[k]} />
                <div>
                  <i>{answer}</i>
                </div>
              </div>
            );
          })}
        </div>
      )}
      {answerList.length < questionList.length && (
        <form onSubmit={handleSubmit}>
          <Title fontSize={24} label={`Question ${step}`} />
          <div>{questionList[step - 1] || ""}</div>
          <TextInput type="text" value={answer} change={handleChange} />

          <Button
            type="submit"
            click={handleClick}
            label="Next"
            disabled={!answer.length}
          />
        </form>
      )}
        </div>
        <footer>
            <div className="footerLinks">
                <p>Facebook Twitter Instagram Icon Spots - Everything on this page is demo only.</p>
            </div>
        </footer>
      </div>
      );
  };
