import React, { Component } from 'react';

class TourInclude extends Component {
    render() {
        return (
            <div className="row tour-includes">
                <h4>The tour is packaged at $1 450.00 per person, and it includes all the essential services required for the tour, including transportations, visas and food services. Other optional and personal activities will not be included in this tour package.</h4>
                <div className="col-md-6 coll">
                    <div className="well">
                        <h4>What is included in the package</h4>
                        <ul>
                            <li>All transfers to and from the Airports</li>
                            <li>All Hotel accomodations and tent accomodations at the farm</li>
                            <li>All ground transport with 4WD Land cruiser</li>
                            <li>Experienced drivers and all their allowances</li>
                            <li>English speaking professional guide with all allowance & local guides in all destinations</li>
                            <li>Permit to visit the coffee plantation in all destination</li>
                            <li>All entrance fees as per the itinerary</li>
                            <li>Food Services and Visa payments</li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-6 coll">
                    <div className="well">
                        <h4>What is NOT included in the package</h4>
                        <ul>
                            <li>Air travel Ticket costs</li>
                            <li>Additional tours not specified in itinerary</li>
                            <li>Personal expenditure such as drinks, laundry service,             souvenirs and other personal choices</li>
                            <li>Gratuities to the driver/guides and hotel/lodge staff</li>
                            <li>Other optional activities</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default TourInclude;