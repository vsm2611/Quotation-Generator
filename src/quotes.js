import React, {useState, useEffect} from "react";
import "./style.css";

const QuoteGenerator = ({btnTxt, heading}) => {
    const [quoteText, setQuoteText] = useState("");
    const [author, setAuthor] = useState("");
    const [quote, setQuote] = useState(0);
   

    useEffect(() =>

    {
        const fetchApi = async () => {
            try{
            const url = `https://quote-garden.onrender.com/api/v3/quotes`;
            const response = await fetch(url);
            const resjson = await response.json();

            setQuoteText(resjson.data[quote].quoteText)
            setAuthor(resjson.data[quote].quoteAuthor)
            }
            catch (error){
                console.error("Error fetching data:",error);
            } 
        }   
        fetchApi();

    },[quote]);

    const increment = ()=> {
        if(quote >= 10){
            setQuote(0);
        }
        else{
            setQuote(quote + 1)
        }
        
    };

   
    return(
        <div className="main">
            <div className="main_child">
                <h2>{heading}</h2>
                <p>{quoteText}</p>
                <p className="author">{author}</p>
            </div>
            <button onClick={increment}>{btnTxt}</button>
        </div>
    )

}

export default QuoteGenerator;