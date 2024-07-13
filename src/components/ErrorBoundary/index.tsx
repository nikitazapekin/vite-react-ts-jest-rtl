import React from 'react';
import "./index.scss"
import { ErrorBoundaryProps, ErrorBoundaryState } from './types.ts';

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);

        this.state = {
            error: false,
        };
    }

    static getDerivedStateFromError(): ErrorBoundaryState {
        return { error: true };
    }

    componentDidCatch(error: Error) {
        console.log("Error caught by ErrorBoundary:", error);
        this.setState({ error: true });
    }
handleClose =()=> {
    this.setState({error: false})
}
    render() {
        if (this.state.error) {
            return (
                <>
                    <div className="error">
                        <div className="error__overlay" onClick={this.handleClose}></div>
                        <div className="error__inner">

                            <p className='error__title'>Something went wrong</p>
                            <button className="error__btn" onClick={this.handleClose}>
                                Close
                            </button>
                        </div>
                    </div>
                </>
            );
        }

        return this.props.children;
    }
}
