import React, { Component } from 'react';

import './list-data.css';

class ListData extends Component {

    handleClick = () => {
        this.props.onClick(this.props.list);
    }

    render() {
        const {
            list: { name, tags, watchersCount, owner, description, contents, links, category }
        } = this.props;
        return (
            <div className="list-data">
                <div className="list-data-go-back" onClick={this.handleClick}> Go Back </div>
                <div className="list-data-name">
                    {name} by {owner}
                </div>
                <div className="list-data-description">{description}</div>
                <div className="list-data-watchers-count">Watchers: {watchersCount} </div>
                <div className="list-data-tags">
                    {tags.map(tag => {
                        return <span key={tag}>{tag}</span>;
                    })}
                </div>
                <div className="list-data-contents-name"> {category}</div>
                <div className="list-data-contents">
                    {
                        links.map(link => {
                            return (
                                <div>

                                    <div className="list-data-contents-values">
                                        <div className="list-data-name-value"><a href={link}>{link} </a></div>
                                    </div>
                                </div>
                            )

                        })
                    }
                </div>
            </div>
        );
    }
}

export default ListData;
