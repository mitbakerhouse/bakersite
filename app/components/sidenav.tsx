
// import Link from "next/link"


const SideNav = () => {
    return (
        <div id="navigation">

            <a className="currentPage" href="index.html" target="_self">Home</a>
            <a href="about.html" target="_self">About</a>
            <a href="houseteam.html" target="_self">Houseteam</a>
            <a href="facilities.html" target="_self">Facilities</a>
            <a href="tours.html" target="_self">Tours</a>
            <div className="dropdown">
                <a className="dropbtn" href="residents.html" target="_self">Residents</a>
                <div className="dropdown-content">
                    <a href="https://docs.google.com/document/d/e/2PACX-1vTYU9DSVl3NxHC82LnRDSAhYWOqHsAk3ZBiOtV9CZ3iyLQqaDw6BlYw_TBx_l9DagXrratMLVsKvxb1/pub" target="_blank">Welcome Packet</a>
                    <a href="https://drive.google.com/file/d/1gsOLs8SS90AMRrJusvCUG2uKTNQHRqd_/view" target="_blank">Rooming Policies</a>
                    <a href="https://docs.google.com/document/d/e/2PACX-1vSeF63qsFUldkdLWg8iM6NimiC2tTj9qX3zUpQm5nTLdL3GdQYF15rGDLtAiPDFwRXtSzsM7rrylnik/pub" target="_blank">Desk Policies</a>
                    <a href="events.html" target="_self">Events Page</a>
                    <a href="reservations.html" target="_self">Reservations</a>
                </div>
            </div>
        </div>

    );
}

export default SideNav;