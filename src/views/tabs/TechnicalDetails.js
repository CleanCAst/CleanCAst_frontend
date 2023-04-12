import React, { useState, useEffect } from "react";


// reactstrap components
import {
    Container,
    Row,
    Col
} from "reactstrap";

let ps = null;

export default function TechnicalDetails() {


    return (
        <>
            <div className="section">
                <Container>
                    <h2>Testing public url for html data viz files</h2>
                    <iframe width="800" height="600" frameborder="0" src="https://ucb-mids-capstone.s3.us-west-2.amazonaws.com/Vizzes/net_generation_and_co2_forecasts_viz.html?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMSJHMEUCIGTILjuzS6iivIjXm%2Fcnv8QvLROFQf5aYY3EfJEGRuVlAiEAlutg7qZmrtY71SAowZIYFTHuMn8Ot9EUy0%2FztaS3aqMqiAMIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARABGgw5NjU2NDY5OTU4NDMiDHIYtiuple3xnh8p7CrcAnObVWYg0xU5PYDuVRoCGonYFu9hafM9MjzaoFajGQ3eOijflHqRWq%2Bq06CRY1hrScmyedxrCZggcKsWTG%2FK%2BC%2BLgsVmIqBaVD%2BGAGgUeBkpwcBGi6n476Ng%2BJmpyI67b9OWwyHWLKxg6SotCyrJROChcUbv2bIswvqt8fH3aR%2BGZUVfsbmuVVtKwWFAnYHVKywRIfCXBAqaDJFYRVKNG6XWABgONtlMpbuyKSZfZRF3IlkiAZ6KNeFEuszW1QsaxU2JUoD%2B3ayhkCqR4BJg6mLfEmSnU6IwDKFgDlYk83WSZWkttse%2F2p5G1yqAOwweH8YyWkV4lA5cRFR43sZ4fNErEGWmhcX11Za4LY62Xol0OBNc4qPIbBwSsltneJ%2BV0itaMeVQZi4JN4IXY3pA3bFiAQhBkPqY9X7EtI1RAMG0dT%2BqLnsDYKpCtg4pwpyt6wCY65TEDSdkNNRwRzCG39yhBjqzApl7rb1D177wa4cH0Iv1YSJPLVW4LY42h9Uygu5bTyRdKSgD9WEyt10uergd7f5fJz2lePbJsBKu98BZ2DvopMbkxz1e3wxe1a5Eg6UGkIOPQOtXcnTlJhTGPgEIGzA246XOVHbJbPR9it%2Bm8O9qYiDPh6T0%2BlADp9TMHtCQsNpCJ0ltyqmiLAQj0EBK6AA9XgphKqR2JUFqJMNeHYcbW3XV%2BOeHYDBiNKZSgRW92shTedP9jXEXFnOV3q0k2eXyrWRfwWamiKl%2BAgG0rtYuPaVVLBCP5BS4SOOMMehNpJbEzEwbpJ44BJ5xNFpOAPdV2%2F5nN4POWZsW6T6nVh%2BxYp3WssHSQp3TqawmtvcnO1zI1%2FVwtJZDyO4dGSlSFz85dEGL4HsQOFxf2T3Ef%2B%2BZkFJ0LEY%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230412T233824Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIA6BVIL2GB6BTFVASG%2F20230412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Signature=dd7f1a13c3f0ff2da7bc91433320354a9c7916961916513a6ba7ef9c7aa60bd4"></iframe>
                </Container>
            </div>
            <div className="section" id="technical-details">
                <Container>
                    <hr className="line-primary" />
                    <h1>Carbon Intensity for Developers</h1>

                </Container >
            </div ></>
    );
}