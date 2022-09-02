const page = (
    <div>
        <img src="react-logo.png" width="40px"></img>
        <h1>Fun facts about React</h1>
        <ul>
            <li>Was first released in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>has well over 100K stars on GitHub</li>
            <li>Is maintained by Facebook</li>
            <li>powers thousand of enterprise apps, including mobile apps</li>
        </ul>
    </div>
)

ReactDOM.render(
    page,
    document.querySelector("#root")
)