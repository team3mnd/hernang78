import React from 'react';
import './Slide.css';


export class Slide extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      class: this.props.instance
    };
    this.right = this.right.bind(this);

  }

/*   right() {
    const c = this.state.class;
    const x = 1;
    setTimeout(() => {
      if (c > 1) {
        this.setState({ class: c + 1 })
      } else {
        this.setState({ class: x })
      }
      this.props.change(this.right);
      console.log("hola");
    }, 4000);
  } */

  /*  componentDidMount() {
     this.right();
   } */

  stackimg(){
    let stack=  this.props.setimg.map((i,k)=>{
        return(
          <img key='k' src={i} className=""></img>
        )
    })
    console.log(stack)
  }

  render() {
    return <div className="container">
      <div className="d-flex row">
        {/* this.stackimg */}
      </div>
    </div>
  }
}

export default Slide;