var React = require('react');
var ReactDOM = require('react-dom');
var Album = require('./Album');

var Demo = React.createClass({
  displayName: 'Demo',

  render: function () {
    var styles = {
      container: {},

      albumContainer: {
        marginTop: '30px',
      },

      albumTitle: {
        color: '#000',
        fontSize: '1.2em',
        textAlign: 'center',
        marginBottom: '15px',
      },
    };

    return (
      <div style={styles.container}>
        <div style={styles.albumContainer}>
          <div style={styles.albumTitle}>ReactTransitionHooks</div>
          <Album
            images={['img/1.jpg', 'img/2.jpg']}
          />
        </div>
        <div style={styles.albumContainer}>
          <div style={styles.albumTitle}>ReactTransitionGroup</div>
          <Album
            images={['img/1.jpg', 'img/2.jpg']}
            type="react-addons-transition-group"
          />
        </div>
      </div>
    );
  },
});

ReactDOM.render(
  <Demo />,
  document.getElementById('demo')
);