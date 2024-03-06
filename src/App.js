import React, { Component } from 'react';
import PersonProfile from './Components/PersonProfile';
import Timer from './Components/Timer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Person: {
        fullName: ' Mannai Sana',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl94Am91QsXPfnWNeuVesW6C-PxKWO2SZxGGP0T86_hxl2ytvHWvP-jn3birh57ROuWB4&usqp=CAU',
        profession: 'Developer',
      },
      shows: false,
    };
  }

  toggleShow = () => {
    this.setState(prevState => ({
      shows: !prevState.shows
    }));
  }

  render() {
    const { fullName, bio, imgSrc, profession } = this.state.Person;
    const { shows } = this.state;

    return (
      <div>
         <button 
          onClick={this.toggleShow} 
          style={{
            backgroundColor: '#007bff',
            color: '#fff',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '5px',
            cursor: 'pointer',
            margin: '20px 0',
            marginLeft:'20px'
          }}> {(this.state.shows) ? "hide" : "show"}
          </button>
        <PersonProfile
          fullName={fullName}
          bio={bio}
          imgSrc={imgSrc}
          profession={profession}
          shows={shows}
        />
    
        <div>
          {shows && <Timer/>}
        </div>
      </div>
    );
  }
}

export default App;