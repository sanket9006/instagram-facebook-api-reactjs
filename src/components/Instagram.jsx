import React, { State, Component } from 'react'
import { Card, Button } from 'react-bootstrap'
import './insta.css'
export default class instagram extends Component {

    state = {
        loading: true,
        posts: []
    }

    async componentDidMount() {
        const token = "IGQVJWUENMV212aW9zV1I2WFltNUs5VWo5SWtSYVNYTU5oTlNYSC10R0lhZAlpaSmlEbkRaM1FjQ0ppX0tadUxSbWZAKbzE3bkg4WVQ4anNfNGU3VTVGSVJwSmI2QmFVZAE9uNWVHTHpIZA2lnbDZAiLW94egZDZD"
        const query = "id,username,timestamp,caption,media_url,media_type,permalink,children"
        const final_url = "https://graph.instagram.com/me/media?fields=" + query + "&access_token=" + token

        const response = await fetch(final_url);
        const data = await response.json();
        console.log("1");
        console.log(data.data);
        this.setState({ posts: data.data })
    }

    render() {
        return (
            <div>
                <div className="insta-grid">
                    {
                        this.state.posts.map((post) =>
                            <div>
                                <Card >
                                    {/* {post.media_url.includes("video.cdninstagram.com") } */}

                                    <Card.Img className="insta-photo" variant="top" src={post.media_url} />
                                    {/* <video width="300" height="270" controls >
                                        <source src={post.media_url} type="video/mp4" />
                                    </video> */}
                                    <Card.Body>
                                        <Card.Title>Caption</Card.Title>
                                        <Card.Text>
                                            {post.caption}
                                        </Card.Text>
                                        <Button href={post.permalink} variant="primary">Show Post</Button>
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
