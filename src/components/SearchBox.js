import React, { PureComponent } from "react";

class SearchBox extends PureComponent {
    search = React.createRef();
    handle = (e) => {
        // /const info = {
        //     busqueda: this.search.current.value
        // }
        this.props.action(this.search.current.value);
    }
    render() {
        return (
            <div className="notification">
                <div className="field has-addons ">
                    <div className="control is-expanded">
                        <input
                            className="input is-small"
                            type="text"
                            placeholder="Find a product"
                            ref={this.search}
                        />
                    </div>
                    <div className="control">
                        <button className="button is-warning is-small" onClick = {this.handle} >Search</button>
                    </div>
                </div>
            </div>
        );
    }
}

SearchBox.propTypes = {};

export default SearchBox;
