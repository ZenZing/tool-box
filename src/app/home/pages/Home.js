import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Hello from '../components/Hello';
import { sayHello } from '../actions/homeActions';

const Home = (props) => {

  useEffect(() => {
    props.sayHello();
  });

  return (
    <div id="home">
      <h1>Home</h1>
      <ul>
        <li><Link to='/'>Home</Link></li>
      </ul>
      <Hello hello={props.helloMessage}/>
    </div>
  );
};

const mapStateToProps = ({ homeReducer }) => ({
  helloMessage: homeReducer.helloMessage
});

const mapDispatchToProps = dispatch => ({
  sayHello: () => dispatch(sayHello())
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);
export const TestHome = Home;
