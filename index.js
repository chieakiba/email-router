var React = require('react');
var ReactDOM = require('react-dom');
var router = require('react-router');
var IndexRoute = router.IndexRoute;
var Router = router.Router;
var Route = router.Route;
var browserHistory = router.browserHistory;
var Link = router.Link;

var EMAILS = {
    inbox: {
        0: {
            id: 0,
            from: "billg@microsoft.com",
            to: "TeamWoz@Woz.org",
            title: "Possible work opportunity",
            content: "Dear Woz.  Fancy a job at Mister Softee?  Bill x"
        },
        1: {
            id: 1,
            from: "zuck@facebook.com",
            to: "TeamWoz@Woz.org",
            title: "Do you know PHP?",
            content: "Dear Woz.  We are in need of a PHP expert.  Fast.  Zuck x"
        }
    },
    spam: {
        0: {
            id: 0,
            from: "ChEaPFl1ghTZ@hotmail.com",
            to: "TeamWoz@Woz.org",
            title: "WaNt CHEEp FlitZ",
            content: "Theyre CheEp"
        },
        1: {
            id: 1,
            from: "NiKEAIRJordanZ@hotmail.com",
            to: "TeamWoz@Woz.org",
            title: "JorDanz For SAle",
            content: "Theyre REELY CheEp"
        }
    }
};

var Email = function(props) {

    return (
        <div>
            <h1>Here are your emails</h1>
            <h2>{props.children}</h2>
        </div>
    );
};

var EmailList = function(props) {
    var emails = Object.keys(props.emails).map(function(name) {
        var email = props.emails[name];
        return (
        <div>
            <div>{props.inbox}</div>
            <div>{props.spam}</div>
        </div>
        );
    });
};

var EmailListContainer = function() {
    return <EmailList emails={EMAILS} />;
};

var MessageList = function(props) {
    var email_messages = EMAILS[props.params.EmailList]

    var keys = Object.keys(email_messages);

    return (
        <div>
            <div>
                {keys.map(function(key) {
                    var email_message = email_messages[key];
                    return <div>{email_message.from} - {email_message.title}</div>;
                })}
            </div>
            <div>
                {props.children}
            </div>
        </div>
    );
};

var Message = function(props) {
    var email_message = props.params.email_message
    props.params.message_id

    EMAILS[props.params.email_message][props.params.message_id];

    return (
        <div>
            <Link to={'/email/' + props.children}>{props.children}</Link>
        </div>
    );
};

var EmailApp = function(props) {
    var emails = EMAILS;
    var messages = EMAILS[props.params.email_message];

    return (
        <div>
            <div emails={EMAILS}/>
            {props.children}
        </div>
    );
};

var routes = (
    <Router history={browserHistory}>
        <Route path='/' component={EmailApp}>
           <IndexRoute component={EmailListContainer}/>
            <Route path=':inbox' component={MessageList}/>
            <Route path=':spam' component={Message}/>
        </Route>
    </Router>
);

document.addEventListener('DOMContentLoaded', function () {
    ReactDOM.render(routes, document.getElementById('emails'));
})
