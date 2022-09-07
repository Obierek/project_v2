import React from 'react';

function Home(props) {
    return (
        <div className="container">
            <div className="home">
                <div className="home__welcome">
                    <h1>Witaj,</h1>
                    <h2>na mojej pierwszej stronie.</h2>
                </div>
                <div className="home__intro">
                    <div className="intro__logo">
                        <p>Strona ta powstała w ramach projektu końcowego kursu</p>
                        <a className="logo-cl" href="https://coderslab.pl/"><img
                            src="https://lms.coderslab.pl/static/media/logoLMS.034b3f64.svg" alt="CodersLab logo"/></a>
                    </div>
                    <p>Zapraszam do zapoznania się z zakładką App, w której to jest zrobiona przeze mnie aplikacja Quiz
                        wykorzystująca JavaScript oraz React. Link z kodem jest dostępny w zakładce GitHub. Zapraszam
                        również do zapoznania się ze stroną About Me, w której również znajduje się do mnie
                        kontakt.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Home;