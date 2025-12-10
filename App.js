const parent= React.createElement('div', { className: 'parent' },
    [React.createElement('div', { className: 'child' },
        React.createElement('h1', {}, 'I am h1 tag - div 1'),
        React.createElement('h2', {}, 'I am h2 tag -div 1')
    ),
    React.createElement('div', { className: 'child' },
        React.createElement('h1', {}, 'I am h1 tag - div 2'),
        React.createElement('h2', {}, 'I am h2 tag - div 2')
    )]
);

console.log(parent);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);
