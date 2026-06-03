import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './styles/global.css';

const rootElement = document.getElementById('root');

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  componentDidCatch(error) {
    console.error(error);
  }

  render() {
    if (this.state.error) {
      return (
        <main className="render-error">
          <h1>Ứng dụng chưa render được</h1>
          <p>{this.state.error.message}</p>
        </main>
      );
    }

    return this.props.children;
  }
}

try {
  createRoot(rootElement).render(
    <React.StrictMode>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </React.StrictMode>
  );
} catch (error) {
  rootElement.innerHTML = `
    <main class="render-error">
      <h1>Ứng dụng chưa render được</h1>
      <p>Hãy mở DevTools Console để xem lỗi JavaScript chi tiết.</p>
    </main>
  `;
  console.error(error);
}
