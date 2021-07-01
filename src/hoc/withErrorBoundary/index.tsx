import React, { Component, ComponentClass, ComponentType } from 'react';

export interface State {
	hasError: boolean;
}

const withErrorBoundary = <T extends Record<string, never>>(
	WrapperdComponent: ComponentType<T>
): ComponentClass<T, State> =>
	class ErrorBoundary extends Component<T, State> {
		constructor(props: T) {
			super(props);
			this.state = { hasError: false };
		}

		static getDerivedStateFromError(error: Error) {
			console.error(error);
			return { hasError: true };
		}

		render() {
			if (this.state.hasError) {
				return <p>Something was wrong.</p>;
			}
			return <WrapperdComponent {...this.props} />;
		}
	};
export default withErrorBoundary;
