import React, { useState, useEffect } from "react";
import axios from 'axios';


const Search = () => {
    const [term, setTerm] = useState('wiki');
    const [results, setResults] = useState([]);
    
    useEffect(() => {
        const searchWiki = async () => {
            const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: "query",
                    list: "search",
                    origin: "*",
                    format: "json",
                    srsearch: term 
                },
            });

            setResults(data.query.search);
        };

        if (term && !results.length) {
            searchWiki();
        } else {
    //delayed request 
            const timeOutId = setTimeout(() => {
                if (term) {
                searchWiki();
                }
            }, 1000);
    //reset delay while writing
            return () => {
                clearTimeout(timeOutId);
            };
        };
    }, [term]);

    const renderedResults = results.map((result) => {
        return (
            <div key={result.pageid} className="item">
                <div className="ui right floated content">
                    <a className="ui button" href={`https://en.wikipedia.org?curid=${result.pageid}`}>Go</a> 
                </div>
                <div className="content">
                    <div className="header">
                        {result.title}
                    </div>
                    <div>
                        <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
                    </div>
                </div>
            </div>
        );
    });

    return (
        <div>
            <div className="ui form">
                <div className="fiels">
                    <label>Enter search term:</label>
                    <input 
                        value={term}
                        onChange={(e) => setTerm(e.target.value)}
                        className="input" />
                </div>
            </div>
            <div className="ui celled list">
                {renderedResults}
            </div>
        </div>
    );
}

export default Search;