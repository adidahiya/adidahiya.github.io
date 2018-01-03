import Link from "gatsby-link";
import * as React from "react";

import * as styles from "./projects.module.css";

const ProjectsIndexPage = () => (
    <div className={styles.projects}>
        <h2>Creative Projects</h2>
        <p>
            Below, you'll find my work in information visualization, typography, graphic design, physical computing,
            branding, and various experiments.
        </p>
        <hr />

        <h3>Mapping Musical Genres</h3>
        <p>
            <img src={require("./mapping-music-genres/clip-1.png")} />
            <img src={require("./mapping-music-genres/clip-2.png")} />
            <a className={styles.imageLink} href={require("./mapping-music-genres/poster-photo.jpg")}>
                <img src={require("./mapping-music-genres/poster-photo-small.jpg")} />
            </a>
            <br />
            <a href={require("./mapping-music-genres/poster.pdf")}>60" &times; 40" print</a> &mdash; Spring 2014
            <br />
            Multi-dimensional graph-based visualization of the development of major musical genres from 1940&mdash;2000
            (built using data from <a href="http://the.echonest.com/">The Echo Nest</a> APIs).
        </p>
        <hr />

        <h3>Branding the Contemporary Fringe</h3>
        <p>
            <img src={require("./branding-fringe/edge-art-render.png")} />
            <img src={require("./branding-fringe/edge-art-video.png")} />
            <br />
            <a href="http://www.adidahiya.com/design/edge">Interactive application</a> &mdash; Fall 2013
            <br />
            An experimental project which attempts to brand the contemporary fringe of art &amp; design through a
            visualization which reacts to user input via webcam.{" "}
            <a href="http://vimeo.com/adidahiya/edge">Demo video on Vimeo</a>.
        </p>
        <hr />

        <h3>You Are the Product</h3>
        <p>
            <img src={require("./you-are-the-product/process.jpg")} />
            <img src={require("./you-are-the-product/doc-6.jpg")} />
            <br />
            <a href="http://www.adidahiya.com/design/typog">Website</a> &mdash; Fall 2013
            <br />
            A typography-driven project which takes a critical look at the economics of popular free web services–such
            as Google, Facebook, and Twitter–which invert the traditional product consumption relationship.
        </p>
        <hr />

        <h3>Electronic synthesis visualizer</h3>
        <p>
            <img src={require("./synthesis/synth-vis.png")} />
            <br />
            <a href="http://www.adidahiya.com/synth-vis">Interactive application</a> &mdash; Spring 2014
            <br />
            A simple browser-based synthesizer that visualizes subtractive synthesis over time. Users can play notes
            using their keyboard and see ADSR envelopes move across the isometric 3D canvas.
        </p>
        <hr />

        <h3>Tweet topic correlations between U.S. counties</h3>
        <p>
            <img src={require("./tweet-correlations/wwbp-counties.png")} />
            <br />
            <a href="http://www.adidahiya.com/wwbp-counties">Interactive application</a> &mdash; Spring 2014
            <br />
            A force-directed graph visualization which draws attention to particularly unique correlations of topics
            tweeted in different U.S. counties. Data source: Penn's{" "}
            <a href="http://wwbp.org/">World Well-Being Project</a>.
        </p>
        <hr />

        <h3>Buzz, your smart doorman</h3>
        <p>
            <img src={require("./buzz/header.png")} />
            <img src={require("./buzz/prototype.jpg")} />
            <img src={require("./buzz/internals.jpg")} />
            <br />
            <a href={require("./buzz/sell-sheet.pdf")}>Concept, prototype &amp; marketing materials</a> &mdash; Spring
            2014
            <br />
            A “smart” doorbell which sends you an SMS when a visitor arrives.
        </p>
        <hr />

        <h3>Losing My Edge</h3>
        <p>
            <img src={require("./losing-my-edge/photo.jpg")} />
            <img src={require("./losing-my-edge/preview.png")} />
            <br />
            <a href={require("./losing-my-edge/losing-my-edge.pdf")}>5" &times; 7" letterpress print</a> &mdash; Fall
            2012
            <br />
            A graphical interpretation of a text using only typography. I used the lyrics from the LCD Soundsystem song{" "}
            <em>Losing My Edge</em>.
        </p>
        <hr />

        <h3>PennApps hackathon</h3>
        <p>
            <img src={require("./pennapps/website-2014s.png")} />
            <img src={require("./pennapps/website.png")} />
            <img src={require("./pennapps/logo.png")} />
            <br />
            <a href="http://2014s.pennapps.com/">Website</a> &mdash; Fall 2013
            <br />
            Logo design, website, branding, and creative direction for one of the largest student hackathons in the U.S.
        </p>
        <hr />

        <h3>Nostrand</h3>
        <p>
            <img src={require("./vinyl-sleeve/preview.png")} />
            <br />
            <a href={require("./vinyl-sleeve/vinyl-sleeve.pdf")}>12" vinyl cover art</a> &mdash; Fall 2012
            <br />
            A vinyl cover designed to visually evoke the sounds of the song <em>Nostrand</em> by Ratatat.
        </p>
        <hr />

        <h3>Levine custom typeface</h3>
        <p>
            <a href={require("./levine-typeface/full-1.png")}>
                <img src={require("./levine-typeface/preview-1.png")} />
            </a>
            <a href={require("./levine-typeface/full-2.png")}>
                <img src={require("./levine-typeface/preview-2.png")} />
            </a>
            <br />
            Custom typeface &amp; sample sheet &mdash; Fall 2012
            <br />
            A custom typeface designed from a photograph I took of a building on UPenn's campus.
        </p>
        <hr />

        <h3>Creative process book</h3>
        <p>
            <img src={require("./process-book/preview.png")} />
            <br />
            <a href={require("./process-book/process-book.pdf")}>Booklet</a> &mdash; Fall 2012
            <br />
            A process book containing sketches and concepts for some early graphic design projects. Images are
            compressed to reduce file size (larger version available upon request).
        </p>
    </div>
);

export default ProjectsIndexPage;