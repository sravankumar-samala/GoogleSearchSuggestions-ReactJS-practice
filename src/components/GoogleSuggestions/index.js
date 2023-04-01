// Write your code here
import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'
import './index.css'

class GoogleSuggestions extends Component {
  constructor(props) {
    super(props)
    this.addSearchResult = this.addSearchResult.bind(this)
  }

  state = {searchInput: ''}

  onInputChange = event => {
    this.setState({searchInput: event.target.value})
  }

  addSearchResult = value => {
    this.setState({searchInput: value})
  }

  render() {
    const {searchInput} = this.state
    const {suggestionsList} = this.props
    const filteredList = suggestionsList.filter(item =>
      item.suggestion.toLowerCase().includes(searchInput),
    )

    return (
      <div className="main-container">
        <div className="container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png "
            alt="google logo"
          />
          <div className="search-container">
            <div className="search-input-cont">
              <img
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                alt="search icon"
              />
              <input
                type="search"
                className="input-search"
                placeholder="Search Google"
                onChange={this.onInputChange}
                value={searchInput}
              />
            </div>
            <ul className="suggestions-list">
              {filteredList.map(eachObj => (
                <SuggestionItem
                  addSuggestion={this.addSearchResult}
                  suggestionObj={eachObj}
                  key={eachObj.id}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default GoogleSuggestions
