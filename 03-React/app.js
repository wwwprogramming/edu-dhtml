"use strict";

var ExampleApplication = React.createClass({
    displayName: 'ExampleApplication',
    getInitialState: function getInitialState() {
        return { rows: this.props.rows };
    },
    handleSaveTable: function handleSaveTable(e) {
        //this.setState({author: e.target.value});
        console.log("handleSaveTable");
        console.log(this.state.rows);
        // TODO save table to server or what ever.
    },
    handleRemoveRow: function handleRemoveRow(row) {
        console.log("TOP LEVEL: handleRemoveRow");
        console.log(row);
        var remains = _.filter(this.state.rows, function (_row) {
            return parseInt(_row.id) !== parseInt(row.id);
        });
        console.log(remains);
        // these are the new state
        this.setState({ rows: remains });
    },
    handleAddRow: function handleAddRow(row) {
        var rows = this.state.rows;
        rows.push(row);
        this.setState({ rows: rows });
    },
    render: function render() {
        return React.createElement(
            "div",
            null,
            React.createElement(
                "div",
                { className: "col-md-4" },
                React.createElement(SaveButton, { save: this.handleSaveTable })
            ),
            React.createElement(
                "div",
                { className: "col-md-8" },
                React.createElement(ExampleTable, { rows: this.state.rows, handleAddRow: this.handleAddRow, handleRemoveRow: this.handleRemoveRow })
            )
        );
    }
});

var SaveButton = React.createClass({
    displayName: 'SaveButton',

    render: function render() {
        return React.createElement(
            "button",
            { onClick: this.props.save, id: "savebtn1", className: "btn btn-default", type: "button" },
            "Tallenna Taulukko"
        );
    }
});

////////////////////////////////////////////////////////////////////////////////

var TrForm = React.createClass({
    displayName: 'TrForm',
    getInitialState: function getInitialState() {
        return { id: this.props.ndx, title: "notitle", dt: moment().format("DD.MM.YYYY 12:00") };
    },

    handleTitleChange: function handleTitleChange(e) {
        console.log(e.target.value);
        this.setState({ title: e.target.value });
    },
    handleDtChange: function handleDtChange(e) {
        console.log(e.target.value);
        this.setState({ dt: moment(e.target.value, "DD.MM.YYYY HH:mm") });
    },
    handleSave: function handleSave() {
        this.props.handleSave({
            id: this.state.id,
            title: this.state.title,
            dt: this.state.dt
        });
    },

    render: function render() {

        return React.createElement(
            "tr",
            null,
            React.createElement(
                "td",
                null,
                this.props.ndx
            ),
            React.createElement(
                "td",
                null,
                React.createElement("input", { type: "text", onChange: this.handleTitleChange })
            ),
            React.createElement(
                "td",
                null,
                React.createElement("input", { type: "text", onChange: this.handleDtChange })
            ),
            React.createElement(
                "td",
                null,
                React.createElement("span", { onClick: this.handleSave, className: "btn glyphicon glyphicon-plus" }),
                React.createElement("span", { onClick: this.props.handleCancel, className: "btn glyphicon glyphicon-remove-sign" })
            )
        );
    }
});

var TrNode = React.createClass({
    displayName: 'TrNode',

    render: function render() {
        var _this = this;

        return React.createElement(
            "tr",
            null,
            React.createElement(
                "td",
                null,
                this.props.data.id
            ),
            React.createElement(
                "td",
                null,
                this.props.data.title
            ),
            React.createElement(
                "td",
                null,
                this.props.data.dt.format("DD.MM.YYYY HH:mm")
            ),
            React.createElement(
                "td",
                null,
                React.createElement("span", { onClick: function onClick() {
                        return _this.props.handleRemove(_this.props.data);
                    }, className: "btn glyphicon glyphicon-remove-sign" })
            )
        );
    }
});

////////////////////////////////////////////////////////////////////////////////

var ExampleTable = React.createClass({
    displayName: 'ExampleTable',
    getInitialState: function getInitialState() {
        return { showForm: false };
    },
    handleRemove: function handleRemove(e) {
        console.log("1... about to remove ");
        console.log(e);
        console.log(this.state);
        console.log(this.props);
        this.props.handleRemoveRow(e);
    },
    openForm: function openForm(e) {
        this.setState({ showForm: true });
    },
    saveForm: function saveForm(e) {
        this.setState({ showForm: false });
    },
    cancelForm: function cancelForm(e) {
        this.setState({ showForm: false });
    },
    handleSaveForm: function handleSaveForm(e) {
        //this.setState({author: e.target.value});
        console.log("handleSaveForm");
        console.log(e);
        // TODO SAVE FORM aka ADD ROW TO STATE
        this.props.handleAddRow(e);
        this.setState({ showForm: false });
    },
    handleCancelForm: function handleCancelForm(e) {
        //this.setState({author: e.target.value});
        console.log("handleCancelForm");
        this.setState({ showForm: false });
    },
    render: function render() {
        console.log("render table");
        console.log(this.props);
        console.log(this.state);

        var ndx = this.props.rows.length ? _.maxBy(this.props.rows, "id").id + 1 : 0;

        var rowNodes = this.props.rows.map(function (row) {
            return React.createElement(TrNode, { key: row.id, data: row, handleRemove: this.handleRemove });
        }, this);
        return React.createElement(
            "div",
            null,
            React.createElement(
                "table",
                { className: "table table-striped" },
                React.createElement(
                    "thead",
                    null,
                    React.createElement(
                        "tr",
                        null,
                        React.createElement(
                            "th",
                            null,
                            "Id"
                        ),
                        React.createElement(
                            "th",
                            null,
                            "Title"
                        ),
                        React.createElement(
                            "th",
                            null,
                            "Date"
                        ),
                        React.createElement(
                            "th",
                            null,
                            "#"
                        )
                    )
                ),
                React.createElement(
                    "tbody",
                    null,
                    rowNodes,
                    this.state.showForm ? React.createElement(TrForm, { handleSave: this.handleSaveForm, handleCancel: this.handleCancelForm, ndx: ndx }) : null
                )
            ),
            React.createElement(
                "button",
                { onClick: this.openForm, disabled: this.state.showForm ? "disabled" : "", className: "btn btn-default glyphicon glyphicon-edit", type: "button" },
                "Add Row"
            )
        );
    }
});

var rows = [{ key: 1, id: 1, title: "A1", dt: moment() }, { key: 2, id: 2, title: "A2", dt: moment() }];

ReactDOM.render(React.createElement(ExampleApplication, { rows: rows }), document.getElementById('application'));
