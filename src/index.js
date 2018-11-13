import dva from 'dva';

// import './index.css';

import RouterConfig from "./router.js";

import createHistory from 'history/createBrowserHistory';


window._history = createHistory();

// 1. Initialize
const app = dva({
  history: window._history
});

// 2. Plugins
// app.use({});

// 3. Model
app.model(require('./models/OrderDetail').default);

// 4. Router
app.router(RouterConfig);

// 5. Start
app.start('#root');
