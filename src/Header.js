import React, {Component} from 'react';

class Header extends Component {
    constructor(props){
        super(props);
        //showDropdown will toggle the rendering of the DropDown menu
        this.state = {
            showDropdown: false
        }
    }

    //This is the method that will toggle the value on state
    toggleDropdown = () => {
        this.setState({showDropdown: !this.state.showDropdown})
    }

    render(){
        return (
            <header>
                <img src='https://upload.wikimedia.org/wikipedia/commons/4/40/97_Geo_Metro.jpg' alt='geo metro'/>
                {/* this nav displays at desktop screen size */}
                <nav id='desktop-nav'>
                    <a>Profile</a>
                    <a>About</a>
                    <a>Contact</a>
                </nav>
                {/* this nav displays at mobile screen size */}
                <nav id='mobile-nav' onClick={this.toggleDropdown}>
                    Burger
                </nav>
                {/* conditional rendering to display the dropdown menu based on the item on state */}
                {this.state.showDropdown
                ? (<div id='dropdown'>
                    <span>Profile</span>
                    <span>About</span>
                    <span>Contact</span>
                    </div>)
                : null}
            </header>
        )
    }
}

export default Header;