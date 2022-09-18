
import { Questions, QuestionsList } from "~/types";

export function QuestionList({ id, question, validationType, options }: Questions) {

    if (validationType === 'text') {

    } else if (validationType === 'date') {

    } else if (validationType === 'number') {

    } else if (validationType === 'checkbox') {
    
    } else {

    }

    return (
        <>
            {question}
        </>
    );
};