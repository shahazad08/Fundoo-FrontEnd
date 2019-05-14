import React, { Component } from "react";

import ClickCounter from "../components/ClickCounter";
import HoverCounter from "../components/HoverCounter";

class HOC extends Component {
    render() {
        return (
            <div className="container">
            <div>
                <h2 id='design'>Higher Order Component</h2>
                </div>
                <div id='hoc'>
                    <ClickCounter names="Sagar"/>
                    <HoverCounter names="Laxman"/>
                </div>

            </div>
        );
    }
}
export default HOC;