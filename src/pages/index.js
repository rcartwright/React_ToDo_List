var React = require('react');
var Header = require('../components/header/header');
var MainContent = require('../components/main-content/mainContent');
var Footer = require('../components/footer/footer');


    var HomeApp = React.createClass({
      render: function(){
        return (
        	<div>
        <Header />
          <MainContent />
          <Footer />
          </div>
        );
      }
    });


    module.exports = HomeApp;