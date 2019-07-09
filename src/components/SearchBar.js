import React from 'react';

class SearchBar extends React.Component{

	state ={term: ''};

	//arrow functions have no 'this', so they search up for one
	onFormSubmit = (event) => {
		event.preventDefault();

		this.props.onSubmit(this.state.term);
	}

	render(){
		return (
			<div className="ui segment">
				<form className="ui form"
						onSubmit={this.onFormSubmit}>
					<div className="field">
					<label>Image Search <i> -- (Hit Enter)</i></label>
						<input type="text"
							value={this.state.term} 
							onChange={(e) => this.setState({ term: e.target.value})}/>
					</div>
				</form>
			</div>
		)
	}
}

export default SearchBar;