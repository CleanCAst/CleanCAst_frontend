import React, { useState, useEffect } from "react";


// reactstrap components
import {
    Container,
    Row,
    Col
} from "reactstrap";

let ps = null;

export default function CIforDev() {


    return (
        <>
            <div className="section">
                <Container>
                    <h2>Testing Tom's Amazing Chart</h2>
                    <iframe width="800" height="600" frameborder="0" src="https://ucb-mids-capstone.s3.us-west-2.amazonaws.com/Vizzes/test_carbon_intensity_slider_plot.html?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMSJIMEYCIQC6N2rHhVwl%2F43%2FL70VrqJqhORZCid9cHYTPADgyTOScQIhANqlh25UuXef9%2B%2B8kYo9JdztGK7zaFgnhd27LLdwnculKogDCKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQARoMOTY1NjQ2OTk1ODQzIgx3yOgCo4lN8onCxs0q3AJMwhUi%2BrvDFlbX1Xd8iIZk5iWbcF%2BtghC%2FFU4LT28kEWuRAUns6A%2FllqtJwkaxzaRbbOZSWpi1wW77sLOjrL6HgtHJ4QKnWfuVSmYM%2FCr47UlEpDjb%2FmxIVEAnOBJDa7QfllY7dqYMIWB5hpaeXj3SDpK9F18uoHyeVF6K4yupdwASvIU3A9yAjDmuxLHp0kaccDgju7ayQTpgUIi30ry4l4iyRsldFtdNjDee3v02O3Yl2I8LjU8ORO47jN1CPcVsNtM4O7hcViwLkfIIsdexgoK43fQ7KElSLbLcBiyATkNPECgD8roD9Sv6kju6VI9yKsrazkMCeDmkUwsjeHZ%2FEp7z6MF11zVHm3dwwQMjmFYveJF6N5KhNSkvDi45qR7XymFgPZYhTb12rntXq2IV07XXn%2BMe0U8G0%2F3oc3CUaJYGQCwQrOOJSfqzfWcw0xSvNv9mbZfxZ4SNc1Yw26TVoQY6sgJErJ7H863MUYq%2BRI8egjbM%2B4lM7DJdcsvoSMa9W33hRno7u82As4FJLJLeKlx08VjmaObb%2F%2B55lXTfbbYrrxZZa60r9Wlu89KH4GYPBdPxy1ms%2FbXf31ZIOf328ppxG02VUnNHxjzMHDvrMD%2BAgrpB0O0oDAN88XbzrVEVvjMPvWCYD6zFLh1hXCCqYutAvYrozEf5MhiCnXkl0IRZ1kErYaJvA0SM20geeZdK5bCsC15JkR1XxUS548o6ZaE0IVXkoUokipfmBp3KB0TJ8hOcBBwdquFYpUKsc6H7BStLMx5%2FpfGhF50pQQZDublqs62%2BN1hpBRyoq0CPAhUQJzO6PYMKw6gTTHMRVmqNbN3CMQfTqPupeBAPYJ7FD%2Bp1Gpf7VieHpTCqdQmtziHeKMjYwAU%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230411T233846Z&X-Amz-SignedHeaders=host&X-Amz-Expires=21600&X-Amz-Credential=ASIA6BVIL2GBT7O6IB7O%2F20230411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Signature=037af4310cfa59c03cbc3980ae69da4173c0c4a7fdaae60b4a2f15b2e745eb45"></iframe>
                </Container>
            </div>
            <div className="section" id="ci-for-dev">
                <Container>
                    <hr className="line-primary" />
                    <h1>Carbon Intensity for Developers</h1>

                </Container >
            </div ></>
    );
}