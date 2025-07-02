const heading = React.createElement(
    "h1",
    {id: "parent"}, [
        React.createElement("h1", {id: "first-child"},[
        React.createElement("h1", {id: "child1"}, "I'm in h1 tag"),
        React.createElement("h2", {id: "child2"}, "I'm in h2 tag"),
    ]),
    React.createElement("h1", {id: "second-child"},[
        React.createElement("h1", {id: "child1"}, "I'm in h1 tag"),
        React.createElement("h2", {id: "child2"}, "I'm in h2 tag"),
    ])]
);

console.log(heading);


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(heading);