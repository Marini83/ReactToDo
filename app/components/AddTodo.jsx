var React = require('react');

var AddTodo = React.createClass({
    onSubmit: function(e) {
        e.preventDefault();
        var todoitem = this.refs.newtodoitem.value;
            this.refs.newtodoitem.value = '';
            if (todoitem.length > 0 )
            this.props.handleAddTodo(todoitem);
            else 
            this.refs.newtodoitem.focus();
    },
    render: function() {
        return (
            <div>
                <form ref="form" onSubmit={this.onSubmit} className="AddTodo-Form">
                    <input type="text" ref="newtodoitem" placeholder="Enter new Todo"/>
                    <button className="button expanded">Add To Do</button>    
                </form>
            </div>
        )
    }
});

module.exports = AddTodo;