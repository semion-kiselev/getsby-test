import React, {PureComponent} from 'react';
import Layout from '../components/layout';

class SearchPage extends PureComponent {
    constructor() {
        super();

        this.state = {
            query: '',
            data: []
        }

        this.onInput = this.onInput.bind(this);
    }

    onInput(e) {
        const query = e.target.value
        this.setState({query}, () => {
            if (query.length > 1) {
                fetch('/items.json')
                    .then(res => res.json())
                    .then((data) => this.setState({data: this.filterDataWithQuery(data, query.toLowerCase())}));
            } else {
                this.setState({ data: [] });
            }
        });
    }

    filterDataWithQuery(data, query) {
        return data.filter(({name, description}) =>
            name.toLowerCase().indexOf(query) > -1 || description.toLowerCase().indexOf(query) > -1);
    }

    renderItems(data) {
        return data.map(({id, name, description, section}) => (
            <div key={id}>
                <div>{name}</div>
                <div>{description}</div>
                <div>{section}</div>
            </div>
        ))
    }

    render() {
        const {query, data} = this.state;
        const { locale } = this.props.pageContext;

        return (
            <Layout locale={locale}>
                <h1>
                    Search...
                </h1>
                <p>
                    <input
                        type="text"
                        onChange={this.onInput}
                        value={query}
                    />
                </p>
                <div>
                    {
                        data.length > 0
                            ? <div>{this.renderItems(data)}</div>
                            : <div>No Search Results :(</div>
                    }
                </div>
            </Layout>
        );
    }
}

export default SearchPage;
