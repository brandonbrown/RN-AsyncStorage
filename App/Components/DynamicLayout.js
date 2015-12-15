'use strict';

var React = require('react-native');

var {
  TouchableHighlight,
  View,
  Text,
  TextInput
} = React;

class DynamicLayout extends React.Component{

    getInitialState: function () {
        return {
            showCancel: false,
        };
    },

    toggleCancel: function () {
        this.setState({
            showCancel: !this.state.showCancel
        });
    }

    _renderCancel: function () {
        if (this.state.showCancel) {
            return (
                <TouchableHighlight
                    onPress={this.toggleCancel()}>
                    <View>
                        <Text style={styles.cancelButtonText}>Cancel</Text>
                    </View>
                </TouchableHighlight>
            );
        } else {
            return '';
        }
    },

    render() {
        return (
            <TextInput
                onFocus={this.toggleCancel()}
                onChangeText={(text) => this.doSearch({input: text})} />
            {this._renderCancel()}
        );
    }

};

module.exports = DynamicLayout;
