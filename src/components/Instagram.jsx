import React, { State, Component } from 'react'
import { Card, Button } from 'react-bootstrap'
import './insta.css'
export default class instagram extends Component {
    sanket = "IGQVJVSEhiZAlVBeVN2S3NkNmRPU1E2V3ZANRHhNWWVkMG9KUmJpaWNYYnNPSWJMOThmNkxVRU1vd2dsUVRqT0RBMU05NklHTk5DN1UtcDl3bE9qbHlBYTBUSTlsZAVZAEOEp3UzFqQXlSRy04ZAkZAXcElqSAZDZD"
    dscwow = "IGQVJWUENMV212aW9zV1I2WFltNUs5VWo5SWtSYVNYTU5oTlNYSC10R0lhZAlpaSmlEbkRaM1FjQ0ppX0tadUxSbWZAKbzE3bkg4WVQ4anNfNGU3VTVGSVJwSmI2QmFVZAE9uNWVHTHpIZA2lnbDZAiLW94egZDZD"

    state = {
        profile: [],
        posts: [],
        token: "IGQVJWUENMV212aW9zV1I2WFltNUs5VWo5SWtSYVNYTU5oTlNYSC10R0lhZAlpaSmlEbkRaM1FjQ0ppX0tadUxSbWZAKbzE3bkg4WVQ4anNfNGU3VTVGSVJwSmI2QmFVZAE9uNWVHTHpIZA2lnbDZAiLW94egZDZD"
    }

    async componentDidMount() {


        const token = this.state.token
        const query = "id,username,timestamp,caption,media_url,media_type,permalink,children"
        const final_url = "https://graph.instagram.com/me/media?fields=" + query + "&access_token=" + token

        const response = await fetch(final_url);
        const data = await response.json();
        console.log("1");
        console.log(data.data);
        this.setState({ posts: data.data })
        this.setState({ profile: data.data[0] })

    }
    render() {
        return (
            <div>
                <div className="heading">
                    <h1> Instagram Basic Display API</h1>
                    <br></br>
                    <a href="https://www.sanketpatil.me/"><h3> by @sanket_patil </h3></a>
                    <br></br>
                    <Button onClick={() => this.setState({ token: this.sanket })}> ____sanket____patil____ </Button>
                    <span>  </span>
                    <Button variant="secondary" onClick={() => this.setState({ token: this.dscwow })}> dsc.wow </Button>
                   
                </div>

                <div className="insta-grid">
                    {
                        this.state.posts.map((post) =>
                            <div>
                                <Card>
                                    <Card.Img className="insta-photo" variant="top" src={post.media_url} />
                                    <Card.Body>
                                        <Card.Title>Caption</Card.Title>
                                        <Card.Text>
                                            {post.caption}
                                        </Card.Text>
                                        <Button size="block" href={post.permalink} variant="primary">Show Post</Button>
                                    </Card.Body>
                                </Card>
                            </div>
                        )
                    }
                </div>
            </div>
        )
    }
}
