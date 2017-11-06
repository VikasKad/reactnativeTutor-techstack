import React, {Component} from 'react';
import {connect} from 'react-redux';


class LibraryList extends Component {
    render() {
        console.log('props', this.props);
        return;
    }
};
const mapStateToProps = state => {
    return {libraries: state.libraries};

};
export default connect(mapStateToProps)(LibraryList);

//connect gets called and return a function that immediately calls librarylists
