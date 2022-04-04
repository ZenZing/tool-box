import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { sayHello } from '../actions/homeActions';
import './Home.less';

const Home = (props) => {

  useEffect(() => {
    props.sayHello();
  });

  return (
    <div id="home">
      <ul>
        <li><Link to='/calculator'>计算器</Link></li>
      </ul>
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
