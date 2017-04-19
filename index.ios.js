/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
// ES6 的写法
var React = require('react-native');
var {
    AppRegistry,
    StyleSheet,
    Text,
    View
} = React;

var VideoPlayer = React.createClass({

                                        timesReset(){

                                            this.setState({

                                                              times: 0,

                                                          });

                                        },

                                        WillHit(){

                                            this.setState({

                                                              hit: !this.state.hit,

                                                          });

                                        },

                                        render(){
                                            console.log('Father: ' + 'componentWillMount');

                                            return (
                                                <View style={styles.container}>
                                                    {  this.state.hit ?
                                                       <Child times={this.state.times}
                                                              timesReset={this.timesReset}/> : null}


                                                    <Text style={styles.welcome}
                                                          onpress={this.timesReset}>

                                                        老子说:心情好,就放你一马!!!

                                                    </Text>

                                                    <Text style={styles.instructions}
                                                          onpress={this.WillHit}>

                                                        老子说:到底揍不揍

                                                    </Text>
                                                    <Text style={styles.instructions}>

                                                        老子说:就揍了你{this.state.times}次而已!

                                                    </Text>
                                                    <Text style={styles.instructions}
                                                          onPress={this.timesPlus}>

                                                        老子说:不听话,再揍了你3次!

                                                    </Text>
                                                </View>
                                            )
                                        },

                                        componentWillMount() {
                                            console.log("Father", "componentWillMount,即将安装...");
                                        },

                                        componentDidMount(){
                                            console.log("Father", "componentDidMount,安装完毕...");
                                        },

                                        shouldComponentUpdate()  {
                                            console.log("Father", "shouldComponentUpdate,要不要更新...");
                                            return true;
                                        },

                                        componentWillUpdate() {
                                            console.log("Father", "componentWillUpdate,即将更新...");
                                        },

                                        componentDidUpdate() {
                                            console.log("Father", "componentDidUpdate,更新完毕...");
                                        },

                                        getDefaultProps(){

                                            console.log('Father: ' + 'getDefaultProps,获取默认属性值');
                                        },

                                        getInitialNotification(){
                                            console.log(
                                                'Father: ' + 'getInitialNotification,得到初始化的通知');

                                            return {
                                                times: 2,
                                                hit: false
                                            }

                                        },

                                        timesPlus(){
                                            console.log('VideoPlayer: ' + 'timesPlus');

                                            let times = this.state.times;
                                            times += 3;
                                            this.setState({
                                                              times: times
                                                          });
                                        }

                                    },
);

var Child = React.createClass({

                                  getDefaultProps(){

                                      console.log('Child: ' + 'getDefaultProps');
                                  },

                                  getInitialNotification(){
                                      console.log('Child: ' + 'getInitialNotification');

                                      return {
                                          times: this.props.times
                                      }

                                  },
                                  timesReset(){

                                      this.props.timesReset();

                                  },
                                  timesPlus(){
                                      console.log('Child: ' + 'timesPlus');

                                      let times = this.state.times;
                                      times++;
                                      this.setState({
                                                        times: times
                                                    });
                                  },

                                  componentWillMount() {
                                      console.log("Child", "componentWillMount,即将安装...");
                                  },

                                  componentDidMount(){
                                      console.log("Child", "componentDidMount,安装完毕...");
                                  },
                                  componentWillReceiveProps(props)  {
                                      console.log(this.props);
                                      console.log("Child", "componentWillReceiveProps,决定当前属性的变化...");
                                      this.setState({

                                                        times: props.times

                                                    });
                                      return true;
                                  },
                                  shouldComponentUpdate()  {
                                      console.log("Child", "shouldComponentUpdate,要不要更新...");
                                      return true;
                                  },

                                  componentWillUpdate() {
                                      console.log("Child", "componentWillUpdate,即将更新...");
                                  },

                                  componentDidUpdate() {
                                      console.log("Child", "componentDidUpdate,更新完毕...");
                                  },

                                  render(){

                                      return (
                                          <View style={styles.container}>

                                              <Text style={styles.welcome}>

                                                  儿子说:有本事揍我啊!!!

                                              </Text>

                                              <Text style={styles.instructions}
                                                    onpress={this.timesPlus}>

                                                  儿子说:你居然揍我{this.state.times}次

                                              </Text>
                                              <Text style={styles.instructions}
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

AppRegistry.registerComponent('VideoPlayer', () => VideoPlayer);
