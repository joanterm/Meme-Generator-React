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
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <div>
                <form>
                    <input type="text" name="topText" value={this.state.topText} onChange={this.displayText}/>
                    <input type="text" name="bottomText" value={this.state.bottomText} onChange={this.displayText}/>
                    <button>Generate!</button>
                </form>
            </div>
        )
    }
}

export default MemeGenerator