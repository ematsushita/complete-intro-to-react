import React from 'react';
import { render } from 'react-dom';


const MyTitle = function(props) {
  return React.createElement('div', null,
  React.createElement('h1', {style: {color: props.color}}, props.title))
};

const MyFirstComponent = function() {
  return React.createElement('div', null,
  React.createElement(MyTitle, { title: 'Game of Thrones', color: 'YellowGreen'}),
  React.createElement(MyTitle, { title: 'Stranger Things', color: 'GreenYellow'}),
  React.createElement(MyTitle, { title: 'Big Little Lies', color: 'LimeGreen'}),
  React.createElement(MyTitle, { title: 'Killing Eve', color: 'Lime'}),
  )
}

render(React.createElement(MyFirstComponent), document.getElementById('app'));
