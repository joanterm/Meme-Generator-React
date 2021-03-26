import React from "react"

class MemeGenerator extends React.Component {
    constructor() {
        super()
        this.state = {
            topText: "",
            bottomText: "",
            randomImage: "http://i.imgflip.com/1bij.jpg",
            allMemesImg: []
        }
    }
    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
        .then((response) => {
            return response.json()
        })
        .then((newData) => {
            console.log(newData.data.memes)
            //const {memes} = newData.data //EQUIVALENT TO THE LINE ABOVE, IT'S DESTRUCTURED
            const allMemes = newData.data.memes
            console.log(allMemes) //OR console.log(memes) FROM DESCTRUCTURING
            this.setState({
                allMemesImg: allMemes
            })       
        })
    }
    displayText = (event) => {
        //const {name, value} = event.target
        //this.setState({ [name]: value })
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    generateMeme = (event) => {
        event.preventDefault()
        const randomNumber = Math.floor(Math.random() * this.state.allMemesImg.length)
        const randomMemeImage = this.state.allMemesImg[randomNumber].url
        this.setState({
            randomImage: randomMemeImage
        })
    }

    render() {
        return (
            <div>
                <form className="meme-form">
                    <input type="text" name="topText" value={this.state.topText} onChange={this.displayText}/>
                    <input type="text" name="bottomText" value={this.state.bottomText} onChange={this.displayText}/>
                    <button onClick={this.generateMeme}>Generate!</button>
                </form>
                <div className="meme">
                    <img src={this.state.randomImage} alt=""/>
                    <h2 className="top">{this.state.topText}</h2>
                    <h2 className="bottom">{this.state.bottomText}</h2>
                </div>
            </div>
        )
    }
}

export default MemeGenerator