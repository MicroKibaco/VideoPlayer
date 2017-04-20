/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
// ES5 的写法

/*var ReactNative = require('react-native');
var React = require('react');
var Component = React.Component;
var StyleSheet = ReactNative.StyleSheet;
var Text = ReactNative.Text;
var AppRegistry = ReactNative.AppRegistry;
var View = ReactNative.View;*/

/*var React = require('react-native');
 var {
 AppRegistry,
 StyleSheet,
 Text,
 View
 } = React;*/


// ES6 的写法
 import React, {Component} from 'react';
 import {
 AppRegistry,
 StyleSheet,
 Text,
 View
 } from 'react-native';

class VideoPlayer extends Component {


    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            times: 2,
            hit: true,
        };
    }

    /*      getDefaultProps() {

     console.log('Father: ' + 'getDefaultProps,获取默认属性值');
     };

       getInitialState() {
     console.log(
     'Father: ' + 'getInitialState,得到初始化的通知');

     return {
     times: 2,
     hit: false
     }

     };*/

    timesReset() {

        this.setState({});

    };

    WillHit() {

        this.setState({

                          hit: !this.state.hit,

                      });

    };

    render() {
        console.log('Father: ' + 'componentWillMount');

        return (
            <View style={styles.container}>
                {  this.state.hit ? <Child times={this.state.times}
                                           timesReset={this.timesReset.bind(this)}/> : null}


                <Text style={styles.welcome}
                      onpress={this.timesReset.bind(this)}>

                    老子说:心情好,就放你一马!!!

                </Text>

                <Text style={styles.instructions}
                      onpress={this.WillHit.bind(this)}>

                    到底揍不揍

                </Text>
                <Text style={styles.instructions}>

                    就揍了你{this.state.times}次而已!

                </Text>
                <Text style={styles.instructions}
                      onPress={this.timesPlus.bind(this)}>

                    不听话,再揍了你3次!

                </Text>
            </View>
        )
    };

    componentWillMount() {
        console.log("Father", "componentWillMount,即将安装...");
    };

    componentDidMount() {
        console.log("Father", "componentDidMount,安装完毕...");
    };

    static  shouldComponentUpdate() {
        console.log("Father", "shouldComponentUpdate,要不要更新...");
        return true;
    };

    componentWillUpdate() {
        console.log("Father", "componentWillUpdate,即将更新...");
    };

    componentDidUpdate() {
        console.log("Father", "componentDidUpdate,更新完毕...");
    };



    timesPlus() {
        console.log('VideoPlayer: ' + 'timesPlus');

        let times = this.state.times;
        times += 3;
        this.setState({
                          times: times
                      });
    }

}

var Child = React.createClass({

                                  getDefaultProps:function(){

                                      console.log('Child: ' + 'getDefaultProps');
                                  },

                                  getInitialState:function(){
                                      console.log('Child: ' + 'getInitialState');

                                      return {
                                          times: this.props.times
                                      }

                                  },
                                  timesReset:function(){

                                      this.props.timesReset();

                                  },
                                  timesPlus:function(){
                                      console.log('Child: ' + 'timesPlus');

                                      let times = this.state.times;
                                      times++;
                                      this.setState({
                                                        times: times
                                                    });
                                  },

                                  componentWillMount:function() {
                                      console.log("Child", "componentWillMount,即将安装...");
                                  },

                                  componentDidMount:function(){
                                      console.log("Child", "componentDidMount,安装完毕...");
                                  },
                                  componentWillReceiveProps:function(props)  {
                                      console.log(this.props);
                                      console.log("Child",
                                                  "componentWillReceiveProps,决定当前属性的变化...");
                                      this.setState({

                                                        times: props.times

                                                    });
                                      return true;
                                  },
                                  shouldComponentUpdate:function()  {
                                      console.log("Child", "shouldComponentUpdate,要不要更新...");
                                      return true;
                                  },

                                  componentWillUpdate:function() {
                                      console.log("Child", "componentWillUpdate,即将更新...");
                                  },

                                  componentDidUpdate:function() {
                                      console.log("Child", "componentDidUpdate,更新完毕...");
                                  },

                                  render:function(){

                                      return (
                                          <View style={styles.container}>

                                              <Text style={sonStyles.welcome}>

                                                  儿子说:有本事揍我啊!!!

                                              </Text>

                                              <Text style={sonStyles.instructions}
                                                    onpress={this.timesPlus}>

                                                  儿子说:你居然揍我{this.state.times}次

                                              </Text>
                                              <Text style={sonStyles.instructions}
                                                    onpress={this.timesReset}>

                                                  儿子说:信不信我亲亲你

                                              </Text>

                                          </View>
                                      );

                                  }

                              },
);

const styles = StyleSheet.create({
                                     container: {
                                         flex: 1,
                                         justifyContent: 'center',
                                         alignItems: 'center',
                                         backgroundColor: '#F5FCFF',
                                     },
                                     welcome: {
                                         fontSize: 20,
                                         textAlign: 'center',
                                         margin: 10,
                                     },
                                     instructions: {
                                         textAlign: 'center',
                                         color: '#333333',
                                         marginBottom: 5,
                                     },
                                 });
const sonStyles = StyleSheet.create({
                                     container: {
                                         flex: 1,
                                         justifyContent: 'center',
                                         alignItems: 'center',
                                         backgroundColor: '#F5FCFF',
                                     },
                                     welcome: {
                                         fontSize: 20,
                                         textAlign: 'center',
                                         margin: 10,
                                     },
                                     instructions: {
                                         textAlign: 'center',
                                         color: '#333333',
                                         marginBottom: 5,
                                     },
                                 });

AppRegistry.registerComponent('VideoPlayer', () => VideoPlayer);
