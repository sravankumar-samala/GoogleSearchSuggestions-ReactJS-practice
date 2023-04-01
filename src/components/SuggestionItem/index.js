// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {addSuggestion, suggestionObj} = props
  const {suggestion} = suggestionObj

  const addToSearchBox = () => {
    addSuggestion(suggestion)
  }
  return (
    <li className="suggestion-item">
      <p>{suggestion}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
        onClick={addToSearchBox}
      />
    </li>
  )
}
export default SuggestionItem
