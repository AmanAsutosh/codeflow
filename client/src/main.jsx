import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {RecoilRoot} from 'recoil';


class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
   
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("🛑 React Error Caught in ErrorBoundary:");
    console.error("🔹 Error:", error);
    console.error("📍 Component Stack:", errorInfo.componentStack);

    this.setState({ error, errorInfo });


  }

  render() {
    if (this.state.hasError) {
      return (

      <div style={{ padding: 20, color: 'red' }}>
      <h1>Something went wrong.</h1>
      <pre style={{ whiteSpace: 'pre-wrap' }}>
      {this.state.error && this.state.error.toString()}
       {'\n'}
       {this.state.errorInfo && this.state.errorInfo.componentStack}
      </pre>
    </div>
      )
    }
    return this.props.children;
  }
}

export default ErrorBoundary;




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <ErrorBoundary>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </ErrorBoundary>
</React.StrictMode>

);
