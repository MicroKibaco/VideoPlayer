/**
 * 解构赋值
 */
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

/**
 * JSX语法
 */
export default class VideoPlayer extends Component {

    constructor(props) {

        super(props);
        this.state = {times: 0}

    }

    timesPlus() {
        let times = this.state.times; // 获取当前状态的次数.
        times++;
        this.setState({
                          times: times
                      });
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome} onPress={this.timesPlus.bind(this)}>
                    有本事点我一下
                </Text>
                <Text style={styles.instructions}>
                    你点了我{this.state.times}次
                </Text>
                <Text style={styles.instructions}>
                    杨正友,哎呦不错哦
                </Text>
            </View>
        );
    }
}

/***
 *CSS3 Flex布局
 */
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

/***
 * 成功注册
 */
AppRegistry.registerComponent('VideoPlayer', () => VideoPlayer);
