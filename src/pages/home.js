import React, {Component} from 'react'; 

class Home extends Component {

    state = {
        month: "",
        monthString: "",
        day: "",
        events: [],
        year: "",
        daysNumber: 0,
    }

    componentDidMount() {
        const date = new Date();
        const month = date.getMonth();
        const year = date.getFullYear();
        const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let days = 0;
        switch(month) {
            case 0:
            case 2:
            case 4:
            case 6:
            case 7:
            case 9:
            case 11:
              days = 31;
              break;
            case 1:
              if(year % 4 === 0) {
                  days = 29;
              } else{
                  days = 28;
              }
              break;
            default:
              days = 30;
          }
        this.setState({ 
            month: month,
            monthString: monthNames[month],
            events : [],
            year: year,
            daysNumber: days
        });
    }
    render() {
        return (
            <div>
                <h1>{this.state.monthString} Calendar</h1>
            </div>
        )
    }
}

export default Home;