// Write your code here

import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {id: 0}

  onCLickLeftArrow = () => {
    const {id} = this.state
    if (id === 0) {
      this.setState({id: 0})
    } else {
      this.setState(prevState => ({id: prevState.id - 1}))
    }
  }

  onCLickRightArrow = () => {
    const {id} = this.state
    const {reviewsList} = this.props
    const len = reviewsList.length
    if (id === len - 1) {
      this.setState({id: len - 1})
    } else {
      this.setState(prevState => ({
        id: prevState.id + 1,
      }))
    }
  }

  render() {
    const {id} = this.state
    const {reviewsList} = this.props
    return (
      <div className="app-container">
        <div className="profile-container">
          <h1 className="heading">Reviews</h1>
          <div className="image-container">
            <img
              src={reviewsList[id].imgUrl}
              alt={reviewsList[id].username}
              className="image"
            />
          </div>
          <div className="arrow-container">
            <button
              type="button"
              onClick={this.onCLickLeftArrow}
              data-testid="leftArrow"
              className="button"
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
                alt="left arrow"
                className="arrow-image"
              />
            </button>
            <div>
              <p className="user-name">{reviewsList[id].username}</p>
              <p className="company-name">{reviewsList[id].companyName}</p>
            </div>
            <button
              type="button"
              onClick={this.onCLickRightArrow}
              data-testid="rightArrow"
              className="button"
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
                alt="right arrow"
                className="right-arrow"
              />
            </button>
          </div>
          <p className="description">{reviewsList[id].description}</p>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
