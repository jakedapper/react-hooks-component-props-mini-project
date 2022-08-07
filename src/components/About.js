function About({about, image="https://via.placeholder.com/215"}){
    return(
        <>
            <img alt="blog logo"src={image}></img>
            <p>{about}</p>
        </>
    );
}

export default About;