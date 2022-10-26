import React from 'react';

function About() {
    return (
        <div className="container">
            <div className="app">
                <div id="icons" className="icons-grid">
                    <div className="icons-grid__html" />
                    <div className="icons-grid__css" />
                    <div className="icons-grid__sass" />
                    <div className="icons-grid__js" />
                    <div className="icons-grid__es6" />
                    <div className="icons-grid__react" />
                    <div className="icons-grid__github" />
                    <div className="icons-grid__webpack" />
                    <div className="icons-grid__ws" />
                </div>
                <div className="text">
                    <p>
                        Cześć, Mam na imię Marcin. Jestem świeżo upieczonym front-end developer-em. We wrześniu 2022r.
                        ukończyłem kurs JavaScript Developer w Coders Lab. Poznałem powyższe technologie, które
                        zastosowałem w swoim pierwszym projekcie.
                    </p>
                    <p>
                        Obecnie jestem otwarty na propozycje współpracy i zapraszam do kontaktu :
                    </p>
                    <p>email: <a href="mailto:marcobie@wp.pl">marcobie@wp.pl</a></p>
                    <p>tel.: +48 513 625 539</p>

                </div>
            </div>

        </div>
    );
}

export default About;