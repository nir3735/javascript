class BookingSystem
{
theatreName = 'BigCinemas';
rows = 3;
columns = 2;
seats = []

constructor(){
    for (var i = 0; i < this.columns; i++) { 
        var arr = [];
        for (var j = 0; j < this.rows; j++) { 
            arr.push({ isBooked : false , index : { row : j , column: i }})
        }
        this.seats.push(arr);
    }

    console.log(this.seats);
}

      bookSeat(seat , user){
        seat.isBooked = true;
        seat.user = user;
      }

      bookTickets(arr)
    {

        if(this.isSeatsAvailable(arr.length)){
            arr.forEach(user => {

                var isUserBooked = false;
                for (var i = 0; i < this.columns; i++) { 
                    for (var j = 0; j < this.rows; j++) { 
                        
                        if(!this.seats[i][j].isBooked && !isUserBooked)
                        {
                            this.bookSeat(this.seats[i][j], user);
                            isUserBooked = true;
                         
                        }
                    }
                }
            });

            console.log(`${arr.length} seats booked`)
            return true;
        }

        console.log(`No ${arr.length} seats available continuously`)
        return false;
    }

    isSeatsAvailable(n){

        for (var i = 0; i < this.columns; i++) { 

            var availableSeatCount = 0;
            for (var j = 0; j < this.rows; j++) { 
                
                if(!this.seats[i][j].isBooked)
                {
                    availableSeatCount++;
                }
            }
            if(availableSeatCount >= n){
                return true;
            }
        }

        return false;

    }

    getSeatUser(row, column){

        return this.seats[column][row]

    }

    displaySeats(){

       console.log(this.seats);
    }




}


// n*r*c + r*c


// var x = new Array(100);
// for (var i = 0; i < x.length; i++) { 
//     x[i] = new Array(100);
// }
// var h = 0; 
// for (var i = 0; i < 10; i++) { 
//     for (var j = 0; j < 10; j++) { 
//         x[i][j] = [h++]; 
//     } 
// }  
// for (var i = 0; i < 10; i++) { 
//     for (var j = 0; j < 10; j++)    { 
//         console.log(x[i][j]); 
//     }
//     "\n";
// }


var bookingSystem = new BookingSystem();


bookingSystem.bookTickets([{"name" : "test1"}, {name : "test2"}])

bookingSystem.bookTickets([{"name" : "test1"}])

bookingSystem.bookTickets([{"name" : "test1"}, {name : "test2"}])


bookingSystem.bookTickets([{"name" : "test1"}])

bookingSystem.bookTickets([{"name" : "test1"}])
// bookingSystem.bookTickets([{"name" : "test3"}, {name : "test4"},{"name" : "test3"}, {name : "test4"},{"name" : "test3"}, {name : "test4"},{"name" : "test3"}, {name : "test4"},{"name" : "test3"}, {name : "test4"},{"name" : "test3"}, {name : "test4"}])

console.log(bookingSystem.getSeatUser(0,0))
bookingSystem.displaySeats();
