import * as React from 'react';

interface IMyComponentProps {
    value: number;
}

export default class Child extends React.Component<IMyComponentProps> {

    constructor(props) {
        super(props);
    }

    render() {

        this.props.value;

        return (
            <div>sss</div>
        )
    }

}