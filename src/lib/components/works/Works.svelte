<script lang="ts">
	import Work from "./Work.svelte";

    type WorkInfo = {
        title: string,
        description: string,
        position: string,
        photo: string,
        date: string,
    }

    let satellite: WorkInfo = {
        title: "Satellite.im",
        date: "2021 - 2025",
        description: `Over the span of four years I played a key role in turning the company from an idea into a real, working product. 
            Under my leadership we raised $10.5 million in funding, lead a team of over 30 people, and stayed hands-on with development as the lead engineer. 
            My team built a fully decentralized chat platform that runs without servers, putting user privacy and control first. From managing people to shipping 
            product, I've been involved every step of the way.`,
        position: "CEO & Lead Developer",
        photo: "/satellite.png"
    }

    let lootsafe: WorkInfo = {
        title: "LootSafe",
        date: "2017 - 2019",
        description: `As CEO and Founder of LootSafe, LLC​, a blockchain gaming startup, I led the creation of a platform that enabled game developers 
        to tokenize in-game assets (pre NFT) on the blockchain. I drove the vision and product development for LootSafe, aiming to give players true ownership of digital items. 
        Under my leadership, the team built a game development platform that allows developers to easily create, decentralize, and manage game assets on the public blockchain​.`,
        position: "Founder & CEO",
        photo: "/lootsafe.png"
    }

    let shapeshift: WorkInfo = {
        title: "ShapeShift",
        date: "2016 - 2017",
        description: `During arguably the most rapid growth period of crypto to date I helped further the Prism platform in 
        addition to building other tools within ShapeShift, a well-known cryptocurrency exchange platform. Specifics can be requested in person 
        but to respect company policies will be omitted online.`,
        position: "Software Engineer",
        photo: "/shapeshift.png"
    }

    let youtube: WorkInfo = {
        title: "JeromeASF (YouTube)",
        date: "2016 - 2021",
        description: `JeromeASF is a popular online gaming content brand, and in this role I produced gaming-related video content and streams. 
        This required creating charismatic and engaging content, loosely managing a community of viewers, and collaborating on entertainment projects 
        under the JeromeASF umbrella. This role continued for many years during after work hours – I leveraged my gaming passion and on-camera skills to build an audience. 
        While not an engineering position, my work as a content creator demonstrates my versatility, as well as my ability to engauge with millions of people publicly.`,
        position: "Content Creator",
        photo: "/youtube.png"
    }
</script>

<div id="works">
    <div id="history"></div>

    <h2>Notable History</h2>
    
    <Work title={satellite.title} description={satellite.description} position={satellite.position} photo={satellite.photo} date={satellite.date} />
    <Work title={lootsafe.title} description={lootsafe.description} position={lootsafe.position} photo={lootsafe.photo} date={lootsafe.date} />
    <Work title={shapeshift.title} description={shapeshift.description} position={shapeshift.position} photo={shapeshift.photo} date={shapeshift.date} />
    <Work title={youtube.title} description={youtube.description} position={youtube.position} photo={youtube.photo} date={youtube.date} />
</div>

<style lang="scss">
    #works {
        h2 {
            color: var(--cream);
            font-size: 2rem;
        }
    }
</style>