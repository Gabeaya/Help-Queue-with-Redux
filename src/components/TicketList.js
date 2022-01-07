import React from "react";
import Ticket from "./Ticket";
import PropTypes from "prop-types";

const mainTicketList = [
  {
    names: 'Thato and Haly',
    location: '3A',
    issue: 'Firebase won\'t save record. Halp.'
  },
  {
    names: 'Sleater and Kinney',
    location: '4B',
    issue: 'Prop types are throwing an error.'
  },
  {
    names: 'Imani & Jacob',
    location: '9F',
    issue: 'Child component isn\'t rendering.'
  }
];
function TicketList(){
  return (
    <React.Fragment>
      <hr/>L
        {mainTicketList.map((ticket, index) =>
          <Ticket names={ticket.names}
            location={ticket.location}
            issue={ticket.issue}
            key={index}/>
        )}
    </React.Fragment>
    

  );
}

export default TicketList;