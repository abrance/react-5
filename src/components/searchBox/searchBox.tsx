import * as React from "react";
import {MainProps} from "../types";


export class SearchBox extends React.Component<MainProps, object> {
    constructor(props: MainProps) {
        super(props);
    }

    render() {
        return (
            <div>
                <span>
                    search
                </span>
            </div>
        )
    }
}