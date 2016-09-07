var React = require('react');
var ReactDOM = require('react-dom');
var router = require('react-router');
var IndexRoute = router.IndexRoute;
var Router = router.Router;
var Route = router.Route;
var hashHistory = router.hashHistory;
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

var App = function(props) {
  return (
    <div>
      <h1>Emails</h1>
      <h3>{props.children}</h3>
    </div>
  );
};

var Emails = function(props) {
  return (
    <div>
      <Link to={'/inbox/' + props.children}>
        {props.children}
      </Link>
    </div>
  );
};

var EmailList = function(props) {
  var emails = Object.keys(props.emails).map(function(name, index) {
    var email = props.emails[name];
    return (
      <li key={index}>
        <Emails name={name}>{name}</Emails>
      </li>
    );
  });
  return (
    <ul>
      {emails}
    </ul>
  );
};

var EmailListContainer = function() {
  return <EmailList emails={EMAILS}/>;
};

var App = function(props) {
  return (
    <div>
      <h1>Emails</h1>
      <div>{props.children}</div>
    </div>
  );
};

var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={EmailListContainer}/>
    </Route>
  </Router>
);

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(routes, document.getElementById('emails'));
})
