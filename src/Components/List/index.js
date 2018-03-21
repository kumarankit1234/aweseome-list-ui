import React, { Component } from 'react';

import './list.css';

class List extends Component {

    handleClick = () => {
        this.props.onClick(this.props.list);
    }

    render() {
        const {
            list: { name, tags, watchersCount, owner, description }
        } = this.props;
        return (
            <div className="list">
                <div className="list-name" onClick={this.handleClick}>
                    {name} by {owner}
                </div>
                <div className="list-description">{description}</div>
                <div className="list-watchers-count">{watchersCount} </div>
                <div className="list-tags">
                    {tags.map(tag => {
                        return <span key={tag}>{tag}</span>;
                    })}
                </div>
            </div>
        );
    }
}

export default List;
