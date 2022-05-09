import { Accordion, Button, Fade } from 'react-bootstrap';

const Blogs = () => {
    return (
        <div className='w-75 mx-auto my-5 bg-light p-5'>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>1- Difference between javascript and nodejs</Accordion.Header>
                    <Accordion.Body>
                        1- Javascript is a high-level programming scripting language which is  the updated version of the ECMA script.JavaScript is a simple programming language that runs in any browser JavaScript Engine.

                        Whereas Node JS is an interpreter or running environment for a JavaScript programming language that holds many excesses, it requires libraries that can easily be accessed from JavaScript programming for better use.
                        <br />


                        2- JS is basically used on the client-side.Nodejs is mostly used on the server-side.
                        3- Javascript is capable enough to add HTML and play with the DOM.Nodejs does not have capability to add HTML tags.
                        <br />

                        4-Javascript is used in frontend development.Nodejs is used in server-side development.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>2- When should you use nodejs and when should you use mongodb?</Accordion.Header>
                    <Accordion.Body>
                        Node.js is best suited for real-time applications: online games, collaboration tools, chat rooms, or anything where what one user (or robot? or sensor?) does with the application needs to be seen by other users immediately, without a page refresh.
                        <br />
                        SQL. NoSQL databases like MongoDB are a good choice when your data is document-centric and doesn't fit well into the schema of a relational database, when you need to accommodate massive scale, when you are rapidly prototyping, and a few other use cases.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>3- Differences between sql and nosql databases.</Accordion.Header>
                    <Accordion.Body>
                        SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.
                        <br />
                        SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores.
                        <br />
                        SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

        </div>
    );
};

export default Blogs;