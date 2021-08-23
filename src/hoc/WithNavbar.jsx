import { Navbar } from '../components/Navbar'
import React from "react";

export function WithNavbar(Component) {
    return class extends React.Component {
        constructor(props) {
            super(props);
        }
 
        render() {
            return (
                <div>
                <Navbar />
            <Component {...this.props} />
            </div>
            )
            
        }
    }
}
